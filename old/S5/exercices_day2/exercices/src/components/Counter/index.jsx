import React from 'react'
import BigNumber from 'components/BigNumber'

const Counter = () => {

  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount( count + 1);
  }
  // useEffect is a prbuild React fonction.
  //$ useEffect launched just after the mounting AND updating phase of our component
  
  React.useEffect(
    //$ first param : function to execute
    () => {
      document.title = `Vous avez cliqué ${count} fois`;
      // the return inside the first param is called on the unmounting phase
      // here the console.log will be displayed only when we clean our component
      return () => {
        console.log("unmounting component !")
      }
    },
    
    //$ second param : "dependancies" to look at
    [count]
    // if the 2nd param is empty, the useEffect function will be called only once on the mounting phase
    // if we only give the 2st param, the useEffec function will be called in every render
    // quite deprecated method, still can be usefull, but need to be carefull
  

  );


  return ( 
    <div>
      <button className="Counter" onClick={increment}>+</button>
      <BigNumber data={count} />
    </div>
  )

}

export default Counter