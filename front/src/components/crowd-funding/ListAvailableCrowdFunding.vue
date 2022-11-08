<template>
  <div class="container-wrap">
    <el-row>
      <el-col
        v-for="card in cardData"
        :key="card.id"
        :span="8"
        :offset="index > 0 ? 2 : 0"
      >
        <div class="card-wrap">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="../../assets/images/imageDefault.png"
              class="image"
            />
            <div style="padding: 14px">
              <h3>{{card.name}}</h3>
              <div class="information-wrap">
                <div><b>Rentabilidad estimada</b>: {{card.estimatedReturn}}</div>
                <h4>Descripción</h4>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis inventore rem, optio delectus hic voluptates nisi
                  culpa cupiditate, earum quis tempora harum minus ipsam,
                  quisquam temporibus porro quas iste? Dolorem rem aut assumenda
                  aperiam dolor officia porro praesentium. Saepe, reiciendis.
                </div>
                <div>test</div>
              </div>
              <div>
                <el-button text class="button" type="primary"
                  >Ir al sitio</el-button
                >
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "ListAvailableCrowdFunding",
  data() {
    return {
      cardData: [
        {
          code: "0001",
          name: "Construcción TRE",
          estimatedReturn: "10%",
          myInvestment: "",
          return: "",
          status: "",
        },
        {
          code: "0001",
          name: "Puente Manizales-Villamaría",
          estimatedReturn: "15%",
          myInvestment: "",
          return: "",
          status: "",
        },
        {
          code: "0001",
          name: "Nombre genérico",
          estimatedReturn: "n%",
          myInvestment: "",
          return: "",
          status: "",
        },
        {
          code: "0001",
          name: "Nombre genérico",
          estimatedReturn: "n%",
          myInvestment: "",
          return: "",
          status: "",
        },
        {
          code: "0001",
          name: "Nombre genérico",
          estimatedReturn: "n%",
          myInvestment: "",
          return: "",
          status: "",
        },
        {
          code: "0001",
          name: "Nombre genérico",
          estimatedReturn: "n%",
          myInvestment: "",
          return: "",
          status: "",
        },
        {
          code: "0001",
          name: "Nombre genérico",
          estimatedReturn: "n%",
          myInvestment: "",
          return: "",
          status: "",
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
.container-wrap {
  overflow-x: scroll;
}
.card-wrap {
  margin: 10px;
  width: 300px;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
.information-wrap {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
