<template>
    <div class="grandchild">
        <h1>GrandChild Component</h1>
        <div class="buttons">
            <button @click="dodaj">+</button>
            <button @click="odejmij">-</button>
        </div>
        <h1>{{ this.$store.state.c }}</h1>
    </div>
</template>
  
<script>
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
};
</script>
  
<style scoped>
.grandchild {
    display: flex;
    flex-direction: column;

    border: 3px solid lightslategray;
    padding: 10px;
}
</style>