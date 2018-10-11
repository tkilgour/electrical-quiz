<template>
  <div class="quiz">
    <countdown-timer class="timer" :timerLength="2880" :handleTimerEnd="handleTimerEnd"></countdown-timer>
    <h1>QUIZ</h1>
    <p v-if="submitted">You got {{ totalCorrect }} correct out of {{ quizData.length }} questions – {{ totalPercentage }}</p>
    <div class="questions" v-for="(question, index) in quizData" :key="question.id">
      <Question :questionNum="index + 1" :data="question" v-on:answerSelect="updateSelected"/>
    </div>
    <button class="check-answers" @click="checkAnswers">Check Answers</button>
  </div>
</template>

<script>
import Question from "./Question";
import CountdownTimer from "./CountdownTimer";
import apiInstance from "../http.js";

export default {
  name: "Quiz",
  components: {
    Question,
    CountdownTimer
  },
  data() {
    return {
      quizData: null,
      submitted: false
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
        if (question.selected !== undefined) selectedAnswers[question._id] = question.selected;
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
        this.submitted = true;
      });
    },
    handleTimerEnd() {
      alert("Quiz is over.")
    }
  },
  computed: {
    totalCorrect() {
      let totalCorrect = 0;
      this.quizData.map(question => {
        question.correct ? totalCorrect++ : ''
      });
      return totalCorrect;
    },
    totalPercentage() {
      return `${(this.totalCorrect / this.quizData.length) * 100} %`
    }
  },
  mounted() {
    apiInstance.get("/quiz").then(response => {
      this.quizData = response.data;
      this.quizData.forEach(question => {
        question.correct = null;
        question.comment = '';
      })
    });
  }
};
</script>

<style scoped>
.timer {
  position: fixed;
  right: 0;
  top: 0;
  padding: 20px;
}

.quiz {
  margin-bottom: 6em;
}

.questions {
  text-align: left;
  padding-left: 2em;
}

button.check-answers {
  font-size: 1em;
  text-transform: uppercase;
  background-color: #a14343;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 4em;
  width: 100%;
  border: none;
}

button.check-answers:hover {
  background-color: #793131;
}
</style>
