<template>
    <div id="main">
        <MyButton></MyButton>
        <MyButton2 :prop2="button2Title" :prop3="p2BgColor"></MyButton2>
        <MySelect></MySelect>
        <MySelect2 :prop1="selectArray"></MySelect2>
    </div>
</template>
  
<script>
import MyButton from "../components/MyButton.vue";
import MyButton2 from "../components/MyButton2.vue";
import MySelect from "../components/MySelect.vue";
import MySelect2 from "../components/MySelect2.vue";

export default {
    data() {
        return {
            message: 'Hello World',
            button2Title: "dziala",
            p2BgColor: "cornflowerblue",
            selectArray: ["aaa", "bbb", "ccc"]
        };
    },
    components: { MyButton, MyButton2, MySelect, MySelect2, MyButton },

};
</script>
  
<style>
#main {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;

    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>