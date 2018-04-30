<template>
  <div>
    <h1>QUIZ</h1>
    <!-- <p v-show="totalCorrect > 0">{{ totalCorrect }}</p> -->
    <div class="questions" v-for="item in quizData" :key="item.id">
      <Question :data="item" v-on:answerSelect="updateSelected"/>
    </div>
    <button @click="checkAnswers">Check Answers</button>
  </div>
</template>

<script>
import Question from "./Question.vue";
import apiInstance from "../http.js";

export default {
  name: "Quiz",
  components: {
    Question
  },
  data() {
    return {
      quizData: null,
      totalCorrect: 0
    };
  },
  methods: {
    updateSelected(questionID, answerID) {
      const answerObj = this.quizData.filter(obj => {
        return obj._id === questionID;
      });

      answerObj[0].selected = answerID;
    },
    checkAnswers() {
      const selectedAnswers = {};

      this.quizData.forEach(question => {
        selectedAnswers[question._id] = question.selected;
      });

      apiInstance.post("/quiz", selectedAnswers).then(response => {
        const answers = response.data;
        
        
        this.quizData.forEach(question => {
          answers.forEach(answer => {
            if (answer._id === question._id) {
              question.correct = answer.correct;
              question.comment = answer.comment;
            }
          })
        });
      });
    }
  },
  mounted() {
    apiInstance.get("/quiz").then(response => (this.quizData = response.data));
  }
};
</script>

<style scoped>
.questions {
  text-align: left;
}
</style>
