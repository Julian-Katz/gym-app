<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation class="position-fixed" color=primary>
      <v-btn to="/exercises">
        <v-icon>mdi-dumbbell</v-icon>
        <span>Exercises</span>
      </v-btn>

      <v-btn to="/workouts">
        <v-icon>mdi-flag-checkered</v-icon>
        <span>Workouts</span>
      </v-btn>

      <v-btn to="/profile">
        <v-icon>mdi-account</v-icon>
        <span>Profil</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts" setup>
//
</script>
