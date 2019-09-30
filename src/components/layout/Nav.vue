<template>
  <el-menu :default-openeds="['1']" @select="openNav">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>示例</template>
      <el-menu-item-group>
        <el-menu-item index="component">组件内调用接口</el-menu-item>
        <el-menu-item index="store" v-if="auth('requestInStore')">store内调用口</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>权限控制</template>
      <el-menu-item-group>
        <el-menu-item index="auth">权限控制</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
<!--    <el-submenu index="3">-->
<!--      <template slot="title"><i class="el-icon-menu"></i>图表</template>-->
<!--      <el-menu-item-group>-->
<!--        <el-menu-item index="2-1">antv</el-menu-item>-->
<!--        <el-menu-item index="2-2">echarts</el-menu-item>-->
<!--        <el-menu-item index="2-3">highcharts</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--    </el-submenu>-->
<!--    <el-submenu index="4">-->
<!--      <template slot="title"><i class="el-icon-setting"></i>地图</template>-->
<!--      <el-menu-item-group>-->
<!--&lt;!&ndash;        <template slot="title">百度地图</template>&ndash;&gt;-->
<!--        <el-menu-item index="3-1">高德地图</el-menu-item>-->
<!--        <el-menu-item index="3-2">腾讯地图</el-menu-item>-->
<!--        <el-menu-item index="3-3">百度地图</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--    </el-submenu>-->
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
