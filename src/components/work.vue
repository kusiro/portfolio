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

</style>
