<template>
  <div>
    <el-table :data="tableData" height="500" style="width: 100%">
      <el-table-column prop="code" label="Código" width="180" />
      <el-table-column prop="amount" label="Monto" width="180" />
      <el-table-column prop="status" label="Estado" />
      <el-table-column prop="startDate" label="Fecha inicio" width="180" />
      <el-table-column label="Acciones">
        <div>
          <el-popover
            placement="top-start"
            :width="100"
            trigger="hover"
            content="Ver detalles"
          >
            <template #reference>
              <el-button class="view-button" type="info"
                ><i class="fa-regular fa-eye"></i
              ></el-button>
            </template>
          </el-popover>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "CreditList",
  data() {
    return {
      tableData: [
        {
          code: "0001",
          amount: "$500.000",
          status: "Solicitado",
          startDate: "N/A",
        },
        {
          code: "0002",
          amount: "$2000.000",
          status: "Aprobado",
          startDate: "2022-10-06",
        },
        {
          code: "0004",
          amount: "1.500.000",
          status: "Aprobado",
          startDate: "2022-11-11",
        },
        {
          code: "0003",
          amount: "$70.000.000",
          status: "Rechazado",
          startDate: "N/A",
        },
      ],
    };
  },
};
</script>
<style scoped>
.view-button,
.pay-button,
.download-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
