import { type useQueryClient } from "@tanstack/react-query";
import { redirect } from "react-router";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { config } from "@/config/envs";
import { Roles } from "@/features/auth/enums/roles";
import { type AuthAPIResponse } from "@/features/auth/interfaces/auth-api-response";
import { Paths } from "@/lib/constants/paths";

import { type ProfileActions } from "./profile-actions.interface";
import { type ProfileState } from "./profile-state.interface";

type ProfileStore = ProfileState & ProfileActions;

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAdmin: false,
      isSeller: false,
      setUser: (user: AuthAPIResponse | null) =>
        set({
          user,
          isAdmin: user?.role === Roles.ADMIN,
          isSeller: user?.role === Roles.SELLER || user?.role === Roles.ADMIN,
        }),
      logout: (queryClient: ReturnType<typeof useQueryClient>) => {
        if (get().user === null) {
          return;
        }
        queryClient.clear();
        set({ user: null });
        redirect(Paths.HOME);
      },
    }),
    { name: btoa("profile"), version: Number(config.versionStore) },
  ),
);
