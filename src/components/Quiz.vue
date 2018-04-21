<template>
  <div>
    <h1>QUIZ</h1>
    <div class="questions" v-for="item in quiz" :key="item.id">
      <Question :data="item"/>
    </div>
  </div>
</template>

<script>
import Question from './Question.vue'
import quizJson from '../data/quiz.json'

export default {
  name: "Quiz",
  components: {
    Question
  },
  data() {
    return {
      quiz: quizJson
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .questions {
    text-align: left;
  }
</style>
