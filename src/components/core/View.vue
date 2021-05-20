<template>
  <div>
    <intro />
    <about />
    <project />
    <work />
  </div>
</template>

<script>
export default {
  name: 'CoreView',

  components: {
    About: () => import('@/components/about'),
    Intro: () => import('@/components/intro'),
    project: () => import('@/components/project'),
    work: () => import('@/components/work'),
  }
}
</script>