import React from 'react'

function Card2({data}) {
  return (
    <div>
      <h1>
        Hello 
        {data.map((data)=>(
          <p>{data.name}{data.age}</p>
        ))}
      </h1>
    </div>
  )
}

function Card3 (language){
  return (
    <div>
      <li>{language.map((abc) => <><span>{abc}</span><br /></>)}</li>
    </div>
  )
}

export { Card2, Card3 }










