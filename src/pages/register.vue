<template>
  <v-container>
    <div class="h-screen d-flex justify-center align-center">
      <v-card max-width="600" class="pa-8 w-100">
        <h1 class="text-h2 mb-4">Sign Up</h1>
        <v-form @submit.prevent="register">
          <v-text-field
          v-model="email"
          label="Email"
          required
          type="email"
          :error-messages="authStore.validationError?.errors?.email"
          class="mb-2"
          />
          <v-text-field
          v-model="password"
          label="Password"
          required
          type="password"
          :error-messages="authStore.validationError?.errors?.password"
          class="mb-4"
          />
          <v-text-field
          v-model="passwordControl"
          label="Repeat Password"
          required
          type="password"
          :error-messages="authStore.validationError?.errors?.password"
          class="mb-4"
          />
          <v-btn class="mb-4" size="large" type="submit" color="primary">Sign Up</v-btn>
        </v-form>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const email = ref("");
const password = ref("");
const passwordControl = ref("");

function register() {
  authStore.register(email.value, password.value, passwordControl.value);
}
</script>

<route lang="yaml">
meta:
  layout: no-navigation
</route>
