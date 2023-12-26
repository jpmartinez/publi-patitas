import { useState } from 'react'
import bgImg from './assets/bg.png'
import './App.css'
import html2canvas from 'html2canvas'

function App() {
  const [title, setTitle] = useState('Ingrese titulo')
  const [description, setDescription] = useState('Ingrese decripción')
  const [img, setImg] = useState('')
  const handleClick = () => {
    html2canvas(document.querySelector("#patitas")).then(canvas => {
      canvas.style.display = 'none'
      document.body.appendChild(canvas)
      return canvas
    })
      .then(canvas => {
        const image = canvas.toDataURL('image/png')
        const a = document.createElement('a')
        a.setAttribute('download', 'my-image.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
      })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div id='datos' style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Título</label>
          <input type="text" value={title} onChange={(v) => setTitle(v.target.value)} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Descripción</label>
          <textarea rows="4" cols="50" value={description} onChange={(v) => setDescription(v.target.value)}></textarea>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Imagen</label>
          <input type="file" accept='image/*' onChange={(v) => setImg(URL.createObjectURL(v.target.files[0]))} />
        </div>
        <button onClick={handleClick}>Descargar Imagen</button>
      </div>
      <div id='preview'>
        <h2>Vista Previa</h2>
        <div id='patitas' style={{ backgroundImage: `url(${bgImg})`, width: '430px', height: '932px', position: 'relative' }}>
          <h3 className='title'>{title}</h3>
          <div style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: '72px',
            left: '22px',
            width: '387px',
            height: '526px',
            borderRadius: '20px'
          }}>
          </div>
          <div className='description'>
            <p>{description}</p>
          </div>
        </div>
      </div>



    </div >

  )
}



export default App
