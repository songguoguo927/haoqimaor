import React from 'react'

function MoodCard(props){
    console.log(props)
  return (
     <div>
       <h3>{props.cardItem.title}</h3>
       <p>{props.cardItem.content}</p>
       <p>{props.cardItem.tag}</p>
   </div>
 )
}

export default MoodCard