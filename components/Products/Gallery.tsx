import {MutableRefObject} from 'react';
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import Image from 'next/image';


interface IProps {
    images: String[]
}


function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
  ): KeenSliderPlugin {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active")
        })
      }
      function addActive(idx: number) {
        slider.slides[idx].classList.add("active")
      }
  
      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx)
          })
        })
      }
  
      slider.on("created", () => {
        if (!mainRef.current) return
        addActive(slider.track.details.rel)
        addClickEvents()
        mainRef.current.on("animationStarted", (main:any) => {
          removeActive()
          const next = main.animator.targetIdx || 0
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }
  }


const Gallery = ({ images }: IProps) => {

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
      })
      const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
          initial: 0,
          slides: {
            perView: 4,
            spacing: 10,
          },
        },
        [ThumbnailPlugin(instanceRef)]
      )


    return (
        <>
        <div ref={sliderRef} className="keen-slider flex" style={{display:'flex'}}>
        {images.map(image=> {
                return (
                <div className="keen-slider__slide h-[25rem]" >
                    <Image alt="image" 
                     src={`http://localhost:8000/images/products/images/${image}`} className="w-full object-cover" layout='fill'/>
                </div>)
            })}
        </div>
          
        <div ref={thumbnailRef} className="keen-slider thumbnail">
        {images.map(image=> {
                return (
                    <div className="keen-slider__slide h-[6rem]" >
                    <Image alt="image" 
                     src={`http://localhost:8000/images/products/images/${image}`} className="w-full object-cover" layout='fill'/>
                </div>)
            })}
        </div>
      </>
    )
}

export default Gallery
 