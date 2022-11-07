<template>
  <el-container>
    <el-header>
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
import CreateUser from "../components/users/CreateUser.vue";
import UserList from "../components/users/UserList.vue";

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
</style>
