<template>
  <el-row>
    <el-col :offset="1" :span="12">
      <h1 data-cy="home-text-1">Bienvenido!</h1>
    </el-col>
    <el-col :span="11">      
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "Home",
};
</script>

<style scoped>
h1 {
  font-size: 90px;
  font-weight: 400;
  margin-bottom: 4px;
}
</style>
