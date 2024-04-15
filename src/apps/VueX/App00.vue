<template>
    <div id="main">
        <h1>Mutations</h1>
        <div class="buttons">
            <button @click="dodaj">+</button>
            <button @click="odejmij">-</button>
        </div>
        <h1>{{ this.$store.state.c }}</h1>
    </div>
</template>
  
<script>
// import MyButton from "../components/MyButton.vue";

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
        //  MyButton
    }
};
</script>
  
<style>
#main {
    display: flex;
    flex-direction: column;
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