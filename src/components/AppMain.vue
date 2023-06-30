<script>
import MainContent from './AppMainComp/MainContent.vue'
import MainJumbo from './AppMainComp/MainJumbo.vue'
import MainFooter from './AppMainComp/MainFooter.vue'

export default {
  components: {
    MainContent,
    MainJumbo,
    MainFooter,
  },
  props: {
    comics: Array
  }
}
</script>

<template>
  <main>
    <MainContent :comics="comics" />
    <MainJumbo />
    <MainFooter />
  </main>
</template>

<style scoped></style>
