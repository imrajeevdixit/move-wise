import { NextResponse } from 'next/server'
import { AppError, errorHandler } from "@/utils/error"
import { exerciseStore } from '@/data/exercises'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      const exercises = exerciseStore.getAllExercises()
      return NextResponse.json(exercises.map(({ exerciseId, name, description, image }) => ({
        exerciseId,
        name,
        description,
        image
      })))
    }

    const exercise = exerciseStore.getExerciseById(id)
    if (!exercise) {
      throw new AppError('Exercise not found', 'EXERCISE_NOT_FOUND', 404)
    }

    return NextResponse.json(exercise)
  } catch (error) {
    const { error: errorMessage, code, status } = errorHandler(error)
    return NextResponse.json({ error: errorMessage, code }, { status })
  }
}

