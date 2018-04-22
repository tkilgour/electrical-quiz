<template>
  <div class="question">
    <p>{{ data.question }}</p>
    <span class="mar-r" v-for="(answer, i) in data.answers" :key="answer.concat(data._id).concat(i)">
      <input type="radio" :id="answer.concat(data._id).concat(i)" :value="answer" v-model="selected">
      <label :for="answer.concat(data._id).concat(i)"> {{answer}}</label>
    </span>
    <p v-if="selected"><strong>Selected:</strong><span :class="correct ? 'correct' : 'incorrect'">{{ selected }}</span></p>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ["data"],
  data() {
    return { selected: "" };
  },
  computed: {
    correct: function() {
      const isCorrect = this.data.answers[this.data.correct] === this.selected;
      this.updateCorrect(isCorrect);
      return isCorrect;
    }
  },
  methods: {
    updateCorrect: function(isCorrect) {
      const payload = {
        _id: this.data._id,
        isCorrect: isCorrect
      }
      this.$emit('correct', payload);
    }
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
    content: " ✗ "
  }
</style>
