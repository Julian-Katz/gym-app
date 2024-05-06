<template>
  <v-form @submit="login">
    <v-text-field
      v-model="email"
      label="Email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      :rules="passwordRules"
      required
      type="password"
    ></v-text-field>
    <v-btn type="submit" color="primary">Login</v-btn>
  </v-form>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const email = ref('');
const password = ref('');
const emailRules = [
  (v) => !!v || 'Email is required',
  (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
];
const passwordRules = [
  (v) => !!v || 'Password is required',
  (v) => v.length >= 8 || 'Password must be at least 8 characters',
];

function login() {
  if ($refs.form.validate()) {
    useAuthStore().login(email.value, password.value);
  }
}
</script>
