<template>
  <div id="work">
    <h1 class="title-text">Work Experience</h1>
    <div class="work-experience">
      <div class="image-head"><img src="" alt=""></div>
      <div class="content">
        <h1 class="title">國家高速網路運算中心</h1>
        <h2 class="job-name">網頁開發工讀生</h2>
        <ul>
          <li>水利署計畫: 自動化淹水監控系統</li>
          <li>串接全台 cctv 與政府提供之淹水數據 api</li>
        </ul>
        <div class="tag-wrapper">
          <div class="tag">PHP</div>
        </div>
      </div>
    </div>
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
