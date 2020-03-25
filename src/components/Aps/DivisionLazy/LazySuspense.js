import React, { useState, lazy, Suspense } from 'react'
//import Image from './components/Image'
// npm i react-spinners
import { MoonLoader} from 'react-spinners'
//Code Splitting - Importacion Dinamica
const Image = lazy(() => import('./components/Image'))

const App = () => {
  const [ show, setShow ] = useState(false)

  const toggle = () => setShow(!show)

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }

  return (
    <div style={styles}>
      <button onClick={toggle}>
        { show ? 'Ocultar' : 'Mostrar' }
      </button>
      { show && (
        <Suspense fallback={<MoonLoader color='orangered' />}>
          <Image /> 
        </Suspense>
      )}
    </div>
  )
}
export default App