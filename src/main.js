// tu css

import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './apps/VueX/App02.vue'
import Json from './assets/cars_full'

const store = createStore({
    state: {
        c: 0,
        json: Json
    },

    mutations: {
        plus(state) {
            this.state.c++
        },

        minus(state) {
            if (this.state.c == 0) {
                alert("Poniżej 0")
            } else {
                this.state.c--
            }
        },
        changeState(state, id) {
            // console.log(id);
            this.state.json.find((car) => {
                if (car.id == id) {
                    car.damaged = !car.damaged
                }
            })
        }
    }
})

createApp(App).use(store).mount('#app')
