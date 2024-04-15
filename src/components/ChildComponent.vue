<template>
    <div class="child">
        <h1>Child Component</h1>
        <div class="buttons">
            <button @click="dodaj">+</button>
            <button @click="odejmij">-</button>
        </div>
        <h1>{{ this.$store.state.c }}</h1>
        <div class="buttons">
            <GrandChildComponent />
            <GrandChildComponent />
        </div>
    </div>
</template>
  
<script>
import GrandChildComponent from "./GrandChildComponent.vue";

export default {
    data() {
        return {

        };
    },
    methods: {
        dodaj() {
            this.$store.commit("plus")
        },

        odejmij() {
            this.$store.commit("minus")
        }
    },
    components: {
        GrandChildComponent
    }
};
</script>
  
<style scoped>
.child {
    display: flex;
    flex-direction: column;

    border: 3px dashed black;
    padding: 10px;
}
</style>