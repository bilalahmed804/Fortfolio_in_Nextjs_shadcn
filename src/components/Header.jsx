"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'

function Header() {
    const [isDarkMode , setIsDarkMode] = useState(false)

    useEffect(()=>{
        const isDark = localStorage.getItem('darkMode') === 'true'
        setIsDarkMode(isDark)
        document.documentElement.classList.toggle('dark',isDark)

    },[])

    const toggleDarkMode = ()=>{
        const newMode = !isDarkMode;
        setIsDarkMode(newMode)
        localStorage.setItem("darkMode" , newMode.toString())
        document.documentElement.classList.toggle('dark',newMode)
    }
  return (
    <header className='sticky top-0 z-10 bg-background border-b'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#skills" className="hover:text-primary">Skills</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>

        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </Button>
        </div>
    </header>
  )
}

export default Header
