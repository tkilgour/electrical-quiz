<template>
  <div>
    <h1>QUIZ</h1>
    <p v-show="totalCorrect > 0">{{ totalCorrect }}</p>
    <div class="questions" v-for="item in randomSubsetQuiz" :key="item.id">
      <Question :data="item" v-on:correct="handleCorrect"/>
    </div>
  </div>
</template>

<script>
import Question from "./Question.vue";
// import quizJson from "../data/quiz.json";
import instance from "../http.js";

export default {
  name: "Quiz",
  components: {
    Question
  },
  data() {
    return {
      quizData: null,
      scoreState: {},
      totalCorrect: 0
    };
  },
  methods: {
    getRandomSubset(subsetNum, items) {
      if (!items) return;

      const newItems = this.shuffle(items);
      return newItems.slice(0, subsetNum);
    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    handleCorrect(payload) {
      this.scoreState[payload._id] = payload.isCorrect;
      return;
    }
  },
  computed: {
    randomSubsetQuiz: function() {
      return this.getRandomSubset(5, this.quizData);
    }
  },
  mounted() {
    instance.get('/quiz').then(response => (this.quizData = response.data));
  }
};
</script>

<style scoped>
.questions {
  text-align: left;
}
</style>
