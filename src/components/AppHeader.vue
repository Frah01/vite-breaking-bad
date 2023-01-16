<script>
export default {
    props: {
        message: String
    }
}
</script>
<template>
    <header class="container d-flex justify-content-center align-items-center my-2">
        <img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg" alt="">
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
        color: white;
    }
    img{
        width: 200px;
        box-shadow: 0px 0px 5px 1px black;
    }
}
</style>