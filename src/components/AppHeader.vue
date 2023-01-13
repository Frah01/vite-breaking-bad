<script>
export default {
    props: {
        message: String
    }
}
</script>
<template>
    <header class="container">
        <h1 class="app-title">{{ message }}</h1>
    </header>
</template>
<style lang="scss" scoped>
header {
    margin-top: 2rem;
    .app-title {
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 1em;
    }
}
</style>