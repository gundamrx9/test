<template>
  <div id="app">
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home
  }
};
</script>

<style>
  #id{
    margin: 0;
    padding: 0;
    position: relative;
  }
  Footer{
    position: absolute;
    bottom: 0;
  }

</style>
