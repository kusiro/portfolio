<template>
  <section id="intro" alig>
    <div class="content">
      <div class="landing-title">Hello, I am Soon</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'intro'
}
</script>

<style scoped lang="scss">
@import '@/styles/main.scss';
  #intro {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      height: 100%;

      .landing-title {
        font-size: 3.6em;
        font-family: $font-family;
        background-color: $pop-deep;
        padding: 0 0.6em;
      }
    }
  }
</style>
