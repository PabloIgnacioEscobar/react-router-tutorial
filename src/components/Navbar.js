//[NavLink]
// import {NavLink} from 'react-router-dom';
// import './navbar.css'

// export default function Navbar() {
//   return (
//     <div>
//         <ul>
//             <li>
//                 <NavLink to="/" style={isActive => ({color: isActive ? "green" : "blue"})}>Home</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/about">about</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/users">users</NavLink>
//             </li>
//         </ul>
//     </div>
//   )
// }
//Este componente no estara importado dentro de pages junto a sus componentes. Sino que vamos a importar dentro del componente BrowserRouter el componente Navbar. Este componente Navbar tendra enlances.
//Hay un componente que va cambiar el estado de nuestra aplicacion sin la nesecidad de cambiar o refrescar la pagina: NavLink con el to="".
//-----------------------------------------------------------------
//[lINK]
// import {NavLink} from 'react-router-dom';
// import './navbar.css'

// export default function Navbar() {
//   return (
//     <div>
//         <ul>
//             <li>
//                 <NavLink to="/" style={isActive => ({color: isActive ? "green" : "blue"})}>Home</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/about">about</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/users">users</NavLink>
//             </li>
//         </ul>
//     </div>
//   )
// }
//-----------------------------------------------------------------
//[Params]
// import {NavLink} from 'react-router-dom';
// import './navbar.css'

// export default function Navbar() {
//   return (
//     <div>
//         <ul>
//             <li>
//                 <NavLink to="/" style={isActive => ({color: isActive ? "green" : "blue"})}>Home</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/about">about</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/users">users</NavLink>
//             </li>
//         </ul>
//     </div>
//   )
// }
//-----------------------------------------------------------------
//[<Navigate/>]
// import {NavLink} from 'react-router-dom';
// import './navbar.css'

// export default function Navbar() {
//   return (
//     <div>
//         <ul>
//             <li>
//                 <NavLink to="/" style={isActive => ({color: isActive ? "green" : "blue"})}>Home</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/about">about</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/users">users</NavLink>
//             </li>
//         </ul>
//     </div>
//   )
// }
//-----------------------------------------------------------------
//useNavigate
// import {NavLink} from 'react-router-dom';
// import './navbar.css'

// export default function Navbar() {
//   return (
//     <div>
//         <ul>
//             <li>
//                 <NavLink to="/" style={isActive => ({color: isActive ? "green" : "blue"})}>Home</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/about">about</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/users">users</NavLink>
//             </li>
//         </ul>
//     </div>
//   )
// }
//-----------------------------------------------------------------
//[subComponentes]
// import {NavLink} from 'react-router-dom';
// import './navbar.css'

// export default function Navbar() {
//   return (
//     <div>
//         <ul>
//             <li>
//                 <NavLink to="/" style={isActive => ({color: isActive ? "green" : "blue"})}>Home</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/about">about</NavLink>
//             </li>
//             <li>
//                 <NavLink to="/users">users</NavLink>
//             </li>
//         </ul>
//     </div>
//   )
// }
//-----------------------------------------------------------------
//[subRoutes]
import {NavLink} from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/" style={isActive => ({color: isActive ? "green" : "blue"})}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">about</NavLink>
            </li>
            <li>
                <NavLink to="/users">users</NavLink>
            </li>
        </ul>
    </div>
  )
}