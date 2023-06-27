import { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
//import Loader from 'react-loaders'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    return setTimeout(() => {
      setVisible(true)
    }, 1500)
  }, [])

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate')
    }, 1600)
  }, [])

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_udmeihe',
        'template_27td29h',
        form.current,
        'ZY_DzbaX3EXL3wg4I'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <p>Feel free to contact me for any kind of professional inquiry.</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
            Jovan Kulic,
            <br />
            Spurou Vikatou 5, 11524 <br />
            Athens, Greece <br />
            <br />
            <span>jovankoul@gmail.com</span>
          </div> */}

        <div className="map-wrap">
          <MapContainer center={[37.995786, 23.76533]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[37.995786, 23.76533]}>
              <Popup>Giovan lives here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      {/*       <Loader type="pacman" /> */}
    </>
  )
}

export default Contact
