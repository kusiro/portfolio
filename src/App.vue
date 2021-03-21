<template>
  <div>
    <div id="sidebar">
      <div class="about">
        About
      </div>
      <div class="work">
        Work Experience
      </div>
      <div class="project">
        Projects
      </div>
      <div class="contact">
        Contact
      </div>
    </div>
    <div id="wrapper">
      {{ intro }}
    </div>
  </div>
</template>

<script>
import intro from 'intro.vue';
export default {
  name: 'App',
  components: {
    intro
  }
}
</script>

<style lang="scss">
@import './assets/main.scss';
* {
  box-sizing: border-box;
}
html, body {
  margin: 0; padding: 0;
}
#sidebar {
  height: 100vh; width: 20.5%;
  background-color: $sub-color-purple;
  position: fixed;
  left: 0;
}
#wrapper {
  margin-left: 20.5%;
  background-color: $main-color-purple;
}
</style>
