import { Pig } from 'react-pig'
import imageData from '../assets/pig.json'

export default function Art() {
  return (
    <Pig
      imageData={imageData}
      getUrl={(url, pxHeight) => {
        // I don't have cloudinary premium and therefore cannot
        // access large gifs. Clamp down to h_400. Sad 😔
        if (url.includes('.gif') && pxHeight > 400){
          return url.replace('{{HEIGHT}}', 400)
        }
        return url.replace('{{HEIGHT}}', pxHeight)
      }}
    />
  )
}
