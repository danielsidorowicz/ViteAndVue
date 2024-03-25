<template>
    <div class="car">
        <p class="carColor" :style="{ backgroundColor: car.hex_color }">Kolor auta</p>
        <p class="carColor" :class='[car.damaged ? " damaged" : "good"]'>{{ car.damaged ? "USZKODZONY" : "SPRAWNY" }}
        </p>
        <img :src="car.image" alt="image">
        <p>Id: {{ car.id }}</p>
        <p>Name: {{ car.car_name }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    props: ["car"]
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
</style>