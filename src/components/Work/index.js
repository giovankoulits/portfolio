import Sidebar from '../Sidebar'
import Topbar from '../Topbar'
import { nanoid } from 'nanoid'

import Image from './Image/Image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
// Import Component & Swiper styles
import './index.scss'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const Work = () => {
  const imagesArray = [
    'boussias',
    'dei_bite',
    'egnatia_site',
    'kommerz_design',
    'omnulux',
    'restaurants',
    'iotty',
    'beard_club',
    'ruckdeschel',
    'buendnis_21',
    'phonie_berlin',
    'sonnenkita',
  ]

  return (
    <div className="App">
      <Sidebar />
      <Topbar />

      <div className="work-page">
        {imagesArray.map((image, i) => (
          <Image bg index={i} key={nanoid()} src={image} />
        ))}
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        /*   navigation={{ clickable: true }} */
      >
        {imagesArray.map((slide, i) => {
          const slidePath = require(`../../assets/sites/${slide}.png`)
          return (
            <div className="swiper-slide">
              <SwiperSlide key={nanoid()}>
                <img key={nanoid()} src={slidePath} alt={`${slide}`} />
              </SwiperSlide>
            </div>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Work
