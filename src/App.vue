<template>
  <v-app theme  id="app">
    <v-main>
      <core-app-nav />
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import CoreAppNav from '@/components/core/AppNav'
export default {
  name: 'App',
  components: {
    CoreAppNav
    // CoreFooter: () => import('@/components/core/Footer'),
  },
};
</script>

<style>
  #app {
    background: transparent;
  }
  .fade-enter-active, .fade-leave-active {
    transition: 0.7s cubic-bezier(0.78, 0, 0.27, 0.95);
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
