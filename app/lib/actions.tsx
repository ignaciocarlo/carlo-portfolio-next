'use server'

import { getExperiences } from "./data";

export async function fetchExperiences() {
  return await getExperiences();
}