import React from 'react'
import Counter from 'components/Counter'

const Colors = () => {
  const [color, setColor] = React.useState("red")
  const colorList = ["blue", "red", "green", "pink"]
  
  const changeColor = (target) => {
    setColor(target.classList[0])
  }

  return (
    <div className="colors">
      {colorList.map((color) => (
        <div>
          <div className={color} onClick={(e) => changeColor(e.target)}></div>
          <Counter />
        </div>
      ))}
      <p> The last color is {color}</p>

    </div>
  )

}

export default Colors