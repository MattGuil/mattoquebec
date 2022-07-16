<template>
  <div id="app">
    <Navbar></Navbar>
    <div id="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/navbar/navbar.vue';
import Footer from './components/footer/footer.vue';
  
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Chakra Petch', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#content {
  width: 60%;
  height: 100%;
  margin: 20px auto;
}
</style>