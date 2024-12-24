import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Dumbbell, Book } from 'lucide-react'
import TaskManager from './sample-apps/TaskManager'
import FitnessTracker from './sample-apps/FitnessTracker'
import RecipeOrganizer from './sample-apps/RecipeOrganizer'

export default function SampleApps() {
  return (
    <section id="samples" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sample Apps Created with NitchieApps</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                Task Manager
              </CardTitle>
              <CardDescription>A collaborative task tracking app for teams and individuals.</CardDescription>
            </CardHeader>
            <CardContent>
              <TaskManager />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Try Demo</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Dumbbell className="mr-2 h-6 w-6 text-blue-500" />
                Fitness Tracker
              </CardTitle>
              <CardDescription>Track workouts, set goals, and monitor progress easily.</CardDescription>
            </CardHeader>
            <CardContent>
              <FitnessTracker />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Try Demo</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="mr-2 h-6 w-6 text-red-500" />
                Recipe Organizer
              </CardTitle>
              <CardDescription>Collect, organize, and share your favorite recipes.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecipeOrganizer />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Try Demo</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

