// import {useNavigate} from 'react-router-dom'

// export default function Dasbhoard() {

//   const navigate = useNavigate()  

//   const handleClick = () => {
//     navigate('/')/* Se puede ejecutar en cualquier lugar de nuestro codigo. */
//   }

//   return (
//     <div>
//         <h1>Dasbhoard</h1>
//         <button onClick={handleClick}>
//             Logout
//         </button>
//     </div>
//   )
// }
//-----------------------------------------------------------------
//[subComponentes]
// import {useNavigate, Route, Routes} from 'react-router-dom'

// export default function Dasbhoard() {

//   const navigate = useNavigate()  

//   const handleClick = () => {
//     navigate('/')/* Se puede ejecutar en cualquier lugar de nuestro codigo. */
//   }

//   return (
//     <div>
//         <h1>Dasbhoard</h1>
//         <button onClick={handleClick}>
//             Logout
//         </button>

//         <Routes>
//             <Route path='welcome' element={<p>Welcome!!!</p>}/>
//         </Routes>
//     </div>
//   )
// }
//Tambien podemos hacemos como un enlace?
// import {useNavigate, Route, Routes, Link} from 'react-router-dom'

// export default function Dasbhoard() {

//   const navigate = useNavigate()  

//   const handleClick = () => {
//     navigate('/')
//   }

//   return (
//     <div>
//         <h1>Dasbhoard</h1>
//         <button onClick={handleClick}>
//             Logout
//         </button>

//         <Link to='welcome'>Say Welcome</Link>

//         <Routes>
//             <Route path='welcome' element={<p>Welcome!!!</p>}/>
//         </Routes>
//     </div>
//   )
// }
//En algun momento si empezamos a dividir estas rutas de esta forma en algun momento no vamos a entender un cuerno donde estan cada ruta. Por que podriamos tener tantos subcomponentes y las rutas podrian estar dispersas  en donde nosotros no sabriamos donde estan esas ruyas. La forma maas practica es colocar en app subrutas: subRoutes.
//-----------------------------------------------------------------
//[subRoutes]
import {useNavigate, Link, Outlet} from 'react-router-dom'

export default function Dasbhoard() {

  const navigate = useNavigate()  

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div>
        <h1>Dasbhoard</h1>

        <button onClick={handleClick}>Logouy</button>

        <br/>
        <br/>

        <Link to='welcome'>Say Welcome</Link>

        <br/>

        <Link to='goodbye'>Say Goodbye</Link>

        <Outlet/>
    </div>
  )
}
//¿Como hacemos para conectar el link con la ruta que ahora esta en app?. La forma es utilizando un componente especial, que da reactroute dom: oultet.
//La etiqueta Oulet es al mismo tiempo la etiqueta <p>Welcome!!!</p>, la etiqueta oulet reemplaza los componentes hijos.