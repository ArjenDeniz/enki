<template>
    <section class="container mt-3 mb-3 center limited">
        <div class="poster center">
            <img src="/27_Usukff.webp" alt="ucan"/>
        </div>
        <div class="poster-text">
            <h3>Uçan Süpürge</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt ad numquam expedita laudantium quibusdam quia nobis, error placeat sapiente tenetur maxime quas similique dignissimos quidem recusandae veniam magnam ipsum.</p>
        </div>
        <div class="poster center">
            <img src="/AYUFF24_Afis-581x814.png" alt="ucan"/>
        </div>
        <div class="poster-text">
            <h3>Uçan Süpürge</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt ad numquam expedita laudantium quibusdam quia nobis, error placeat sapiente tenetur maxime quas similique dignissimos quidem recusandae veniam magnam ipsum.</p>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        img {
            width: 250px;
        }
        @media screen and (max-width: 768px) {
            width: 100%;
            grid-template-columns: 1fr;
            gap: 20px;
            align-items: center;
            
        }
    }
    .poster{
        width: 300px;
        padding: 7%;
        position: relative;
        margin: 0 auto;
        background-color: $white-color;
        box-shadow: 0 3px 12px $text-color;
        filter: saturate(70%) contrast(85%);
        img{
            width: 100%;
            display:block;
            z-index: 1;
        }
    &:before,
    &:after {
        content: '';
        width: 100%;
        left: 0;
        position: absolute;
    }
  
    &:before {
        height: 4%;
        bottom: -4%;
        background-repeat: no-repeat;
        background-image: 
        linear-gradient(177deg, rgba(0, 0, 0, 0.22) 10%, transparent 50%),
        linear-gradient(-177deg, rgba(0, 0, 0, 0.22) 10%, transparent 50%);
        background-size: 49% 100%;
        background-position: 
        2% 0,
        98% 0;
    }
  
    &:after {
        height: 100%;
        top: 0;
        z-index: 2;
        background-repeat: no-repeat;
        background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.1) 0.5%, rgba(0, 0, 0, 0.15) 1.2%, transparent 1.2%),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0.5%, rgba(0, 0, 0, 0.15) 1.2%, transparent 1.2%),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0.5%, rgba(0, 0, 0, 0.15) 1.2%, transparent 1.2%),
        linear-gradient(265deg, rgba(0, 0, 0, 0.2), transparent 10%),
        linear-gradient(5deg, rgba(0, 0, 0, 0.2), transparent 15%),
        linear-gradient(-5deg, rgba(0, 0, 0, 0.1), transparent 10%),
        linear-gradient(5deg, rgba(0, 0, 0, 0.1), transparent 10%),
        linear-gradient(-265deg, rgba(0, 0, 0, 0.2), transparent 10%),
        linear-gradient(-5deg, rgba(0, 0, 0, 0.2), transparent 15%),
        linear-gradient(266deg, rgba(0, 0, 0, 0.2), transparent 10%);
        background-size: 
        50% 100%,
        100% 33.3333%,
        100% 33.3333%,
        50% 33.3333%,
        50% 33.3333%,
        50% 33.3333%,
        50% 33.3333%,
        50% 33.3333%,
        50% 33.3333%,
        50% 33.3333%;
        background-position: 
        right top,
        left center,
        left bottom,
        left top,
        left top,
        right top,
        left center,
        right center,
        right center,
        left bottom;
    }
    }
</style>