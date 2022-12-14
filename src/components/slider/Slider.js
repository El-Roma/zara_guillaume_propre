import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import BtnSliderUpDown from "./BtnSliderUpDown";

export default function Slider({id}) {
    const [slideIndex, setSlideIndex] = useState(1)
    const [slideVerticalIndex, setSlideVerticalIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const upSlide = () => {
        if (slideVerticalIndex !== dataSlider.length) {
            setSlideVerticalIndex(slideVerticalIndex + 1)
        } else if (slideVerticalIndex === dataSlider.length) {
            setSlideVerticalIndex(1)
        }
    }

    const downSlide = () => {
        if (slideVerticalIndex !== 1) {
            setSlideVerticalIndex(slideVerticalIndex - 1)
        } else if (slideVerticalIndex === 1) {
            setSlideVerticalIndex(dataSlider.length)
        }
    }


    return (
        <div className="container-slider" id={id}>
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"} id={slideIndex}>
                        <img src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <BtnSliderUpDown moveUpDown={upSlide} direction={"up"}/>
            <BtnSliderUpDown moveUpDown={downSlide} direction={"down"}/>
        </div>
    )
}