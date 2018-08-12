<template>
    <v-jumbotron>
        <v-container fill-height>
            <v-layout align-center>
                <v-flex text-xs-center>
                    <h3 class="display-3">Civ Clicker</h3>
                    <div class="subheading">{{ $t('general.description') }}</div>
                    <br />
                    <v-btn to="/game" color="primary">{{ $t('general.start') }}</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-jumbotron>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Landingpage extends Vue
{
}
</script>
