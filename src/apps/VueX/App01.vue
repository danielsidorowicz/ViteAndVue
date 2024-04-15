<template>
    <div id="main">
        <h1>Mutations</h1>
        <div class="buttons">
            <button @click="dodaj">+</button>
            <button @click="odejmij">-</button>
        </div>
        <h1>{{ this.$store.state.c }}</h1>
        <div class="buttons">
            <child-component></child-component>
            <child-component></child-component>
        </div>
    </div>
</template>
  
<script>
import ChildComponent from "../../components/ChildComponent.vue";

export default {
    data() {
        return {
            message: 'Hello World',
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
        ChildComponent
    }
};
</script>
  
<style>
#main {
    display: flex;
    flex-direction: column;
    border: 3px solid gray;
    width: fit-content;
    padding: 20px;
}

.buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

button {
    border-radius: 50%;
    width: 25px;
    height: 25px;
}
</style>