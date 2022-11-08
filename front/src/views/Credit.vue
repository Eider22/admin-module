<template>
  <div class="container-wrap">
  <el-header class="header-wrap">
     <SimpleCard :title="'Total créditos pedidos'" :description="'$3500.000'" />
     <SimpleCard :title="'Fondos de crédito disponibles'" :description="'$500.000'"/>
    </el-header>
    <el-container>
      <el-main>
        <div>
          <div>
            <CreateCredit />
          </div>
          <div class="credit-list-wraper">
            <CreditList/>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CreateCredit from "../components/credit/CreateCredit.vue";
import CreditList from "../components/credit/CreditList.vue";
import SimpleCard from "../components/SimpleCard.vue";

export default {
  name: "Credit",
  components: {
    CreateCredit,
    CreditList,
    SimpleCard
  },
};
</script>
<style scoped>
.credit-list-wraper {
  margin-top: 2rem;
}

.container-wrap {
  position: sticky;
  top: 0;
  max-height: 80vh;
}
.header-wrap  {
    position: sticky;
    top: 0;
    display: flex;
}
</style>
