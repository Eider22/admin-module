<template>
  <el-container>
    <el-header>
      <h2>Asesores</h2>
    </el-header>
    <el-main>
      <div>
        <div>
          <CreateAdvisor />
        </div>
        <div class="advisorlist-wraper">
          <AdvisorList />
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import CreateAdvisor from "../components/advisor/CreateAdvisor.vue";
import AdvisorList from "../components/advisor/AdvisorList.vue";

export default {
  name: "Advisor",
  components: {
    CreateAdvisor,
    AdvisorList,
  },
};
</script>
<style scoped>
.advisorlist-wraper {
  margin-top: 2rem;
}
</style>
