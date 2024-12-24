import React from 'react'
import { Progress, ProgressProps } from '../ui/progress'

export default function FitnessTracker() {
  const workoutProgress = 75;
  const nutritionProgress = 60;
  const sleepProgress = 50;

  return (
    <div className="space-y-4">
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">Workout</span>
          <span className="text-sm font-medium">7,500 / 10,000</span>
        </div>
        <Progress 
          {...{ value: workoutProgress, className: "w-full h-2 bg-gray-200" } as ProgressProps}
        />
      </div>
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">Nutrition</span>
          <span className="text-sm font-medium">320 kcal</span>
        </div>
        <Progress 
          {...{ value: nutritionProgress, className: "w-full h-2 bg-gray-200" } as ProgressProps}
        />
      </div>
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">Sleep</span>
          <span className="text-sm font-medium">45 min</span>
        </div>
        <Progress 
          {...{ value: sleepProgress, className: "w-full h-2 bg-gray-200" } as ProgressProps}
        />
      </div>
      <div className="flex justify-between text-sm">
        <span>Today's Goal: 60 min</span>
        <span className="font-medium text-green-500">75% Complete</span>
      </div>
    </div>
  )
}
