<template>
  <div class="container-wrap">
    <el-header class="header-wrap">
      <SimpleCard :title="'Ahorro acumulado'" :description="'$900.000'" />
      <SimpleCard :title="'Interés acumulado'" :description="'$90.000'" />
    </el-header>
    <el-main class="main-wraper">
      <MonthlySavingList />
    </el-main>
  </div>
</template>
<script>
import MonthlySavingList from "../components/monthly-saving/MonthlySavingList.vue";
import SimpleCard from "../components/SimpleCard.vue";
export default {
  name: "MonthlySaving",
  components: {
    MonthlySavingList,
    SimpleCard,
  },
};
</script>
<style scoped>
.main-wraper {
  margin-top: 1rem;
}
.header-wrap {
  display: flex;
  min-height: 120px;
}
</style>
