import React from 'react'
import { imageLibrary } from '../../imageLibrary'

export default function PortfolioPictures() {
    const imagesList = imageLibrary.map(image => {
        <div>
            <img src={image.image} alt="portrait" />
            <p>{image.person}</p>
        </div>
    })

    return (
        <>
            {imagesList}
        </>
    )
}
