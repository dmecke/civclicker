<template>
    <cc-card :headline="$t('buildings.headline')">
        <v-list two-line>
            <v-list-tile v-for="building in buildings" :key="building">
                <v-list-tile-content>
                    <v-list-tile-title>{{ $t('buildings.' + building) }}: {{ $store.state.buildings[building] }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ requirements(building) }}: {{ effect(building) }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                    <v-btn icon>
                        <v-icon @click="build(building)" :disabled="!canBeBuilt(building)">add</v-icon>
                    </v-btn>
                </v-list-tile-action>
            </v-list-tile>
        </v-list>
    </cc-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Card from "../Card";
import Building from "../building/Building";

@Component({
    components: {
        'cc-card': Card,
    }
})
export default class BuildingsCard extends Vue
{
    private buildings: string[] = ['tent', 'hut', 'barn', 'wood_stockpile', 'stone_stockpile'];

    private build(building: string): void
    {
        this.$store.dispatch('build', { building: new Building(building), amount: 1 });
    }

    private requirements(building: string): string
    {
        return new Building(building).getRequirementText();
    }

    private effect(building: string): string
    {
        return new Building(building).getEffectText();
    }

    private canBeBuilt(building: string): boolean
    {
        return new Building(building).getRequirements().filter(requirement => this.$store.state.resources[requirement.getResource()] < requirement.getAmount()).length === 0;
    }
}
</script>
