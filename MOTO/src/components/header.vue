<template>
  <div id="header">
    <el-header>
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item v-for="(item,i) in navList" :key="i.index" index="i" @click="go">
            {{item.navItem}}
          </el-menu-item>
        <img :src="img" alt="logo" class="logo" />
      </el-menu>
    </el-header>

    
      
  </div>
  
</template>

<script scoped>
export default {
  
  data() {
    return {
      img: require("../assets/logo.png"),
      navList: [
        { name: "/App", navItem: "HOME" },
        { name: "/MOTO", navItem: "MOTOBLKE" },
        { name: "/ABOUT", navItem: "ABOUT" },
        { name: "/CONTACT", navItem: "CONTACT" }
      ]
    };
  },
  methods: {
      go(){
        this.$router.push(this.navList.name)
      }
  }
};
</script>

<style>
.logo {
  width: 200px;
  float: right;
}
</style>