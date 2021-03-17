<template>
  <div id="app">
    <div id="left-nav">
      <div class="self-photo">
        <img src="" alt="">
      </div>
      <div class="contact">
        <p>jackysoon@gmail.com</p>
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

#left-nav {
  height: 100vh; width: 28%;
  background-color: #eca2a2;
  position: fixed;
  left: 0;
}
</style>
