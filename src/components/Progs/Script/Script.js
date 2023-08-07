import '../index.scss'

const Script = ({ src, link, index }) => {
  const imagePath = require(`../../../assets/scripts/${src}.png`)

  return (
    <div className="box progs-box">
      <a key={src} href={link} target="_blank" rel="noopener noreferrer">
        <img
          style={{
            animation: `bounce-in-right ${1 + index / 5}s ease`,
          }}
          src={imagePath}
        />
        <h1 className="box-h1">Hi</h1>
        <button>Hello</button>
      </a>
    </div>
  )
}

export default Script
