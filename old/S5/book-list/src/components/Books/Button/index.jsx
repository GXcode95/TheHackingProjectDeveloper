import React from 'react'

const Button = ({onSort, value}) => {
const [status, setStatus] = React.useState("uncheck")

const slip = () => { 
  status === "check" ? setStatus("uncheck") : setStatus("check")
  onSort()  
}
  return (
    <button onClick={slip} className={status}>{value}</button>
  )
}

export default Button;