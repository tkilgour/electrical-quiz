<template>
  <div class="question">
    <p>{{ data.question }}</p>
    <div class="mar-r dt-inline-block" v-for="answerObj in data.answers" :key="answerObj.id">
      <input type="radio" :id="answerObj.id.concat(data._id)" :value="answerObj.id" v-model="selected" @click="$emit('answerSelect', data._id, answerObj.id)">
      <label :for="answerObj.id.concat(data._id)"> {{answerObj.answer}}</label>
    </div>
    <p v-if="data.correct != null"><strong>Selected:</strong><span :class="data.correct ? 'correct' : 'incorrect'">{{ data.comment }}</span></p>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ["data"],
  data() {
    return { selected: "" };
  }
};
</script>

<style scoped>
.question {
  margin-bottom: 3em;
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
</style>
