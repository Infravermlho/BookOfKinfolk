<template>
  <v-dialog
    v-model="dialog"
    :fullscreen="fullscreen || $vuetify.breakpoint.mdAndDown"
    :width="small ? '30vw' : large ? '85vw' : '50vw'"
    :style="fullscreen || $vuetify.breakpoint.mdAndDown ? `x-overflow: hidden` : ''"
  >
    <v-card tile class="background">
      <v-spacer v-if="fullscreen" class="titlebar-margin" />

      <v-card-text :style="noPad || $vuetify.breakpoint.mdAndDown ? 'padding: 0!important' : ''">
        <slot />
      </v-card-text>
      <div v-if="!noActions">
        <v-divider></v-divider>

        <v-card-actions v-if="noConfirm">
          <v-spacer />
          <v-btn text @click="hide">dismiss</v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-btn text @click="hide">cancel</v-btn>
          <v-spacer />
          <cc-btn @click="confirm">confirm</cc-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

}
</script>

<style scoped>
.titlebar-margin {
  padding-top: 60px;
}
</style>