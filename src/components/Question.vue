<template>
  <div class="question">
    <p><span class="question-num">{{ questionNum }}.</span>{{ data.question }}</p>
    <div class="mar-r flex" v-for="answerObj in data.answers" :key="answerObj.id">
      <input type="radio" :disabled="submitted" class="mar-r" :id="answerObj.id + data._id" :value="answerObj.id" v-model="selected" @click="$emit('answerSelect', data._id, answerObj.id)">
      <label :for="answerObj.id + data._id"> {{answerObj.answer}}</label>
    </div>
    <p v-if="data.correct != null"><span :class="data.correct ? 'correct' : 'incorrect'">{{ data.correct ? 'Correct!' : 'Incorrect'}}</span></p>
    <div v-if="data.correct === false" class="comment" v-html="data.comment"></div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: [
    "questionNum",
    "data",
    "submitted"
  ],
  data() {
    return { selected: "" };
  }
};
</script>

<style scoped>
.mar-r {
  margin-right: 1em;
}

.flex {
  display: flex;
}

.question {
  margin-bottom: 3em;
  position: relative;
}

.question-num {
  position: absolute;
  left: -1.8em;
  color: #aaa;
  font-size: 1.3em;
  font-style: italic;
  text-align: right;
}

.correct {
  color: #3eaa2e;
}

.correct::before {
  content: " ✓ ";
}

.incorrect {
  color: #f52020;
}

.incorrect::before {
  content: " ✗ ";
}

.comment {
  border: #aaa 1px solid;
  border-radius: 0.2em;
  background-color: #eee;
  padding: 1em;
  padding-left: 2.5em;
  position: relative;
  font-style: italic;
}

.comment::before {
  content: "!";
  color: #f52020;
  position: absolute;
  left: 0.8em;
  font-size: 1.5em;
  font-weight: bold;
  font-style: normal;
  line-height: 1;
}
</style>
