<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        class="aside"
        height="100vh"
        width="20%"
        style="overflow: hidden"
        >Aside</el-aside
      >
      <el-container class="container-header-main">
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
:root {
  --blue: #083249;
  --el-header-height: 30px;
  font-size: 16px;
}

body {
  font-family: sans-serif Arial, Helvetica;
  margin: 0;
  padding: 0;
  background-size: contain;
  height: 100vh;
}
#app {
  font-family: sans-serif Arial, Helvetica;
  background: #e7eae1;
  height: 100vh;
}
.aside {
  background-color: var(--blue);
  height: 100vh;
  padding: 0.5rem;
  color: #eeee;
}
.container-header-main {
  padding: 1rem;
}
/* .root-header {
  padding: 1rem;
} */
</style>
