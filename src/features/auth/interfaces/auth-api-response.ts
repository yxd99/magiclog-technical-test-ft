import { Roles } from "../enums/roles";

export interface AuthAPIResponse {
  id:          string;
  name:        string;
  email:       string;
  role:        Roles;
  accessToken: string;
}
