<template>
    <div id="main">
        <MyCar v-for="car in json" v-bind:prop-x="car"></MyCar>
    </div>
</template>
  
<script>
import MyCar from "../../components/MyCar.vue";
import Json from "../../assets/cars";

export default {
    data() {
        return {
            message: 'Hello World',
            json: Json,
        };
    },
    components: { MyCar }
};
</script>
  
<style>
#main {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>