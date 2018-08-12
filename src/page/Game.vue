<template>
    <v-container grid-list-lg fluid>
        <v-layout row wrap>
            <cc-basic-resources-card></cc-basic-resources-card>
            <cc-population-card></cc-population-card>
            <cc-special-resources-card></cc-special-resources-card>
            <cc-buildings-card></cc-buildings-card>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Card from "../component/Card";
import BasicResourcesCard from "../component/card/BasicResourcesCard";
import PopulationCard from "../component/card/PopulationCard";
import SpecialResourcesCard from "../component/card/SpecialResourcesCard";
import BuildingsCard from "../component/card/BuildingsCard";

@Component({
    components: {
        'cc-card': Card,
        'cc-basic-resources-card': BasicResourcesCard,
        'cc-population-card': PopulationCard,
        'cc-special-resources-card': SpecialResourcesCard,
        'cc-buildings-card': BuildingsCard,
    }
})
export default class Game extends Vue
{
}
</script>
