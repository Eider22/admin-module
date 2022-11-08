<template>
  <div class="test">
    <el-popover
      placement="top-start"
      :width="100"
      trigger="hover"
      content="Crear nueva solicitud"
    >
      <template #reference>
          <el-button class="plus-button" type="primary" @click="openModal()"
            ><i class="fa-solid fa-plus"></i
          ></el-button>
      </template>
    </el-popover>
    <el-dialog v-model="dialogVisible" width="55%" title="Solicitud crédito">
      <el-form
        ref="registerCreditForm"
        :model="form"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="Fecha" prop="currentDate">
          <el-col :span="11">
            <el-date-picker
              v-model="form.currentDate"
              type="date"
              placeholder=""
              style="width: 100%"
              disabled
            />
          </el-col>
        </el-form-item>
        <el-form-item label="Identificación">
          <el-input v-model="form.identification" disabled />
        </el-form-item>
        <el-form-item label="Primer nombre">
          <el-input v-model="form.firstName" disabled="" />
        </el-form-item>
        <el-form-item label="Segundo nombre">
          <el-input v-model="form.secondtName" disabled />
        </el-form-item>
        <el-form-item label="Primer apellido">
          <el-input v-model="form.lastName" disabled />
        </el-form-item>
        <el-form-item label="Segundo apellido">
          <el-input v-model="form.secondLastName" disabled />
        </el-form-item>
        <el-form-item label="Monto a solicitar" prop="amount">
          <el-input v-model="form.amount" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="saveRequestCredit('registerCreditForm')"
            >Solicitar</el-button
          >
          <el-button @click="cleanForm">Limpiar</el-button>
          <el-button @click="closeModal">Cancelar</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "CreateCredit",
  data() {
    return {
      dialogVisible: false,
      form: {
        identification: "1005698632",
        firstName: "Juan",
        secondtName: "Alberto",
        lastName: "Quintero",
        secondLastName: "Jaramillo",
        currentDate: Date.now(),
        amount: "",
      },
      rules: {
        amount: [
          {
            type: "number",
            asyncValidator: this.checkAmount,
          },
        ],
      },
    };
  },
  methods: {
    async validateForm(formName) {
      let res;
      await this.$refs[formName].validate((valid) => {
        res = valid;
      });
      return res;
    },

    checkAmount(rule, value) {
      const regex = new RegExp("^[0-9]+$");
      return new Promise((resolve, reject) => {
        if (!value) {
          reject("Por favor ingresa el monto que quiere solicitar");
          return;
        }
        if (!regex.test(value)) {
          reject("Solo se admiten números");
          return;
        }
        resolve(true);
        return;
      });
    },

    async saveRequestCredit(formName) {
      if (!this.$refs[formName]) return;
      const formIsValid = await this.validateForm(formName);
      if (!formIsValid) return;
      try {
        //Solicitud a la api
        this.dialogVisible = false;
      } catch (err) {
        console.log(err);
      }
    },

    openModal() {
      this.dialogVisible = true;
      if (!this.$refs["registerCreditForm"]) return;
      this.cleanForm();
    },

    closeModal() {
      if (!this.$refs["registerCreditForm"]) return;
      this.cleanForm();
      this.dialogVisible = false;
    },

    cleanForm() {
      if (!this.$refs["registerCreditForm"]) return;
      !this.$refs["registerCreditForm"].resetFields();
      this.form.amount = "";
      return;
    },
  },
};
</script>
<style scoped>
.plus-button {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.test {
  margin-top: 60px;
}
</style>
