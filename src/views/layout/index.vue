<template>
  <el-container>
    <!-- 侧边栏容器 -->
    <el-aside width="180px">
      aside
    </el-aside>
    <el-container>
      <!-- 顶栏容器 -->
      <el-header>header</el-header>
      <!-- 主要区域容器 -->
      <el-main>main</el-main>
      <!-- 底栏容器 -->
      <el-footer>footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
export default {};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
