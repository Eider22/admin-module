<template>
  <div>
    <el-header class="header-wrap">
     <SimpleCard :title="'Ahorro acumulado'" :description="'$900.000'" />
     <SimpleCard :title="'Interés acumulado'" :description="'$90.000'"/>
    </el-header>
    <el-main class="main-wraper">
     <CreateMonthlySaving/>
    </el-main>
  </div>
</template>
<script>
import CreateMonthlySaving from "../components/monthly-saving/ListMonthlySaving.vue";
import SimpleCard from "../components/SimpleCard.vue";
export default {
  name: "MonthlySaving",  
  components:{
    CreateMonthlySaving,
    SimpleCard
  }
};
</script>
<style scoped>
.main-wraper {
  margin-top: 4rem;
}
.header-wrap  {
    position: sticky;
    top: 0;
    display: flex;
}
</style>
