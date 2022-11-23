import React from 'react'

function Card() {
  return (
    <section className='card'>
      <img className="card--img" src="./src/images/card.png" />
      <div className="review">
        <img className="card--star" src="./src/images/star.png" />
        <p className='rating'>5.0</p>
        <p className='count'>(6)</p>
      </div>
      <p>Life lessons with Katie</p>
      <p className='price'>From 136$ / person</p>
    </section>
  )
}

export default Card
