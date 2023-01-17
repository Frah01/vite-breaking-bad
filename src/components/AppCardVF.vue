<script>
export default {
    name: 'AppCard',
    props: {
        url: String,
        title: String,
        type: String
    }
}
</script>

<template>
    <div class="card rounded-0  h-100 text-center bg-info">
        <img class="mb-3" :src="url" alt="#">
        <div class="h-100 d-flex flex-column justify-content-between">
            <h5 class="text-uppercase text-white">{{ title }}</h5>
            <h6>{{ type }}</h6>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
