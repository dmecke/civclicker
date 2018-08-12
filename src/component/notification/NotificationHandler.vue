<template>
    <cc-notifier :notifications="notifications" @shift="shiftNotification"></cc-notifier>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {EventBus} from "../../service/EventBus";
import Notifier from "./Notifier";

@Component({
    components: {
        'cc-notifier': Notifier,
    }
})
export default class NotificationHandler extends Vue
{
    private notifications: Notification[] = [];

    private mounted(): void
    {
        EventBus.$on('notification', notification => {
            this.notifications.push(notification);
        });
    }

    private shiftNotification(): void
    {
        this.notifications.shift();
    }
}
</script>
