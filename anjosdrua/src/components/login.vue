<template>
  <div class="hello">
    <input v-model="email" placeholder="Email" type="text" />
    <br />
    <input v-model="senha" placeholder="Senha" type="text" />
    <br />
    <br />
    <button @click="realizarLogin()">Login</button>
    <router-link :to="{ name: 'siginUp' }">Cadastre-se</router-link>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return { email: null, senha: null };
  },
  methods: {
    realizarLogin() {
      if (!this.email || !this.senha)
        alert("Por favor, preencha email e senha.");
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.senha)
        .then((res) => {
          alert("Login Realizado");
          this.$router.push({ name: "home" });
          console.log(res);
        })
        .catch(function (error) {
          alert("Cadastro Incorreto - " + error.message);
          console.log(error);
        });
    },
  },
  name: "login",
  props: {
    msg: String,
  },
};
</script>