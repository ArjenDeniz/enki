<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-logo">
                <NuxtLink to="/" class="logo-link">
                    <img src="/Logo-primary-onwhite.png" alt="Website Logo" class="logo">
                </NuxtLink>
            </div>
            <div class="footer-links">
                <ul>
                    <li><NuxtLink to="/">About us</NuxtLink></li>
                    <li><NuxtLink to="/">Projects</NuxtLink></li>
                    <li><NuxtLink to="/">Works</NuxtLink></li>
                </ul>
            </div>
        </div>
        <p class="copyright">&copy; {{ new Date().getFullYear() }} Enki. All rights reserved.</p>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    padding: 20px 0;
    margin-top: auto;
    
    .footer-content {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        padding: 0 2rem;
        
        .footer-logo {
            .logo {
                width: 150px;
                height: auto;
            }
        }
        
        .footer-links {
            ul {
                display: flex;
                flex-direction: column;
                list-style: none;
                padding: 0;
                margin: 0;
                
                li {
                    padding: 6px 0;
                    
                    a {
                        text-decoration: none;
                        color: inherit;
                        font-weight: 500;
                        
                        &:hover {
                            color: $primary-color;
                        }
                    }
                }
            }
        }
    }
    
    .copyright {
        text-align: center;
        padding-top: 20px;
        border-top: 1px solid #eee;
    }
}
</style>