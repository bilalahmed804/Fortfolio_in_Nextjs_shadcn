'use client'

import { useRef, useEffect } from 'react'
import { Progress } from '@/components/ui/progress'



const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'GraphQL', level: 70 },
  { name: 'Python', level: 65 }
]

export default function Skills() {
  const skillRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('[role="progressbar"]')
            if (progressBar) {
              const level = parseInt(progressBar.getAttribute('data-level') || '0', 10)
              progressBar.style.setProperty('--value', level.toString())
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid gap-6 max-w-md mx-auto">
          {skills.map((skill, index) => (
            <div key={skill.name} ref={(el) => (skillRefs.current[index] = el)}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={0} max={100} data-level={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}