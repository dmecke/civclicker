<template>
    <v-app>
        <v-toolbar color="primary" dark app flat>
            <v-toolbar-title>Civ Clicker</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer color="primary" dark app class="pa-3">
            <div>Cloned from <a class="white--text" href="http://dhmstark.co.uk/games/civclicker/" target="_blank">the original</a> by <a class="white--text" href="https://www.twitter.com/danielmecke" target="_blank">@danielmecke</a>.</div>
        </v-footer>
        <cc-info-dialog></cc-info-dialog>
        <cc-error-dialog></cc-error-dialog>
        <cc-confirmation-dialog></cc-confirmation-dialog>
        <cc-notification-handler></cc-notification-handler>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import InfoDialog from './dialog/InfoDialog';
import ErrorDialog from './dialog/ErrorDialog';
import ConfirmationDialog from './dialog/ConfirmationDialog';
import NotificationHandler from './notification/NotificationHandler';

@Component({
    components: {
        'cc-info-dialog': InfoDialog,
        'cc-error-dialog': ErrorDialog,
        'cc-confirmation-dialog': ConfirmationDialog,
        'cc-notification-handler': NotificationHandler,
    },
})
export default class App extends Vue
{
}
</script>
