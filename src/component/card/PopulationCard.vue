<template>
    <cc-card :headline="$t('population.headline')">
        <v-list>
            <v-list-tile>
                <v-list-tile-content>{{ $t('population.current') }}: {{ $store.state.population.current }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>{{ $t('population.maximum') }}: {{ $store.getters.maximumPopulation }}</v-list-tile-content>
            </v-list-tile>
        </v-list>
    </cc-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Card from "../Card";

@Component({
    components: {
        'cc-card': Card,
    }
})
export default class PopulationCard extends Vue
{
}
</script>
