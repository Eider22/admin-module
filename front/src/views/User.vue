<template>
  <div class="container-wrap">
    <el-container>
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
  </div>
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
.container-wrap {
  position: sticky;
  top: 0;
  max-height: 80vh;
}
</style>
