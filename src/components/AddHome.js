import React from 'react'
import Card from './Card'

const AddHome = ({ robots }) => {
  const title = robots.length ? 'Select a robot' : 'No more options left'
  return (
    <div>
      <h1>{title}</h1>
      <div style={{ marginRight: '10rem', marginLeft: '10rem' }}>
        {robots.map((user, i) => {
          return <Card key={i} {...{ user }} />
        })}
      </div>
    </div>
  )
}

export default AddHome
