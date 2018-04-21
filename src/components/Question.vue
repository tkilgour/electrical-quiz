<template>
  <div>
    <p>{{ data.question }}</p>
    <div v-for="(answer, i) in data.answers" :key="answer.concat(data._id).concat(i)">
      <input type="radio" :id="answer.concat(data._id).concat(i)" :value="answer" v-model="active">
      <label :for="answer.concat(data._id).concat(i)"> {{answer}}</label>
    </div>
    <p><strong v-if="active">Selected:</strong> {{ active }}</p>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ["data"],
  data() {
    return { active: "" };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
