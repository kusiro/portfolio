<template>
  <div>
    <CoreAppNav />
    <NuxtPage />
    <!-- <v-app theme  id="app">
      <v-main>
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </v-main>
    </v-app> -->
  </div>
</template>

<script>
console.log('test')
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
