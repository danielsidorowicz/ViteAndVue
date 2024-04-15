<template>
    <h1>{{ propX.damaged ? "Bad" : "Good" }}</h1>
    <button @click="stan(propX.id)">Zmień stan</button>
</template>
  
<script>
export default {
    data() {
        return {
            title: "button",
        };
    },
    methods: {
        stan(id) {
            this.$store.commit("changeState", id)
        }
    },
    props: ["propX"]
};
</script>
  
<style scoped></style>