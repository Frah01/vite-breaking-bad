<script>

export default {
    props: {
        archetype : Object,
    },
    data(){
        return{
            change: '',
        }
    }
}
</script>
<template lang="">
    <div>
        <div class="container" >
                <div class="row" >
                    <div class="col-10 offset-1 my-1" >
                        <select class="form-select p-1" name="select-type" id="select-type" v-model="change"
                        @change="$emit('selection', change)">
                        <option value="" disabled selected>Select your archetype</option>
                        <option v-for="(value, index) in archetype" :key="index" :value="value.archetype_name">
                            {{ value.archetype_name }}</option>
                    </select>
                    </div>
                </div>
            </div>
    </div>
</template>
<style lang="">
    
</style>