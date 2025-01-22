import { Exercise } from "@/types/exerciseTypes"
import { exerciseStore } from "@/data/exercises"

export function getExerciseById(id: string): Exercise | undefined {
  return exerciseStore.getExerciseById(id)
} 