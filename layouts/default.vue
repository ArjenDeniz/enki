<template>
    <div class="layout">
        <Header/>
        <main class="main content">
            <slot/>
        </main>
        <Footer/>
    </div>
</template>
<style lang="scss" scoped>
    .layout{
        font-family: Arial, sans-serif;
        min-height: 100vh;
        width:100%
    }
</style>