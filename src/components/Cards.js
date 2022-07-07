import React from 'react'

function Cards(props) {
  return (
    <div className='card' style={{backgroundColor:props.color}}>
        <div className='header'>
            <span>{props.heading}</span>
        </div>
        <hr />
        <div>
            <span className='subtitle'>{props.subheading}</span>
            <p>
            {props.content}
            </p>
        </div>
    </div>
  )
}

export default Cards