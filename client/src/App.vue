<template>
  <div id="app">
    <Quiz />
  </div>
</template>

<script>
import Quiz from './components/Quiz.vue'

export default {
  name: 'app',
  components: {
    Quiz
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.mar-r {
  margin-right: 1em;
}

@media screen and (min-width: 640px) {
  .dt-inline-block {
    display: inline-block;
  }
}
</style>
