<template>
    <button class="b" @click="click">{{ title }}</button>
</template>
  
<script>
export default {
    data() {
        return {
            title: "button",
        };
    },
    methods: {
        click() {
            alert(this.title);
        },
    },
};
</script>
  
<style scoped>
.b {
    font-size: 30px;
}

button {
    transition: 1s;
    background-color: lightblue;
    border-color: lightblue;
    color: white;
    border-radius: 10px;
}
</style>