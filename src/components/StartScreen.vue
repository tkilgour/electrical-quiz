<template>
  <div class="start">
    <h1>Electrical Exam Practise</h1>
    <p>Generate a practise test for the Canadian Red Seal exam. Once the test begins, a timer will allow you 48 minutes to answer all 20 randomly selected questions.</p>
    <button @click="generateQuiz">Start Test</button>
  </div>
</template>

<script>
export default {
  name: "StartScreen",
  props: ["generateQuiz"]
}
</script>

<style>
  .start {
    width: 50%;
    margin: 0 auto;
  }
</style>
