<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Nav Bar -->
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon>
        <!-- Login Controls -->
        <v-btn
          v-if="!authenticated"
          rounded
          class="login-button"
          color="primary"
          dark
          to="/login"
          >Login</v-btn
        >
        <v-btn v-else rounded class="login-button" color="primary" dark
          @click.prevent="logout"
          >Logout</v-btn
        >
      </v-btn>
    </v-app-bar>

    <!-- content -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- footer -->
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-apps',
          title: 'Todos',
          to: '/todos'
        }
      ],
      title: 'Saasy Todos.js'
    }
  },
  computed: {
    authenticated() {
      console.log('>>>>>> AUTH :: ', this.$auth?.$state?.user)
      return this.$auth?.$state?.user
    }
  },
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
}
</script>

<style lang="scss" scoped>
.login-button {
  right: 35px;
}
</style>
