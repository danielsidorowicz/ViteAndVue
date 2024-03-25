<template>
    <div id="main">
        <div class="car" v-for="car in    json   ">
            <p class="carColor" :style="{ backgroundColor: car.hex_color }">Kolor auta</p>
            <p class="carColor" :class='[car.damaged ? " damaged" : "good"]'>{{ car.damaged ? "USZKODZONY" : "SPRAWNY" }}
            </p>
            <img :src="car.image" alt="image">
            <p>Id: {{ car.id }}</p>
            <p>Name: {{ car.car_name }}</p>
        </div>
    </div>
</template>
  
<script>
import Json from "../assets/cars";

export default {
    data() {
        return {
            message: 'Hello World',
            json: Json,
        };
    },
};
</script>
  
<style>
#main {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

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
</style>