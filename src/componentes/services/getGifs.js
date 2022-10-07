import { useCallback, useState } from "react"
import Boton from "../Boton"

const apiKey = 'yZRdiF988yltcZ0skL0QHH9U8MZoqQxd&q'

export default function getGifs({keyword, totalState }){
    
    const apiURL =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=${totalState}&offset=0&rating=g&lang=en`
    return fetch(apiURL)
    .then(res => res.json())
    .then(Response => {
        const {data} = Response
        if (Array.isArray(data)){
        const gifs = data.map(image => {return image.images.downsized_medium.url})
        return gifs


    }
    })    
}




