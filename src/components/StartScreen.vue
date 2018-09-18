<template>
  <div class="start">
    <h1>Electrical Exam Practise</h1>
    <p>Generate a practise test for the <em>Canadian Red Seal</em> exam. Once the test begins, a timer will allow you 48 minutes to answer all 20 randomly selected questions.</p>
    <router-link class="start-btn" to="/quiz">Start Test</router-link>
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
  .start-btn {
    background-color: #a14343;
    padding: 1em 2em;
    color: #eee;
    text-decoration: none;
    font-size: 1em;
    text-transform: uppercase;
    color: #ffffff;
    display: inline-block;
  }
  .start-btn:hover {
    background-color: #793131;
  }
</style>
