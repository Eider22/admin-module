<template>
  <div >
    <el-table :data="tableData" height="500" style="width: 100%">
      <el-table-column prop="code" label="Código" width="180" />
      <el-table-column prop="name" label="Nombre" width="180" />
      <el-table-column prop="estimatedReturn" label="Rentabilidad estimada" width="180" />
      <el-table-column prop="myInvestment" label="Mi inversión" width="180" />
      <el-table-column prop="return" label="Rentabilidad obtenida" />
      <el-table-column prop="status" label="Estado" />
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
              ><i class="fa-regular fa-eye"></i></el-button>
            </template>
          </el-popover>          
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "ListCrowdFunding",
  data() {
    return {
      tableData: [
       {
          code: "0001",
          name: "Plantación aguacate STC",
          estimatedReturn: "10%",
          myInvestment: "$2000.000",
          return: "N/A",
          status: "En recaudo",
        },
       {
          code: "0002",
          name: "Construcción edificio TCT",
          estimatedReturn: "6%",
          myInvestment: "$1000.000",
          return: "N/A",
          status: "En ejecución",
        },
       {
          code: "0003",
          name: "Construcción puente TA",
          estimatedReturn: "10%",
          myInvestment: "6.000.000",
          return: "$600.000",
          status: "En ejecución",
        },
       {
          code: "0004",
          name: "Construcción edificio TQ",
          estimatedReturn: "5%",
          myInvestment: "$1000.000",
          return: "0",
          status: "Cancelado",
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
