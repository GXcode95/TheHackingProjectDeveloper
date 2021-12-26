import React from 'react'

const MinInput = () => {

  const minify = (event) => {
    event.target.value = event.target.value.toLowerCase()
  }

  return (
    <input type="text" onChange={minify} />
  )
}

export default MinInput