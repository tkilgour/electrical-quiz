<template>
  <div id="app">
    <StartScreen v-if="quizStarted === false" :generateQuiz="generateQuiz" />
    <Quiz v-else />
  </div>
</template>

<script>
import StartScreen from './components/StartScreen.vue'
import Quiz from './components/Quiz.vue'

export default {
  name: 'app',
  components: {
    StartScreen,
    Quiz
  },
  methods: {
    generateQuiz() {
      this.quizStarted = true;
    }
  },
  data() {
    return {
      quizStarted: false
    }
  },
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
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
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
