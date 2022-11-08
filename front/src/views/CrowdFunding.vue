<template>
  <div class="container-wrap">
    <el-header class="header-wrap">
      <SimpleCard :title="'Balance'" :description="'$600.000'" />
    </el-header>
    <el-main class="main-wraper">
      <el-tabs type="border-card">
          <el-tab-pane label="Mis inversiones"
            ><CrowdFundingList
          /></el-tab-pane>
          <el-tab-pane label="Proyectos diponibles para tí">
            <AvailableCrowdFundingList />
          </el-tab-pane>
      </el-tabs>
    </el-main>
  </div>
</template>
<script>
import SimpleCard from "../components/SimpleCard.vue";
import CrowdFundingList from "../components/crowd-funding/CrowdFundingList.vue";
import AvailableCrowdFundingList from "../components/crowd-funding/AvailableCrowdFundingList.vue";
export default {
  name: "CrowdFunding",
  components: {
    SimpleCard,
    CrowdFundingList,
    AvailableCrowdFundingList,
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
