<template>
  <v-container>
    <h1 class="text-h2 mb-8">Exercises</h1>
    <v-form @submit.prevent="addExercise">
      <v-text-field v-model="name" label="Name" />
      <v-btn class="mb-4" prepend-icon="mdi-plus" text="Add Exercise" block type="submit" />
    </v-form>
    <v-card
      v-for="exercise in exercisesStore.exercises"
      :key="exercise.id"
      :title="exercise.name"
      class="mb-4"
    >
      <v-card-actions>
        <v-btn @click="exercisesStore.deleteExercise(exercise.id)"
          >Löschen</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-fab class="fab-position" icon="mdi-plus" />
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useExerciseStore } from "@/stores/exercise";

const exercisesStore = useExerciseStore();
const name = ref("");
const addExercise = () => {
  exercisesStore.createExercise({name: name.value})
}

exercisesStore.fetchExercises();
</script>

<style scoped lang="scss">
.fab-position {
  position: fixed;
  bottom: calc(16px + 24px + 56px);
  right: calc(16px + 48px);
}
</style>
