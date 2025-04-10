<template>
  <header class="header row">
    <NuxtLink to="/" class="logo-link">
      <img src="/Logo-primary-onwhite.png" alt="Website Logo" class="logo mb-2 mt-2 ml-2">
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
  }
  nav {
    ul {
      display: flex;
      list-style: none;
      padding: 0rem;
      gap: 16px;
      li {
        a {
          text-decoration: none;
          color: inherit;  
          font-weight: 700;
          font-size: 32px;
          &:hover {
            color: $primary-color;
          }
        }
      }
    }
  }
}
</style>