<template>
  <el-menu :default-openeds="['1']" @select="openNav">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>示例</template>
      <el-menu-item-group>
<!--        <template slot="title">按钮</template>-->
        <el-menu-item index="buttons">按钮</el-menu-item>
        <el-menu-item index="1-2">弹框</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>图表</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">antv</el-menu-item>
        <el-menu-item index="2-2">echarts</el-menu-item>
        <el-menu-item index="2-3">highcharts</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>地图</template>
      <el-menu-item-group>
<!--        <template slot="title">百度地图</template>-->
        <el-menu-item index="3-1">高德地图</el-menu-item>
        <el-menu-item index="3-2">腾讯地图</el-menu-item>
        <el-menu-item index="3-3">百度地图</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'Nav',
  methods: {
    openNav (key, keyPath) {
      this.$router.push(`/demos/${key}`)
    }
  }

}
</script>
