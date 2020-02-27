<template>
  <v-container>
    <h1>Login</h1>

    <UserAuthForm :submitForm="loginUser" buttonText="LogIn" :hasName="false" />
  </v-container>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'

export default {
  components: {
    UserAuthForm
  },
  methods: {
    loginUser(loginInfo) {
      console.log('>>> Login Info::: ', loginInfo)
      this.$auth.loginWith('cognito')
        .then(data => console.log('>>> LOGGED IN::: ', data))
        .catch(err => console.error('>>> ERROR::: ', err))
    }
  }
}
</script>

<style lang="scss" scoped></style>
