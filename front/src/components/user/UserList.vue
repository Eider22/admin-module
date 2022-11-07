<template>
  <div>
    <el-table :data="tableData" height="500" style="width: 100%">
      <el-table-column prop="name" label="Nombre" width="180" />
      <el-table-column
        prop="identification"
        label="Identificación"
        width="180"
      />
      <el-table-column prop="email" label="email" />
      <el-table-column prop="role" label="Rol" />
      <el-table-column label="Acciones">
        <template #default="scope">
          <div>
            <el-button class="view-button" type="info"
              ><i class="fa-regular fa-eye"></i></el-button>
            <el-button class="edit-button" type="primary"
              ><i class="fa-solid fa-pencil"></i
            ></el-button>
            <el-button class="delete-button" type="danger" @click="deleteUser(scope.row.id)">
              <i class="fa-solid fa-trash"></i>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getData } from "../../request/request";
import { emitter } from "../../main";

export default {
  name: "UserList",
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    async loadData() {
      try {
        const response = await getData("users");
        let tempData = [
          {
            name: response.data[0].firstName,
            identification: response.data[0].identification,
            email: response.data[0].email,
          },
        ];
        this.tableData = tempData;
      } catch (error) {
        console.log(error);
      }
    },
    deleteUser(id) {
      // hacer la request para eliminar usuario
      console.log(id);
    },
    async loadData() {
      try {
        const response = await getData("users");
        let tempData = [];
        response.data.forEach((user) => {
          tempData.push({
            name: `${user.firstName}  ${
              user.secondName ? user.secondName : ""
            }  ${user.lastName}  ${
              user.secondLastName ? user.secondLastName : ""
            }`,
            identification: user.identification,
            email: user.email,
            role: user.role.name,
          });
        });
        this.tableData = tempData;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.loadData();
    emitter.off("onUpdateData");
    emitter.on("onUpdateData", () => {
      this.loadData();
    });
  },
};
</script>
<style scoped>
.view-button, .edit-button, .delete-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
