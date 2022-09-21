// function Homepage() {
//   return (
//     <div>Hello World</div>
//   )
// }

// export default Homepage

//En las ultimas versiones no es nesesario colocar el import react from react cuando sacamos el comando rfce.
//-----------------------------------------------------------------
//Not Found]
// function Homepage() {
//     return (
//       <div>Hello World</div>
//     )
//   }
  
//   export default Homepage
//-----------------------------------------------------------------
//[¿Como podemos navegar?] :NavLink.
// function Homepage() {
//     return (
//       <div>Hello World</div>
//     )
//   }
  
//   export default Homepage;
//-----------------------------------------------------------------
//[lINK]
// import {Link} from 'react-router-dom'/* eS LITERALMENTE una etiqueta a */
// const userId = 10

// function Homepage() {
//   return (
//     <div>
//       <h1>Application</h1>
//       <Link to="/users">Usuarios</Link>
//       {/* <Link to={`/users/${userId}`}>Usuarios</Link> */}
//     </div>
//   )
// }

// export default Homepage;
//Es lo que es redirecciona a otra parte de la aplication.Pero no lo reinicia esto es ideal para aquellos casos en donde se nesecite un enlace y no querramos que se refresque la pagina. Esto tambien podria redirrecionar componentes.
//-----------------------------------------------------------------
//[Params]
// import {Link} from 'react-router-dom'
// const userId = 'Juan'

// function Homepage() {
//   return (
//     <div>
//       <h1>Application</h1>
//       {/* <Link to="/users">Usuarios</Link> */}
//       <Link to={`/users/${userId}`}>Usuarios</Link>
//     </div>
//   )
// }

// export default Homepage;
//-----------------------------------------------------------------
//[<Navigate/>]
// import {Link} from 'react-router-dom'
// const userId = 'Juan'

// function Homepage() {
//   return (
//     <div>
//       <h1>Application</h1>
//       {/* <Link to="/users">Usuarios</Link> */}
//       <Link to={`/users/${userId}`}>Usuarios</Link>
//     </div>
//   )
// }

// export default Homepage;
//-----------------------------------------------------------------
//useNavigate
// import {Link} from 'react-router-dom'
// const userId = 'Juan'

// function Homepage() {
//   return (
//     <div>
//       <h1>Application</h1>
//       {/* <Link to="/users">Usuarios</Link> */}
//       <Link to={`/users/${userId}`}>Usuarios</Link>
//     </div>
//   )
// }

// export default Homepage;
//-----------------------------------------------------------------
//[subComponentes]
// import {Link} from 'react-router-dom'
// const userId = 'Juan'

// function Homepage() {
//   return (
//     <div>
//       <h1>Application</h1>
//       {/* <Link to="/users">Usuarios</Link> */}
//       <Link to={`/users/${userId}`}>Usuarios</Link>
//     </div>
//   )
// }

// export default Homepage;
//-----------------------------------------------------------------
//[subRoutes]
import {Link} from 'react-router-dom'
const userId = 'Juan'

function Homepage() {
  return (
    <div>
      <h1>Application</h1>
      {/* <Link to="/users">Usuarios</Link> */}
      <Link to={`/users/${userId}`}>Usuarios</Link>
    </div>
  )
}

export default Homepage;