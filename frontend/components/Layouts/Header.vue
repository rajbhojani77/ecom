<template>
  <div>
    <v-app-bar dense>
      <v-toolbar-title>Frontend</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items color="deep-purple accent-4">
        <v-btn v-if="isAuthenticated" to="/" depressed> home</v-btn>
        <v-btn v-if="!isAuthenticated" to="/auth/login" depressed> Login</v-btn>
        <v-btn v-if="!isAuthenticated" to="/auth/register" depressed>
          Register</v-btn
        >
      </v-toolbar-items>
      <v-btn icon v-if="isAuthenticated" @click="logout">
        <v-icon >mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/auth/login");
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style></style>
