<template>
    <div class="myButtonDiv" :style="{ backgroundColor: prop1 }">
        <button class="b" @click="click">{{ prop2 }}</button>
        <p :style="{ backgroundColor: prop3 }" style="padding: 10px;">helooo</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            title: "button",
        };
    },
    methods: {
        click(e) {
            alert(e.target.innerText);
        },
    },
    props: ["prop1", "prop2", "prop3"]
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
    margin-bottom: 2px;
}

.myButtonDiv {
    padding: 10px;
    border: dashed 1px blue;
}
</style>