import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users } from 'lucide-react'

export default function RecipeOrganizer() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Spaghetti Carbonara</CardTitle>
        <CardDescription>Classic Italian pasta dish</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            30 mins
          </div>
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            4 servings
          </div>
        </div>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Spaghetti</li>
          <li>Eggs</li>
          <li>Pancetta</li>
          <li>Parmesan cheese</li>
          <li>Black pepper</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">View Full Recipe</Button>
      </CardFooter>
    </Card>
  )
}

