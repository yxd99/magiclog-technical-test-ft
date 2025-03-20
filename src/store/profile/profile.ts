import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProfileActions } from "./profile-actions.interface";
import { ProfileState } from "./profile-state.interface";
import { config } from "@/config/envs";
import { AuthAPIResponse } from "@/features/auth/interfaces/auth-api-response";

type ProfileStore = ProfileState & ProfileActions;

export const useProfileStore = create<ProfileStore>()(
  persist((set) => ({
    user: null,
    setUser: (user: AuthAPIResponse | null) => set({ user }),
  }), { name: btoa('profile'), version: Number(config.versionStore) })
)
