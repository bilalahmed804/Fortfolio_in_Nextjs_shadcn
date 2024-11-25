"use client"
import React, { useMemo, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
const projectsData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      technologies: ['Next.js', 'TypeScript', 'Firebase']
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'A weather forecast application that provides accurate predictions using external APIs.',
      technologies: ['React', 'Redux', 'OpenWeatherMap API']
    }
  ]
function Projects() {

    const [filter , setFilter] = useState(null)
    
    const filteredProjects = useMemo(() => {
        if (!filter) return projectsData
        return projectsData.filter(project => 
          project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()))
        )
      }, [filter])
    
  return (
    <section id='projects' className='py-20'>
    <div className='container max-auto px-4'>
    <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
    <div className="mb-8 flex justify-center space-x-4">
          <Button onClick={() => setFilter(null)} variant={filter === null ? 'default' : 'outline'}>All</Button>
          <Button onClick={() => setFilter('React')} variant={filter === 'React' ? 'default' : 'outline'}>React</Button>
          <Button onClick={() => setFilter('Node')} variant={filter === 'Node' ? 'default' : 'outline'}>React Native</Button>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.technologies.join(', ')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button>View Project</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      
    </div>
    </section>
  )
}

export default Projects
