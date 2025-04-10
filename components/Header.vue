<template>
  <header class="header">
    <NuxtLink to="/" class="logo-link">
      <img src="/Logo-primary-onwhite.png" alt="Website Logo" class="logo">
    </NuxtLink>
    <nav>
      <ul>
        <li><NuxtLink to="/">About us</NuxtLink></li>
        <li><NuxtLink to="/">Projects</NuxtLink></li>
        <li><NuxtLink to="/">Works</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $white-color;
  background-color: $secondary-color;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  
  .logo{
    width: 150px;
    height: auto;
    padding: 0;
    margin: 0;
  }
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
          font-weight: 700;
          &:hover {
            color: $primary-color;
          }
        }
      }
    }
  }
}
</style>