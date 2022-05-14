import { request } from "strapi-helper-plugin";

export const getFruits = async () => await request("/fruits");
