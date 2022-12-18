import React from "react"

export default function Hero() {
  return (
      <section className="hero">
          <img src="./public/images/image-grid.png" className="hero--photo" />
          <div className="hero--info">
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
            one-of-a-kind hosts—all without leaving home.</p>
          </div>
      </section>
  )
}
