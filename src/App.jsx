import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './Data'

export default function App() {
  const [count, setCount] = useState(0)

  const cards = Data.map(item => {
    return (
      <Card
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
      />
    )
    })

  return (
    <div>
        <Navbar />
        <Hero />
        <div className="cards">
          {cards}
        </div>
    </div>
  )
}
