import { Exercise } from '@/types/exerciseTypes'

// In-memory store for exercise configurations
class ExerciseStore {
  private exercises: Exercise[] = [
    {
        "exerciseId": "squat_1",
        "name": "Squat",
        "description": "Lower your hips until your thighs are parallel to the ground.",
        "image": "/exercises/squat_1.png",
        "calorieFormula": {
          "formula": "(0.00032 * bodyWeight * reps) / 30",
          "unit": "kcal", //TODO: optional and not used
          "variables": {
            "bodyWeight": "grams",
            "reps": "count"
          }
        },
        "keyPoints": [
          {
            "name": "leftLeg",
            "landmarks": [23, 25, 27],
            "type": "angle",
            "unit": "degrees" //TODO: optional and not used
          },
          {
            "name": "rightLeg",
            "landmarks": [24, 26, 28],
            "type": "angle",
            "unit": "degrees" //TODO: optional and not used
          }
        ],
        "thresholds": {
          "down": {
            "leftLeg": 90,
            "rightLeg": 90
          },
          "up": {
            "leftLeg": 160,  
            "rightLeg": 160 
          }
        },
        "countingLogic": {
          "type": "angle_threshold",
          "countOn": "up",
          "requirements": ["leftLeg", "rightLeg"],
          "resetOn": "down"
        },
        "validation": {  
          "correct": "Good form! Keep your back straight and core engaged.",
          "incorrect": "Try to keep your back straight and go a bit lower."
        }
    },
    {
      "exerciseId": "pushup_1",
      "name": "Push-up",
      "description": "Lower your body by bending your elbows until your chest nearly touches the floor.",
      "image": "/exercises/pushup_1.png",
      "calorieFormula": {
        "formula": "(0.000325 * bodyWeight * reps) / 30",
        "unit": "kcal",
        "variables": {
          "bodyWeight": "grams",
          "reps": "count"
        }
      },
      "keyPoints": [
        {
          "name": "leftArm",
          "landmarks": [11, 13, 15],
          "type": "angle",
          "unit": "degrees"
        },
        {
          "name": "rightArm",
          "landmarks": [12, 14, 16],
          "type": "angle",
          "unit": "degrees"
        }
      ],
      "thresholds": {
        "down": {
          "leftArm": 90,
          "rightArm": 90
        },
        "up": {
          "leftArm": 120,
          "rightArm": 120
        }
      },
      "countingLogic": {
        "type": "angle_threshold",
        "countOn": "up",
        "requirements": ["leftArm", "rightArm"],
        "resetOn": "down"
      },
      "validation": {
        "correct": "Excellent push-up! Keep your body in a straight line.",
        "incorrect": "Try to keep your core engaged and avoid sagging your hips."
      }
    },
    {
      "exerciseId": "jumping_jack_1",
      "name": "Jumping Jack",
      "description": "A jumping exercise with legs spread wide and arms going overhead.",
      "image": "/exercises/jumping_jack_1.png",
      "calorieFormula": {
        "formula": "(0.0014 * bodyWeight * minutes * (count / (minutes * averageJacksPerMinute)))",
        "unit": "kcal",
        "variables": {
          "bodyWeight": "grams",
          "minutes": "time",
          "count": "number",
          "averageJacksPerMinute": "50"
        }
      },
      "keyPoints": [
        {
          "name": "handsDistance",
          "landmarks": [15, 16],
          "type": "distance",
          "unit": "meters"
        },
        {
          "name": "feetDistance",
          "landmarks": [27, 28],
          "type": "distance",
          "unit": "meters"
        }
      ],
      "thresholds": {
        "extended": {
          "handsDistance": 0.4,
          "feetDistance": 0.3
        },
        "closed": {
          "handsDistance": 0.2,
          "feetDistance": 0.1
        }
      },
      "countingLogic": {
        "type": "distance_threshold",
        "countOn": "closed",
        "requirements": ["handsDistance", "feetDistance"],
        "resetOn": "extended"
      },
      "validation": {
        "correct": "Great jumping jacks! Keep your arms and legs fully extended.",
        "incorrect": "Try to extend your arms overhead and spread your legs wider."
      }
    },
    {
      "exerciseId": "plank_1",
      "name": "Plank",
      "description": "Hold a position similar to a push-up, but with forearms on the ground.",
      "image": "/exercises/plank_1.png",
      "calorieFormula": {
        "formula": "(0.0006 * bodyWeight * minutes)",
        "unit": "kcal",
        "variables": {
          "bodyWeight": "grams",
          "minutes": "time"
        }
      },
      "keyPoints": [
        {
          "name": "Shoulder",
          "landmarks": [0],
          "type": "POSITION",
          "unit": "index"
        },
        {
          "name": "Hip",
          "landmarks": [23],
          "type": "POSITION",
          "unit": "index"
        },
        {
          "name": "Knee",
          "landmarks": [25],
          "type": "POSITION",
          "unit": "index"
        },
        {
          "name": "Ankle",
          "landmarks": [27],
          "type": "POSITION",
          "unit": "index"
        }
      ],
      "thresholds": {
        "minPoseAngle": 150,
        "maxPoseAngle": 180
      },
      "countingLogic": {
        "type": "position_threshold",
        "countOn": "hold",
        "requirements": ["Shoulder", "Hip", "Knee", "Ankle"],
        "duration": 30
      },
      "validation": {
        "correct": "Strong plank! Maintain a straight line from head to heels.",
        "incorrect": "Avoid sagging your hips or raising your glutes too high."
      }
    },
    {
      "exerciseId": "bicep_curl_1",
      "name": "Bicep Curl",
      "description": "Lift a weight by bending your elbow.",
      "image": "/exercises/bicep_curl_1.png",
      "calorieFormula": {
        "formula": "((0.0003 * bodyWeight + (weight * 0.075)) * reps) / 30",
        "unit": "kcal",
        "variables": {
          "bodyWeight": "grams",
          "weight": "grams",
          "reps": "count"
        }
      },
      "keyPoints": [
        {
          "name": "rightArm",
          "landmarks": [12, 14, 16],
          "type": "angle",
          "unit": "degrees"
        },
        {
          "name": "leftArm",
          "landmarks": [11, 13, 15],
          "type": "angle",
          "unit": "degrees"
        }
      ],
      "thresholds": {
        "down": {
          "rightArm": 140,
          "leftArm": 140
        },
        "up": {
          "rightArm": 60,
          "leftArm": 60
        }
      },
      "countingLogic": {
        "type": "angle_threshold",
        "countOn": "up",
        "requirements": ["rightArm", "leftArm"],
        "resetOn": "down"
      },
      "validation": {
        "correct": "Perfect bicep curls! Control the movement and avoid swinging.",
        "incorrect": "Try to keep your elbows still and avoid using momentum."
      }
    }
  ]

  getAllExercises(): Exercise[] {
    return this.exercises
  }

  getExerciseById(id: string): Exercise | undefined {
    return this.exercises.find(ex => ex.exerciseId === id)
  }

  addExercise(exercise: Exercise): void {
    this.exercises.push(exercise)
  }

  updateExercise(id: string, updatedExercise: Partial<Exercise>): Exercise | undefined {
    const index = this.exercises.findIndex(ex => ex.exerciseId === id)
    if (index === -1) return undefined

    this.exercises[index] = { ...this.exercises[index], ...updatedExercise }
    return this.exercises[index]
  }

  deleteExercise(id: string): boolean {
    const index = this.exercises.findIndex(ex => ex.exerciseId === id)
    if (index === -1) return false

    this.exercises.splice(index, 1)
    return true
  }
}

// Export singleton instance
export const exerciseStore = new ExerciseStore() 