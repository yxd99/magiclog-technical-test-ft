import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProfileActions } from "./profile-actionst.interface";
import { ProfileState } from "./profile-state.interface";
import { config } from "@/config/envs";

type ProfileStore = ProfileState & ProfileActions;

export const useProfileStore = create<ProfileStore>()(
  persist((set) => ({
    user: null,
    setUser: (user: Record<string, unknown>) => set({ user }),
  }), { name: btoa('profile'), version: Number(config.versionStore) })
)