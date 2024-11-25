"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

function About() {

    const [yearsOfExperience, setYearsOfExperience] = useState(0)

    useEffect(() => {
        const startYear = 2018 
        const currentYear = new Date().getFullYear()
        setYearsOfExperience(currentYear - startYear)
      }, [])
  return (
    <section id='about' className='py-20 bg-muted'>
    <div className="container mx-auto px-4">
      <h2 className='text-3xl font-bold mb-8 text-center'>About Me</h2>
      <Card>
        <CardHeader>
        <CardTitle>My Journey</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="mb-4">
              I &lsquo; m a passionate Full Stack Developer with {yearsOfExperience} years of experience in creating
              web applications. I specialize in React, Next.js, Node.js, and various other modern web technologies.
            </p>
            <p>
              My goal is to build efficient, scalable, and user-friendly applications that solve real-world problems.
              I &lsquo; m always eager to learn new technologies and improve my skills.
            </p>
          </CardContent>
      </Card>
    </div>
    </section>
  )
}

export default About
