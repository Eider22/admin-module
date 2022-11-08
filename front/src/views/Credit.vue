<template>
  <div class="container-wrap">
    <el-container>
      <el-main>
        <div>
          <div>
            <CreateCredit />
          </div>
          <div class="UserList-wraper">
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CreateCredit from "../components/credit/CreateCredit.vue";

export default {
  name: "User",
  components: {
    CreateCredit,
  },
};
</script>
<style scoped>
.UserList-wraper {
  margin-top: 2rem;
}
.el-header {
  position: sticky;
  top: 0;
}
.container-wrap {
  position: sticky;
  top: 0;
  max-height: 80vh;
}
</style>
