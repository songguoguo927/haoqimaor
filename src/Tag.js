import React from 'react'

const date = new Date()
function Tag(){
    return (
         <div>
             <p>{date.toDateString()}</p>
         </div>
                  
    )
}
export default Tag