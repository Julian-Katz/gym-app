// Utilities
import { defineStore } from "pinia";
import axios from "./axios";
import { ValidationError, Exercise  } from "./types";
import { isAxiosError } from "axios";

export const useExerciseStore = defineStore("exercise", {
  state: () => ({
    exercises: [] as Exercise[] | null,
    validationError: null as ValidationError | null,
  }),
  actions: {
    async fetchExercises() {
      try {
        const response = await axios.get("api/exercises");
        this.exercises = response.data.data;
      } catch (error: any) {
          console.error(error);
      }
    },
    async createExercise(exercise: Exercise) {
      try {
        this.validationError = null;
        const response = await axios.post("api/exercises", exercise);
        this.exercises?.push(response.data.data);
      } catch (error: any) {
        if (isAxiosError(error)) {
          if (error.response && error.response.status === 422) {
            this.validationError = error.response.data;
          } else {
            console.error(error);
          }
        } else {
          console.error(error);
        }
      }
    },
    async deleteExercise(id: number) {
      try {
        await axios.delete(`api/exercises/${id}`);
        this.exercises = this.exercises?.filter((exercise) => exercise.id !== id) ?? null;
      } catch (error: any) {
        console.error(error);
      }
    },
    async updateExercise(exercise: Exercise) {
      try {
        await axios.put(`api/exercises/${exercise.id}`);
        this.exercises = this.exercises?.filter((exercise) => exercise.id !== id) ?? null;
        this.exercises?.push(exercise);
      } catch (error: any) {
        console.error(error);
      }
    }

  },
});
