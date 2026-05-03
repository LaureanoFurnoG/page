import { useDotButton } from './component/useEmblaCarouselDotButton'
import { DotButton } from './EmblaCarouselDotButton'
import { usePrevNextButtons } from './component/useEmblaCarouselArrowButtons'
import { PrevButton, NextButton } from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel' 
import './css/embla.css'
import * as motion from "motion/react-client"

type service ={
    Title: string,
    Desc: string,
    Image: string,
}

type PropType = {
  slides: service[]
  options?: EmblaOptionsType
  setSelectService: (value: service) => void
}

const EmblaCarousel = (props: PropType) => {
  const { slides, options, setSelectService } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla" data-aos="fade-left">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((serv) => (
            <motion.div onClick={() => setSelectService(serv)}
            style={{backgroundImage: `URL(${serv.Image}`}}
            className="embla__slide"
            whileHover={{
                scale: [null, 1.1],
                transition: {
                    duration: 0.5,
                    times: [0, 0.6, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
            whileTap={{ scale: 0.8 }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
            >
            </motion.div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
