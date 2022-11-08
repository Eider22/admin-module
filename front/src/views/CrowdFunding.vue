<template>
  <div class="container-wrap">
    <el-header class="header-wrap">
      <SimpleCard :title="'Balance'" :description="'$600.000'" />
    </el-header>
    <el-main class="main-wraper">
      <el-tabs type="border-card">
          <el-tab-pane label="Mis inversiones"
            ><ListCrowdFunding
          /></el-tab-pane>
          <el-tab-pane label="Proyectos diponibles para tí">
            <ListAvailableCrowdFunding />
          </el-tab-pane>
      </el-tabs>
    </el-main>
  </div>
</template>
<script>
import SimpleCard from "../components/SimpleCard.vue";
import ListCrowdFunding from "../components/crowd-funding/ListCrowdFunding.vue";
import ListAvailableCrowdFunding from "../components/crowd-funding/ListAvailableCrowdFunding.vue";
export default {
  name: "CrowdFunding",
  components: {
    SimpleCard,
    ListCrowdFunding,
    ListAvailableCrowdFunding,
  },
};
</script>
<style scoped>
.main-wraper {
  margin-top: 4rem;
}
.header-wrap {
  display: flex;
}
.container-wrap {
  position: sticky;
  top: 0;
  max-height: 80vh;
}
</style>
