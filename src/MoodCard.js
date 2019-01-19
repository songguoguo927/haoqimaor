import React from 'react'

function MoodCard(props){
    console.log(props)
  return (
     <div>
       <h3>{props.title}</h3>
       <p>{props.content}</p>
       <p>{props.tag}</p>
   </div>
 )
}

export default MoodCard