<template>
    <div class="car">
        <p class="carColor" :style="{ backgroundColor: propX.hex_color }">Kolor auta</p>
        <p class="carColor" :class='[propX.damaged ? " damaged" : "good"]'>{{ propX.damaged ? "USZKODZONY" : "SPRAWNY" }}
        </p>
        <img :src="propX.image" alt="image">
        <p>Id: {{ propX.id }}</p>
        <p>Name: {{ propX.car_name }}</p>
        <div class="buttons">
            <button type="button" @click="info">Info</button>
            <button type="button" @click="stan(propX.id)">Zmień stan</button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {

        };
    },
    methods: {
        info() {
            alert(JSON.stringify(this.propX, null, 5));
        },

        stan(id) {
            this.$store.commit("changeState", id)
        }
    },
    props: ["propX"]
};
</script>
  
<style scoped>
.car {
    display: flex;
    flex-direction: column;
    width: 175px;
    height: fit-content;
    color: white;
    text-align: center;
    background-color: lightgray;
}

p {
    padding: 10px;
    margin: 0;
}

.damaged {
    background-color: red;
}

.good {
    background-color: green;
}

.buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
}
</style>