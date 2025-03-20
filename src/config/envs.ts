import { z } from "zod";

const envVarsSchema = z.object({
  VITE_USER_NODE_ENV: z.enum(["production", "development", "test"]),
  VITE_API_URL: z.string(),
  VITE_VERSION_STORE: z.number(),
});

const { error, data: envVars } = envVarsSchema.safeParse(import.meta.env);

if (error) {
  throw new Error(
    `Invalid environment variables: ${JSON.stringify(error.formErrors)}`,
  );
}

export const config = {
  apiUrl: envVars.VITE_API_URL,
  userNodeEnv: envVars.VITE_USER_NODE_ENV,
  versionStore: envVars.VITE_VERSION_STORE,
};
