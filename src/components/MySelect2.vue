<template>
    <select name="litery" id="litery" @change="zmiana" v-model="selected">
        <option v-for="item in prop1" :value="item">{{ item }}</option>
    </select>
</template>
  
<script>
export default {
    data() {
        return {
            title: "select",
            selected: "aaa"
        };
    },
    methods: {
        zmiana(e) {
            alert(this.selected)
        }
    },
    props: ["prop1"]
};
</script>
  
<style scoped>
select {
    border: 1px dashed blue;
    outline: none;
}
</style>