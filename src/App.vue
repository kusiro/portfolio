<template>
  <div>
    <img id="hyper" src="./assets/img/hyper.png">
    <div id="left-nav">
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
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html, body {
  margin: 0; padding: 0;
}

#hyper {
  height: 100%; width: 100%;
  position: absolute;
  top: 0; left: 0;
  opacity: .5;
  z-index: 2;
}
#left-nav {
  height: 100vh; width: 28%;
  background-color: #46479c;
  position: fixed;
  left: 0;
}
</style>
