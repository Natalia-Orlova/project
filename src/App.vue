<template>
  <div id="app">
    <BlogDetails/>
    <ProjectsPage/>
  </div>
</template>

<script>
import BlogDetails from './components/pages/BlogDetails.vue'
import ProjectsPage from './components/pages/ProjectsPage.vue'

export default {
  name: 'App',
  components: {
    BlogDetails,
    ProjectsPage
  }
}
</script>

<style lang="scss">
#app {
  font-family: Jost, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.center {
  width: 1200px;
  margin: 0 auto;
}

a {
  text-decoration: none;
}
</style>
