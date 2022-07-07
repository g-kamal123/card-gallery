import React from 'react'
import Cards from './Cards'

function Gallery(props) {
  return (
    <div className='gallery'>
        {
            props.details.map((item) => <Cards heading = {item.heading}
            subheading = {item.subheading}
            color = {item.color}
            content = {item.content}
            />)
        }
    </div>
  )
}

export default Gallery