import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function TaskManager() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="task1" />
        <label htmlFor="task1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Complete project proposal
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="task2" checked />
        <label htmlFor="task2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 line-through">
          Schedule team meeting
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="task3" />
        <label htmlFor="task3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Review client feedback
        </label>
      </div>
      <div className="flex space-x-2">
        <Input placeholder="Add a new task..." />
        <Button>Add</Button>
      </div>
    </div>
  )
}

