import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar />
        <Hero />
        <Card
            img="card.png"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
        />
    </div>
  )
}
