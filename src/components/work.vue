<template>
  <div id="work">
    <h1 class="title-text">Experience</h1>
    <div class="feature-block">
      <div class="card-wrapper">
        <div class="work-experience" v-for="work in list" v-bind:key="work.id">
          <div class="content">
            <div class="image-head"><img v-bind:src="work.logo" alt=""></div>
            <div class="job-title">
              <h1 class="title">{{ work.title }}</h1><!-- <div class="date">{{ work.date }}</div> -->
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

export default {
  name: 'work',
  data() {
    return {
      list: [
        {
          title: "國家高速網路運算中心",
          date: "2017/6 - 2018/10",
          logo: require('../assets/img/logo_NCHC.png'),
          jobName: "front-end developer (part-time)",
          content: "水利署計畫，自動偵測淹水",
          tags: ["PHP", "AWS lambda", "python"]
        }, {
          title: "NTHU ELSALAB",
          logo: require('../assets/img/elsa-lab.png'),
          date: "Date",
          jobName: "front-end developer (part-time)",
          content: "What you do in your job",
          tags: ["react", "Django back-end"]
        }, {
          title: "NTHU 學習科技組",
          logo: require('../assets/img/nthu.png'),
          date: "Date",
          jobName: "front-end developer (part-time)",
          content: "What you do in your job",
          tags: ["php"]
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
      width: 80%;

      .card-wrapper {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding-left: 2em;
        justify-content: center;
          
        .work-experience {
          display: flex;
          border-radius: 1.5px;
          align-items: center;
          // background-color: $main-color-light;
          // box-shadow: 5px 5px 0 0 $main-color-shadow;
          padding: 2em 2em;
          margin: 1em 0;
          flex-wrap: nowrap;
          font-family: $font-family;

          .image-head {
            position: relative;
            height: 4em;
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
