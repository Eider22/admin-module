<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="fisrtsName" label="Primer nombre" width="180" />
      <el-table-column prop="secondtName" label="Segundo nombre" width="180" />
      <el-table-column prop="lastName" label="edad" />
      <el-table-column prop="email" label="email" />
      <el-table-column label="Acciones">
        <template  #default="scope">
          <div>
            <el-button type="primary" @click="test(scope.row.id)"
              ><i class="fa-solid fa-pencil"></i
            ></el-button>
            <el-button type="primary">
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

export default {
  name: "AdvisorList",
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    async loadData() {
      const response = await getData("advisors");

      this.tableData = [response];
      console.log(response);
      console.log("response");
    },
    test(id){
        console.log(id)
    }
  },
  mounted() {
    this.loadData();
    // const response = await getData('advisors')
    // console.log(response)
    // this.data.fisrtsName =
  },
};
</script>
<style scoped></style>
