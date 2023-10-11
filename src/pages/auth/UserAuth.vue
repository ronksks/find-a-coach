<script>
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseCard from "@/components/ui/BaseCard.vue";

export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: "login"
    }
  },
  computed:{
    submitButtonCapture(){
      if(this.mode ==='login'){
        return 'Login'
      }else{
        return 'Signup'
      }
    },
    switchModeButtonCaption(){
      if(this.mode ==='login'){
        return 'Signup instead'
      }else{
        return 'Login instead'
      }
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true
      if (this.email === '' || !this.email.includes('@')
          || this.password.length < 6) {
        this.formIsValid = false
        return
      }
      //send httpd request
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup'
      } else {
        this.mode = 'login'
      }
    },
  }
}


</script>

<template>
  <base-card>

    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email"/>
      </div>
      <p v-if="!formIsValid">Please anter a valid email and password (must be at leach 6 char long)</p>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password">
      </div>
      <base-button>{{submitButtonCapture}}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption}}</base-button>

    </form>
  </base-card>
</template>

<style scoped>
form {
  margin: 1rem;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}


</style>