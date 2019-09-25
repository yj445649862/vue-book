<template>
  <el-container>
    <el-header style="padding: 0">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Nav></Nav>
      </el-aside>
      <RouterView></RouterView>
    </el-container>
  </el-container>
</template>

<script>
  import Header from '../components/layout/Header'
  import Footer from '../components/layout/Footer'
  import Nav from '../components/layout/Nav'
  export default {
    name: 'Dashboard',
    components:{Header,Footer,Nav},
    data(){
      return{

      }
    }
  }

</script>

<style scoped>

</style>
