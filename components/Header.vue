<template>
  <header class="header">
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $text-color;
  
  nav {
    ul {
      display: flex;
      list-style: none;
      padding: 0rem;
      
      li {
        padding:8px;
        a {
          text-decoration: none;
          color: inherit;          
          &:hover {
            color: $primary-color;
          }
          
          &.router-link-active {
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>