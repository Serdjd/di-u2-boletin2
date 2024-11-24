import { useState } from "react";

export default function ImageGallery({images}) {
    const [index,setIndex] = useState(0)
    function next() {
        setIndex(n => n < images.length - 1 ? n + 1 : 0)
    }

    function previous() {
        setIndex(n => n > 0 ? n - 1 : images.length - 1)
    }
    return(
        <div>
            <Image url={images[index].url}/>
            <br/>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    )
    
}

function Image({url}) {
    return(
        <img
        src={url}
        height={333.4}
        width={500}
        />
    )
}