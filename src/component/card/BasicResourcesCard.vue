<template>
    <cc-card :headline="$t('basic_resources.headline')">
        <v-data-table hide-actions :headers="headers" :items="items">
            <template slot="items" slot-scope="props">
                <td>{{ $t('resource.' + props.item.type) }}</td>
                <td><v-btn color="primary" @click="$store.dispatch('gatherResource', { type: props.item.type, amount: 1 })">{{ props.item.action }}</v-btn></td>
                <td>{{ $store.state.resources[props.item.type] }}</td>
                <td>{{ $store.getters.storage[props.item.type] }}</td>
                <td>{{ $store.getters.rate[props.item.type] }}</td>
            </template>
        </v-data-table>
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
export default class BasicResourcesCard extends Vue
{
    private headers = [];
    private items = [];


    created(): void
    {
        this.headers = [
            {
                text: this.$t('basic_resources.resource'),
                sortable: false,
            },
            {
                text: '',
                sortable: false,
            },
            {
                text: this.$t('basic_resources.amount'),
                sortable: false,
            },
            {
                text: this.$t('basic_resources.storage'),
                sortable: false,
            },
            {
                text: this.$t('basic_resources.rate'),
                sortable: false,
            },
        ];
        this.items = [
            {
                action: this.$t('resource.gather'),
                type: 'food',
            },
            {
                action: this.$t('resource.cut'),
                type: 'wood',
            },
            {
                action: this.$t('resource.mine'),
                type: 'stone',
            },
        ];
    }
}
</script>
