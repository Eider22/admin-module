<template>
  <div class="common-layout">
    <el-container class="el-container">
      <el-aside
        class="aside"
        height="100vh"
        width="20%"
        style="overflow: hidden"
        >
        <SideNav/>
        </el-aside
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
import SideNav from "./components/SideNav.vue";

export default {
  name: "App",
  components: {
    SideNav,
  },
};
</script>

<style>
:root {
  --blue: #083249;
  --el-header-height: 30px;
  --color-gray-transparent: #afb1b3;
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
  min-width: 15rem;
  padding: 0.5rem;
  color: #eeee;
}
.container-header-main {
  padding: 1rem;
}

.el-container {
  max-height: 100vh;
}

::-webkit-scrollbar {
    display: none;
}
</style>
