<template>
  <v-container>
    <h1>Login</h1>
    <!-- <UserAuthForm
      :submitForm="loginUser"
      :buttonText="LogIn"
      :hasName="false"
    /> -->
  </v-container>
</template>

<script>
// import UserAuthForm from '@/components/UserAuthForm'

export default {
  components: {
    // UserAuthForm
  },
  methods: {
    loginUser() {
      alert("You're logged in")
    }
  }
}
</script>

<style lang="scss" scoped></style>
