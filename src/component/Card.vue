<template>
    <v-flex xs12 md6>
        <v-card tile>
            <v-subheader class="subheading">{{ headline }}</v-subheader>
            <v-container>
                <slot></slot>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    props: {
        headline: {
            type: String,
            required: true,
        }
    }
})
export default class Card extends Vue
{
}
</script>
