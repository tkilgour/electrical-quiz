<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
}

.mar-r {
  margin-right: 1em;
}

@media screen and (min-width: 640px) {
  .dt-inline-block {
    display: inline-block;
  }
}
</style>
