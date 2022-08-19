<template>
  <v-app id="app">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

  </v-app>
</template>

<script>
export default {
}
</script>

<style>
  .slide-enter-active {
  transition: all 0.2s ease-out;
  }
  .slide-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-enter-from,
  .slide-leave-to{
    opacity: 0;
    transform: transtalex(20px);
  }
</style>