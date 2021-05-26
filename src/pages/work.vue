<template>
  <v-container id="work">
    <v-row align="center" justify="center">
      <v-col cols="5" class="title-text"><b>E</b>xperience</v-col>
      <v-col cols="12" xl="10" lg="9" md="8"  class="feature-block">
        <v-container class="card-wrapper">
          <v-row class="work-experience-card" align="center" justify="center" v-for="work in list" v-bind:key="work.id">
            <!-- <v-col cols="2" class="image-head"><img v-bind:src="work.logo" alt=""></v-col> -->
            <v-col cols="8" class="job-content">
              <h2 class="job-name">{{ work.jobName }}</h2>
              <div class="job-title">
                <h1>{{ work.title }}</h1><div class="date">{{ work.date }}</div>
              </div>
              <p>{{ work.content }}</p>
              <div class="tag-wrapper">
                <div class="tag" v-for="tag in work.tags" v-bind:key="tag.id">{{ tag }}</div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'work',
  data() {
    return {
      list: [
        {
          title: "NTHU 學習科技組",
          logo: require('../assets/img/nthu.png'),
          date: "Date",
          jobName: "Front-end developer (part-time)",
          content: "協助維護 NTHU elearn 學習平台與開發新功能。",
          tags: ["php", "moodle"]
        }, {
          title: "國家高速網路運算中心",
          date: "2017/6 - 2018/10",
          logo: require('../assets/img/logo_NCHC.png'),
          jobName: "Front-end developer (part-time)",
          content: "水利署計畫，自動偵測淹水，串接全台 cctv api 與水利署提供之淹水資訊，透過 AWS lambda 進行資料處理，並回傳至前端渲染。",
          tags: ["PHP", "AWS lambda", "python"]
        }, {
          title: "NTHU ELSALAB",
          logo: require('../assets/img/elsa-lab.png'),
          date: "Date",
          jobName: "Front-end developer (part-time)",
          content: "與設計師溝通並架設 NTHU ELSALAB 實驗室的網頁，串接 Django 後端 api。",
          tags: ["react", "Django back-end"]
        }, 
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/main.scss';
#work {
  margin-top: 64px;
  background-color: #f7f9fb;
}
.title-text {
  font-size: 3.6em;
  font-weight: 700;
  margin: 2em 0;

  b {
    border-bottom: 0.2em solid $pop-deep;
  }
}
.feature-block {
  .card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.3em;

    .work-experience-card {
      width: 90%;

      .job-content {
        background-color: #fff;
        max-width: 700px;
        min-width: 380px;
        padding: 24px;
        box-shadow: 6px 6px 15px -5px #00000040;

        .job-name {
          font-size: 1.6em;
          margin: 0;
        }

        .job-title {
          margin: -0.3em 0 0.5em 0;
          h1 {
            font-size: 1em;
          }
          .date {
            font-size: 0.5em;
          }
        }
        p {
          font-size: 0.8em;
          font-weight: 500;
        }

        .tag-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3em;

          .tag {
            font-size: 0.8em;
            color: $pop-deep;
            border: solid 1px $pop-deep;
            padding: 4px 6px;
            font-weight: 300;
          }
        }
      }
    }
  }
}
</style>
