<template>
   <div class="header">
     VUE 小组件示例
   </div>
</template>
<script>
    export default {
      name:'Header'
    }
</script>
<style>
  .header{
    height: 60px;
    font-size: 24px;
    line-height: 60px;
    width: 100%;
    background: gray;
    padding: 0 30px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-weight: bolder;
    color: #ffffff;
    text-shadow: 1px 1px #000,-1px -1px #000, 1px -1px #000, -1px 1px #000;
  }
</style>
