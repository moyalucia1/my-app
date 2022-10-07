import React,{usaEffect, usaState} from "react";
import Gif from "./Gif";
import getGifs from "./services/getGifs";

export default function ListOfGifs ({keyword})
{
    const {keyword} = params 
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = usaState([])

    usaEffect(function () {
        setLoading(true)
        getGifs({ keyword})
        .then(gifs => 
            setGifs(gifs))
            setLoading(false)
        })
            
    }, [keyword]
 

    return <div>
    {  
        gifs.map(({id, title, url}) =>
            <Gif
             id={id}
             key={id}
             title={title}
            url={url}
    />
    )
    }
    </div>
