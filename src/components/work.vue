<template>
  <div id="work">
    <h1 class="title-text">Experience</h1>
    <div class="feature-block">
      <div class="card-wrapper">
        <div class="work-experience" v-for="work in list" v-bind:key="work.id">
          <div class="image-head"><img v-bind:src="work.logo" alt=""></div>
          <div class="content">
            <div class="job-title">
              <h1 class="title">{{ work.title }}</h1><div class="date">{{ work.date }}</div>
            </div>
            <h2 class="job-name">{{ work.jobName }}</h2>
            <p>{{ work.content }}</p>
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
import NCHC from '../assets/img/logo_NCHC.png';

export default {
  name: 'work',
  data() {
    return {
      list: [
        {
          title: "國家高速網路運算中心",
          date: "2017/6 - 2018/10",
          logo: NCHC,
          jobName: "網頁開發工程師",
          content: "水利署計畫，自動偵測淹水",
          tags: ["PHP", "AWS lambda", "python"]
        }, {
          title: "Owner",
          logo: NCHC,
          date: "Date",
          jobName: "Jobname",
          content: "What you do in your job",
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
        flex: 1;
        flex-direction: column;
        padding-left: 2em;
        justify-content: center;
          
        .work-experience {
          display: flex;
          border-radius: 10px;
          align-items: center;
          padding: 2em 2em;
          margin: 1em 0;
          flex-wrap: nowrap;
          background-color: #e2decd;
          font-family: $font-family;

          .image-head {
            position: relative;
            height: 8em;
            margin-right: 3em;
            img {
              height: 100%;
              top: 0;left: 0;
            }
          }
          .content {
            width: 100%;
            .job-title {
              display: flex;
              flex-wrap: nowrap;
              justify-content: space-between;
              h1 {
                font-size: 24px;
                margin: 0;
              }
              .date {
              }
            }
            h2 {
              font-size: 20px;
              margin: 0;
              font-weight: normal;
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
