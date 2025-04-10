<template>
    <footer class="footer pt-2">
        <div class="footer-content row mb-2 pl-5 pr-5">
            <div class="footer-logo">
                <NuxtLink to="/" class="logo-link">
                    <img src="/Logo-primary-onwhite.png" alt="Website Logo" class="logo">
                </NuxtLink>
            </div>
            <div class="footer-links">
                <ul role="list" class="column">
                    <li><NuxtLink to="/">About us</NuxtLink></li>
                    <li><NuxtLink to="/">Projects</NuxtLink></li>
                    <li><NuxtLink to="/">Works</NuxtLink></li>
                </ul>
            </div>
        </div>
        <p class="center pt-2">&copy; {{ new Date().getFullYear() }} Enki. All rights reserved.</p>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    margin-top: auto;
    
    .footer-content {
        justify-content: space-between;
        
        .footer-logo {
            .logo {
                width: 150px;
                height: auto;
            }
        }
        
        .footer-links {
            ul{
                gap: $base-unit
            }
            a {
                text-decoration: none;
                color: inherit;                
                &:hover {
                    color: $primary-color;
                }
            }
        }
    }

}
</style>