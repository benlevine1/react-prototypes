import React from 'react'
import './scrapbook.css'
import ImageData from './image_data'
import ScrapbookImage from './scrapbook_images'
export default ()=>{
const Images = ImageData.map((item, index)=>{return <ScrapbookImage key = {index} about = {item}/>})
console.log('Images', Images)
    return(
        <div className="scrapbook-container">
            {Images}
        </div>
    )
}   