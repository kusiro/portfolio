<template>
  <div id="work">
    <h1 class="title-text">Work Experience</h1>
    <p class="content">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
  </div>
</template>

<script>
export default {
  name: 'work'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#work {
    min-height: 100vh;
    padding: 0 6em;
    display: flex;
    flex-direction: column;

    .title-text {
      color: $font-color-black;
      font-size: 64px;
      margin: 0;
      display: inline-block;
      margin: 1.6em 0;
      font-family: $font-family;
      display: block;
    }
    .content {
      color: $font-color-black;
      font-size: 28px;
      font-family: $font-family;
      display: inline-block;
      max-width: 80%;
    }
}
</style>
