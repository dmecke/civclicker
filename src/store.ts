import Vue from 'vue';
import Vuex from 'vuex';
import config from "./config";
import Building from "./component/building/Building";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        resources: {
            food: 0,
            wood: 0,
            stone: 0,
            skin: 0,
            leather: 0,
            herb: 0,
            piety: 0,
            ore: 0,
            metal: 0,
        },
        population: {
            current: 0,
        },
        buildings: {
            tent: 0,
            hut: 0,
            barn: 0,
            wood_stockpile: 0,
            stone_stockpile: 0,
            graveyard: 0,
        },
    },
    getters: {
        rate: state => {
            return {
                food: 0,
                wood: 0,
                stone: 0,
            };
        },
        storage: state => {
            return {
                food: 200 + state.buildings.barn * 200,
                wood: 200 + state.buildings.wood_stockpile * 200,
                stone: 200 + state.buildings.stone_stockpile * 200,
            };
        },
        maximumPopulation: state => {
            return state.buildings.tent + state.buildings.hut * 3;
        },
    },
    mutations: {
        addResource(state, payload: { type: string, amount: number }) {
            state.resources[payload.type] += payload.amount;
        },
        removeResource(state, payload: { type: string, amount: number }) {
            state.resources[payload.type] -= payload.amount;
        },
        addBuilding(state, payload: { building: Building, amount: number }) {
            state.buildings[payload.building.toString()] += payload.amount;
        },
    },
    actions: {
        gatherResource({ state, getters, commit }, payload: { type: string, amount: number }) {
            let amount = Math.min(payload.amount, getters.storage[payload.type] - state.resources[payload.type]);
            commit('addResource', { type: payload.type, amount });

            if (0.1 > Math.random()) {
                commit('addResource', { type: config.special_resource[payload.type], amount: 1 });
            }
        },
        build({ state, commit }, payload: { building: Building, amount: number }) {
            payload.building.getRequirements().forEach(requirement => {
                if (state.resources[requirement.getResource()] < requirement.getAmount()) {
                    throw new Error('not enough ' + requirement.getResource());
                }
            });
            payload.building.getRequirements().forEach(requirement => {
                commit('removeResource', { type: requirement.getResource(), amount: requirement.getAmount() });
            });
            commit('addBuilding', { building: payload.building, amount: payload.amount });
        },
    },
});
