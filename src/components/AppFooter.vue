<template>
  <v-footer height="40" app>
    <v-btn @click="logout">Logout</v-btn>
  </v-footer>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

const logout = () => {
  auth.logout();
};


</script>

<style scoped lang="sass">
</style>
