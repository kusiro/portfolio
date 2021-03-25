<template>
  <div id="work">
    <h1 class="title-text">Work Experience</h1>
    <div class="feature-block">
      <div class="card-wrapper">
        <div class="work-experience" v-for="work in list" v-bind:key="work.id">
          <div class="image-head"><img v-bind:src="work.logo" alt=""></div>
          <div class="content">
            <h1 class="title">{{ work.title }}</h1>
            <h2 class="job-name">{{ work.jobName }}</h2>
            <ul>
              <li v-for="w in work.list" v-bind:key="w.id">{{ w }}</li>
            </ul>
            <div class="tag-wrapper">
              <div class="tag" v-for="tag in work.tags" v-bind:key="tag.id">{{ tag }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NCHC from '../assets/img/NCHC.jpg';

export default {
  name: 'work',
  data() {
    return {
      list: [
        {
          title: "國家高速網路運算中心",
          logo: NCHC,
          jobName: "網頁開發工程師",
          list: ["水利署計畫", "串接全台 cctv 與政府提供之淹水數據"],
          tags: ["PHP", "AWS lambda", "python"]
        }, {
          title: "Owner",
          logo: NCHC,
          jobName: "Jobname",
          list: ["What", "you", "do"],
          tags: ["tag", "tag", "tag"]
        }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#work {
    min-height: 100vh;
    padding: 0 6em;

    .title-text {
      color: $font-color-black;
      font-size: 64px;
      height: 1em;
      flex: 100%;
      display: inline-block;
      margin: 1.6em 0;
      font-family: $font-family;
      display: block;
    }

    .feature-block {
      display: flex;

      .card-wrapper {
        display: flex;
        flex: 12;
        flex-direction: column;
        border-left: solid 2px $main-color-black;
        padding-left: 2em;
        justify-content: center;
          
        .work-experience {
          // border-right: solid 1em $main-color-black;
          display: flex;
          border-radius: 10px;
          align-items: center;
          padding: 0 2em;
          margin: 1em 0;
          width: 70%;
          flex-wrap: nowrap;
          position: relative;
          background-color: #e2decd;
          font-family: $font-family;

          .image-head {
            height: 75%;
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
    }


}
</style>
