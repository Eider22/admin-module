<template>
  <div class="container">
    <el-table :data="tableData" height="500" style="width: 100%" class="el-table">
      <el-table-column prop="code" label="Código" width="180" />
      <el-table-column prop="amount" label="Monto" width="180" />
      <el-table-column prop="status" label="Estado" />
      <el-table-column prop="maxPaymentDate" label="Fecha máxima de pago" />
      <el-table-column label="Acciones">
                <template #default="scope">
        <div>
          <el-popover
            placement="top-start"
            :width="100"
            trigger="hover"
            content="Pagar ahora mismo"
          >
            <template #reference>
              <el-button v-if="scope.row.status !== 'Pago'? true: false" class="pay-button" type="primary"
                ><i class="fa-solid fa-dollar-sign"></i
              ></el-button>
            </template>
          </el-popover>
          <el-popover
            placement="top-start"
            :width="200"
            trigger="hover"
            content="Descargar comprobante pago"
          >
            <template #reference>
              <el-button v-if="scope.row.status === 'Pago'? true: false" class="download-button" type="success">
                <i class="fa-solid fa-file-arrow-down"></i>
              </el-button>
            </template>
          </el-popover>
        </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "MonthlySavingList",
  data() {
    return {
      tableData: [
        {
          code: "0001",
          amount: "$100.000",
          status: "Pago",
          maxPaymentDate: "2022-10-06",
        },
        {
          code: "0002",
          amount: "$100.000",
          status: "Pago",
          maxPaymentDate: "2022-10-06",
        },
        {
          code: "0003",
          amount: "$100.000",
          status: "Pago",
          maxPaymentDate: "2022-10-06",
        },
        {
          code: "0004",
          amount: "$100.000",
          status: "Pago",
          maxPaymentDate: "2022-10-06",
        },
        {
          code: "0005",
          amount: "$100.000",
          status: "Pago",
          maxPaymentDate: "2022-10-06",
        },
        {
          code: "0006",
          amount: "$100.000",
          status: "Pago",
          maxPaymentDate: "2022-10-06",
        },
        {
          code: "0007",
          amount: "$100.000",
          status: "Pago",
          maxPaymentDate: "2022-10-06",
        },
        {
          code: "0008",
          amount: "$100.000",
          status: "Vencido",
          maxPaymentDate: "2022-10-06",
        },
        {
          code: "0009",
          amount: "$100.000",
          status: "Pago",
          maxPaymentDate: "2022-10-06",
        },
        {
          code: "0010",
          amount: "$100.000",
          status: "Pago",
          maxPaymentDate: "2022-11-06",
        },
        {
          code: "0011",
          amount: "$100.000",
          status: "Pendiente",
          maxPaymentDate: "202-12-06",
        },
        {
          code: "0012",
          amount: "$100.000",
          status: "Pendiente",
          maxPaymentDate: "202-12-06",
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
.el-table {
  height:50vh;
}
</style>
