<template>
    <div class="container">
        <div class="content">
            <h2>Connection</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione excepturi quibusdam voluptate quasi soluta quia vel doloribus, saepe perferendis, asperiores eius quidem aut a repellat similique voluptatibus fugit molestiae blanditiis?</p>
        </div>
        <div class="canvas-container">
        <canvas ref="canvas"></canvas>
        </div>
    </div>

</template>
<style lang="scss" scoped>
.container{
    width: 100%;
    height: 25vh;
    position: relative;
}
.canvas-container{
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.content{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    max-width: 600px;
    padding: 0 1.5rem;
    transform: translate(-50%, -50%);
    height: 100%;
    z-index: 2; /* Make content appear above canvas */
    color: white; /* Light text for readability against dark background */
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    max-height: 80%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

canvas {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: $secondary-color;
}
</style>
<script>
export default {
  name: 'NetworkCanvas',
  data() {
    return {
      canvas: null,
      ctx: null,
      circ: 2 * Math.PI,
      nodes: [],
      mouse: { x: 0, y: 0 },
      SENSITIVITY: 100,
      SIBLINGS_LIMIT: 10,
      DENSITY: 50,
      NODES_QTY: 0,
      ANCHOR_LENGTH: 20,
      MOUSE_RADIUS: 200,
      animationFrameId: null,
      primaryColor: { r: 230, g: 57, b: 70 },
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    
    if (!this.ctx) {
      alert("Ooops! Your browser does not support canvas :'(");
      return;
    }
    
    this.resizeWindow();
    this.mouse = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2
    };
    
    this.initNodes();
    
    // Set up event listeners
    window.addEventListener('resize', this.resizeWindow);
    this.canvas.addEventListener('mousemove', this.handleMouseMove);
    
    // Start animation loop
    this.animate();
  },
  beforeUnmount() {
    // Clean up event listeners and animation loop
    window.removeEventListener('resize', this.resizeWindow);
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
    
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  },
  methods: {
    initNodes() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.nodes = [];
      this.NODES_QTY = 0;
      
      for (let i = this.DENSITY; i < this.canvas.width; i += this.DENSITY) {
        for (let j = this.DENSITY; j < this.canvas.height; j += this.DENSITY) {
          this.nodes.push(this.createNode(i, j));
          this.NODES_QTY++;
        }
      }
    },
    createNode(x, y) {
      const vm = this;
      const node = {
        anchorX: x,
        anchorY: y,
        x: Math.random() * (x - (x - vm.ANCHOR_LENGTH)) + (x - vm.ANCHOR_LENGTH),
        y: Math.random() * (y - (y - vm.ANCHOR_LENGTH)) + (y - vm.ANCHOR_LENGTH),
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        energy: Math.random() * 100,
        radius: Math.random(),
        siblings: [],
        brightness: 0,
        
        drawNode() {
          const color = `rgba(${vm.primaryColor.r}, ${vm.primaryColor.g}, ${vm.primaryColor.b}, ${this.brightness})`;
          vm.ctx.beginPath();
          vm.ctx.arc(this.x, this.y, 2 * this.radius + 2 * this.siblings.length / vm.SIBLINGS_LIMIT, 0, vm.circ);
          vm.ctx.fillStyle = color;
          vm.ctx.fill();
        },
        
        drawConnections() {
          for (let i = 0; i < this.siblings.length; i++) {
            const color = `rgba(${vm.primaryColor.r}, ${vm.primaryColor.g}, ${vm.primaryColor.b}, ${this.brightness})`;
            vm.ctx.beginPath();
            vm.ctx.moveTo(this.x, this.y);
            vm.ctx.lineTo(this.siblings[i].x, this.siblings[i].y);
            vm.ctx.lineWidth = 1 - vm.calcDistance(this, this.siblings[i]) / vm.SENSITIVITY;
            vm.ctx.strokeStyle = color;
            vm.ctx.stroke();
          }
        },
        
        moveNode() {
          this.energy -= 2;
          
          if (this.energy < 1) {
            this.energy = Math.random() * 100;
            
            if (this.x - this.anchorX < -vm.ANCHOR_LENGTH) {
              this.vx = Math.random() * 2;
            } else if (this.x - this.anchorX > vm.ANCHOR_LENGTH) {
              this.vx = Math.random() * -2;
            } else {
              this.vx = Math.random() * 4 - 2;
            }
            
            if (this.y - this.anchorY < -vm.ANCHOR_LENGTH) {
              this.vy = Math.random() * 2;
            } else if (this.y - this.anchorY > vm.ANCHOR_LENGTH) {
              this.vy = Math.random() * -2;
            } else {
              this.vy = Math.random() * 4 - 2;
            }
          }
          
          this.x += this.vx * this.energy / 100;
          this.y += this.vy * this.energy / 100;
        }
      };
      
      return node;
    },
    calcDistance(node1, node2) {
      return Math.sqrt(Math.pow(node1.x - node2.x, 2) + (Math.pow(node1.y - node2.y, 2)));
    },
    findSiblings() {
      for (let i = 0; i < this.NODES_QTY; i++) {
        const node1 = this.nodes[i];
        node1.siblings = [];
        
        for (let j = 0; j < this.NODES_QTY; j++) {
          const node2 = this.nodes[j];
          
          if (node1 !== node2) {
            const distance = this.calcDistance(node1, node2);
            
            if (distance < this.SENSITIVITY) {
              if (node1.siblings.length < this.SIBLINGS_LIMIT) {
                node1.siblings.push(node2);
              } else {
                let node_sibling_distance = 0;
                let max_distance = 0;
                let s;
                
                for (let k = 0; k < this.SIBLINGS_LIMIT; k++) {
                  node_sibling_distance = this.calcDistance(node1, node1.siblings[k]);
                  
                  if (node_sibling_distance > max_distance) {
                    max_distance = node_sibling_distance;
                    s = k;
                  }
                }
                
                if (distance < max_distance) {
                  node1.siblings.splice(s, 1);
                  node1.siblings.push(node2);
                }
              }
            }
          }
        }
      }
    },
    redrawScene() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.findSiblings();
      
      for (let i = 0; i < this.NODES_QTY; i++) {
        const node = this.nodes[i];
        const distance = this.calcDistance({
          x: this.mouse.x,
          y: this.mouse.y
        }, node);
        
        if (distance < this.MOUSE_RADIUS) {
          node.brightness = 1 - distance / this.MOUSE_RADIUS;
        } else {
          node.brightness = 0;
        }
        
        node.drawNode();
        node.drawConnections();
        node.moveNode();
      }
    },
    resizeWindow() {
      // Simplified resize function - get the canvas dimensions from its parent
      this.canvas.width = this.canvas.offsetWidth || window.innerWidth;
      this.canvas.height = this.canvas.offsetHeight || window.innerHeight;
      
      // Reinitialize nodes when canvas size changes
      if (this.nodes && this.nodes.length > 0) {
        this.initNodes();
      }
    },
    handleMouseMove(e) {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    },
    animate() {
      this.redrawScene();
      this.animationFrameId = requestAnimationFrame(this.animate);
    }
  }
};
</script>