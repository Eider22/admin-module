<template>
  <div>
    <el-table :data="tableData" height="500" style="width: 100%">
      <el-table-column prop="code" label="Código" width="180" />
      <el-table-column prop="requestDate" label="Fecha de solicitud" width="180" />
      <el-table-column prop="partnerName" label="Nombre socio" />
      <el-table-column prop="identificationPartner" label="Identificación" width="180" />
      <el-table-column label="Acciones">
        <div>
          <el-popover
            placement="top-start"
            :width="100"
            trigger="hover"
            content="Rechazar"
          >
            <template #reference>
              <el-button class="view-button" type="danger"
                ><i class="fa-solid fa-x"></i></el-button>
            </template>
          </el-popover>
          <el-popover
            placement="top-start"
            :width="100"
            trigger="hover"
            content="Aprobar"
          >
            <template #reference>
              <el-button class="view-button" type="success"
                ><i class="fa-solid fa-check"></i></el-button>
            </template>
          </el-popover>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "CreditRequestList",
  data() {
    return {
      tableData: [
        {
          code: "0001",
          requestDate: "2022-07-11",
          identificationPartner: "1005698632",
          partnerName: "Juan Alberto Quintero Jaramillo",
        },
        {
          code: "0002",
          requestDate: "2022-05-12",
          identificationPartner: "5265464654",
          partnerName: "Andres cardenas",
        },
        {
          code: "0003",
          requestDate: "2022-07-01",
          identificationPartner: "5456578587",
          partnerName: "Pedro Ignacio castillo",
        },
        {
          code: "0004",
          requestDate: "2022-05-11",
          identificationPartner: "1564655554",
          partnerName: "Leandro Torres",
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
