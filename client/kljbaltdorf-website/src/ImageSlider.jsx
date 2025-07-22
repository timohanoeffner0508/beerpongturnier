import { useState  } from "react";
import "./ImageSlider.css"


const images = [
     "../public/ACP.jpg",
     "../public/VSS.jpg"
]

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length -1 : prev -1));
        console.log("Backwards")
    };  

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length -1 ? 0 : prev +1 ));
        console.log("Forewards")
    };



return (
    <div className="slider">
        <button onClick={prevSlide} className="slider-button">←</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image"></img>
        <button onClick={nextSlide} className="slider-button">→</button>
    </div>
);
}

export default ImageSlider;
