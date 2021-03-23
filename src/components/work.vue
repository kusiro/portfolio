<template>
  <div id="work">
    <h1 class="title-text">Work Experience</h1>
    <div class="work-experience">
      <div class="image-head"><img src="../assets/img/NCHC.jpg" alt=""></div>
      <div class="content">
        <h1 class="title">國家高速網路運算中心</h1>
        <h2 class="job-name">網頁開發工讀生</h2>
        <ul>
          <li>水利署計畫: 自動化淹水監控系統</li>
          <li>串接全台 cctv 與政府提供之淹水數據 api</li>
        </ul>
        <div class="tag-wrapper">
          <div class="tag">PHP</div>
          <div class="tag">AWS lambda</div>
          <div class="tag">python</div>
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
    .work-experience {
      // border-right: solid 1em $main-color-black;
      display: flex;
      border-radius: 3px;
      align-items: center;
      padding: 1.6em;
      height: 16em;
      flex-wrap: nowrap;
      position: relative;
      background-color: #e2decd;
      font-family: $font-family;

      .image-head {
        height: 100%;
        margin-right: 2em;
        img{ height: 100%;}
      }
      .content {
        h1 {
          font-size: 24px;
          margin: 0;
        }
        h2 {
          font-size: 20px;
          margin: 0;
          font-weight: normal;
        }
        ul {
          margin: 1em 0;
          padding-left: 1em;
          list-style: circle;
          li {
            margin: .5em 0;
          }
        }
        .tag-wrapper {
          display: flex;
          margin-top: 1.5em;
          .tag {
            margin-right: .5em;
            border: solid 1px $font-color-black;
            color: $font-color-black;
            border-radius: 7px;
            padding: .3em;
          }
        }
      }
    }
}
</style>
