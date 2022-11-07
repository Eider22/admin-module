<template>
  <el-container>
    <el-header class="el-header">
      <h2>Usuarios</h2>
    </el-header>
    <el-main>
      <div>
        <div>
          <CreateUser />
        </div>
        <div class="UserList-wraper">
          <UserList />
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import CreateUser from "../components/user/CreateUser.vue";
import UserList from "../components/user/UserList.vue";

export default {
  name: "User",
  components: {
    CreateUser,
    UserList,
  },
};
</script>
<style scoped>
.UserList-wraper {
  margin-top: 2rem;
}
.el-header  {
    position: sticky;
    top: 0;
}
</style>
