// Utilities
import { defineStore } from "pinia";
import axios from "./axios";
import router from "@/router";
import { ValidationError, User } from "./types";
import { isAxiosError } from "axios";

const userJson = localStorage.getItem("user");

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: userJson ? JSON.parse(userJson) : (null as User | null),
    validationError: null as ValidationError | null,
    returnUrl: null as string | null,
  }),
  actions: {
    async login(email: String, password: String) {
      try {
        this.validationError = null;
        await axios.get("/sanctum/csrf-cookie");
        const response = await axios.post("/login", {
          email: email,
          password: password,
        });
        if (response.status === 204) {
          await this.getUser();
          router.push(this.returnUrl || "/");
          this.returnUrl = null;
        }
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
    async getUser() {
      try {
        const response = await axios.get("/api/user");
        this.user = response.data;
        localStorage.setItem("user", JSON.stringify(this.user));
      } catch (error) {
        console.error(error);
      }
    },
    async logout() {
      try {
        await axios.post("/logout");
        this.user = null;
        localStorage.removeItem("user");
        router.push("/login");
      } catch (error) {
        console.error(error);
      }
    },
    async sessionExpired() {
      this.user = null;
      localStorage.removeItem("user");
      this.returnUrl = router.currentRoute.value.fullPath;
      router.push("/login");
    },
    async register(email: String, password: String, passwordConfirmation: String) {
      try {
        this.validationError = null;
        await axios.get("/sanctum/csrf-cookie");
        const response = await axios.post("/register", {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        });
        if (response.status === 204) {
          await this.getUser();
          router.push("/");
          this.returnUrl = null;
        }
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
  },
});
