<template>
    <cc-card :headline="$t('special_resources.headline')">
        <v-list>
            <v-list-tile>
                <v-list-tile-content>{{ $t('special_resources.skins') }}: {{ $store.state.resources.skin }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>{{ $t('special_resources.leather') }}: {{ $store.state.resources.leather }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>{{ $t('special_resources.herbs') }}: {{ $store.state.resources.herb }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>{{ $t('special_resources.piety') }}: {{ $store.state.resources.piety }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>{{ $t('special_resources.ore') }}: {{ $store.state.resources.ore }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>{{ $t('special_resources.metal') }}: {{ $store.state.resources.metal }}</v-list-tile-content>
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
export default class SpecialResourcesCard extends Vue
{
}
</script>
