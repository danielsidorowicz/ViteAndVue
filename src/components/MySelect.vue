<template>
    <select name="liczby" id="liczby">
        <option v-for="item in array" value="{{ item }}">{{ item }}</option>
    </select>
</template>
  
<script>
export default {
    data() {
        return {
            title: "select",
            array: [1, 2, 3]
        };
    },
};
</script>
  
<style scoped>
select {
    border: 1px dashed blue;
    outline: none;
}
</style>