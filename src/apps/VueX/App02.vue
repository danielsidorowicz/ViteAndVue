<template>
    <div class="all">
        <h1>Buttons as Components</h1>
        <div class="but">
            <div v-for="car in json" class="StateBut" :class='[car.damaged ? " damaged" : "good"]'>
                <CarButtons v-bind:prop-x="car" />
            </div>

        </div>
        <h1>Buttons:</h1>
        <div class="but">
            <div v-for="car in json" class="StateBut" :class='[car.damaged ? " damaged" : "good"]'>
                <h1>{{ car.damaged ? "Bad" : "Good" }}</h1>
                <button @click="stan(car.id)">Zmień stan</button>
            </div>
        </div>
        <h1>Cars Components:</h1>
        <div id="main">
            <MyCar v-for="car in json" v-bind:prop-x="car" />
        </div>
    </div>
</template>
  
<script>
import MyCar from "../../components/MyCar.vue";
import CarButtons from "../../components/CarStateComponent.vue";


export default {
    data() {
        return {
            message: 'Hello World',
            json: this.$store.state.json,
        };
    },
    methods: {
        stan(id) {
            this.$store.commit("changeState", id)
        }
    },
    components: { MyCar, CarButtons }
};
</script>
  
<style>
#main {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.all {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.but {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.damaged {
    background-color: red;
}

.good {
    background-color: green;
}

.StateBut {
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: white;
    align-items: center;
}
</style>