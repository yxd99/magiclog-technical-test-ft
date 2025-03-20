import { create } from "zustand";
import { persist } from "zustand/middleware";

import { config } from "@/config/envs";
import { type AuthAPIResponse } from "@/features/auth/interfaces/auth-api-response";

import { type ProfileActions } from "./profile-actions.interface";
import { type ProfileState } from "./profile-state.interface";

type ProfileStore = ProfileState & ProfileActions;

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: AuthAPIResponse | null) => set({ user }),
    }),
    { name: btoa("profile"), version: Number(config.versionStore) },
  ),
);
