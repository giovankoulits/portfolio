import Sidebar from '../Sidebar'
import Script from './Script/Script'
import scriptsArray from './scriptsArray'
import Topbar from '../Topbar'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
// Import Component & Swiper styles
import './index.scss'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { nanoid } from 'nanoid'

const Progs = () => {
  return (
    <div className="App">
      <Sidebar />
      <Topbar />
      <div className="progs-page ">
        {scriptsArray.map((script, i) => (
          <Script
            bg
            index={i}
            key={nanoid()}
            src={script.src}
            link={script.link}
          />
        ))}
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
      >
        {scriptsArray.map((slide, i) => {
          const slidePath = require(`../../assets/scripts/${slide.src}.png`)
          return (
            <div key={nanoid()} className="swiper-slide">
              <SwiperSlide key={i + 'e'}>
                <a
                  key={nanoid()}
                  className="anchor-icon"
                  target="_blank"
                  rel="noreferrer"
                  href={slide.link}
                >
                  <img
                    key={nanoid()}
                    onClick={() => console.log('hi')}
                    src={slidePath}
                    alt={`${slide}`}
                  />
                </a>
              </SwiperSlide>
            </div>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Progs
