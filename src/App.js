// import { BrowserRouter, Route, Routes } from "react-router-dom";

// export default function App() {
//   return (
//     <BrowserRouter>
//             <Routes>
//                 <Route  path="/" 
//                         element={<div>Hello World</div>}/>
//                 <Route  path="/about" 
//                         element={<div>about</div>}/>
//             </Routes>
//     </BrowserRouter>
//   );
// }
//Si ponemos ahora http://localhost:3000/cualquier cosa , ahora ya podemos navegar! solo que no cambia de pagina. Para cambiar de pagina usamos Route, que nos permite poder definir una ruta es decir una url, y a partir de que visite esa url yo mostrar un compontente. Route recibe dos parametros: path: que es el nombre de la ruta, el nombre de la url y element (antes se llamaba component) que es el componente que vamos a meter dentro de la url en particular.
//Algo importante: para que la ruta con sus propiedades funciones hay que llamar un componente mas en react: Routes, y dentro de esta ira Route y los componentes.
//path="/" es como decir la ruta inicial.

//[Que deberiamos hacer luego?]

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from './pages/Homepage';
// import AboutPage from './pages/AboutPage';
// import UsersPage from "./pages/UsersPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//             <Routes>
//                 <Route  path="/" element={<Homepage/>}/>
//                 <Route  path="/about" element={<AboutPage/>}/>
//                 <Route  path="/users" element={<UsersPage/>}/>
//             </Routes>
//     </BrowserRouter>
//   );
// }
//Lo que esta dentro de los objetos, los desplazamos a otro lugar, por que aqui seria un quilombo. Si escribimos primero la ruta automaticamente nos el import.
//-----------------------------------------------------------------
//Not Found] [Una ruya que diga que no se a encontrado esta ruta]
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from './pages/Homepage';
// import AboutPage from './pages/AboutPage';
// import UsersPage from "./pages/UsersPage";
// import NotFoundPage from './pages/NotFoundPage';

// export default function App() {
//   return (
//     <BrowserRouter>
//             <Routes>
//                 <Route  path="/" element={<Homepage/>}/>
//                 <Route  path="/about" element={<AboutPage/>}/>
//                 <Route  path="/users" element={<UsersPage/>}/>
//                 <Route  path="*" element={<NotFoundPage/>}/>
//             </Routes>
//     </BrowserRouter>
//   );
// }
//path="*" Es como decir el resto de rutas.
//-----------------------------------------------------------------
//[¿Como podemos navegar?] :NavLink.
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from './pages/Homepage';
// import AboutPage from './pages/AboutPage';
// import UsersPage from "./pages/UsersPage";
// import NotFoundPage from './pages/NotFoundPage';
// import Navbar from './components/Navbar';

// export default function App() {
//   return (
//     <BrowserRouter>
//             <Navbar/>
//             <Routes>
//                 <Route  path="/" element={<Homepage/>}/>
//                 <Route  path="/about" element={<AboutPage/>}/>
//                 <Route  path="/users" element={<UsersPage/>}/>
//                 <Route  path="*" element={<NotFoundPage/>}/>
//             </Routes>
//     </BrowserRouter>
//   );
// }
//Creamos una carpeta components ¿Cual es la diferencia entre components y pages? es que pages se refiere a toda una pagina mientras que components es tan solo una pequeña seccion dentro de la pagina. Ej una navegacion no abarca toda una pagina sino una seccion de ella. La navegacion siempre ira acompañanda abajo de los componentes que sea.
//-----------------------------------------------------------------
//[lINK]
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from './pages/Homepage';
// import AboutPage from './pages/AboutPage';
// import UsersPage from "./pages/UsersPage";
// import NotFoundPage from './pages/NotFoundPage';
// import Navbar from './components/Navbar';

// export default function App() {
//   return (
//     <BrowserRouter>
//             <Navbar/>
//             <Routes>
//                 <Route  path="/" element={<Homepage/>}/>
//                 <Route  path="/about" element={<AboutPage/>}/>
//                 <Route  path="/users" element={<UsersPage/>}/>
//                 <Route  path="*" element={<NotFoundPage/>}/>
//             </Routes>
//     </BrowserRouter>
//   );
// }
//Link es una etique que nos permite redireccionar a otras paginas. Desde cualquier componente en nuestra aplicacion.
//-----------------------------------------------------------------
//[Params] ¿Como podemos crear distintas paginas para distintos usuarios con distintos id. Esto se le conoce como parametro, basicamente creamos una vista(una sola pagina), y que dependiendo del dato que nos estan pasando a traves de la url nosotros mostrams los determinados datos de ese usuario. La vista es la misma,pero a partir del dato que nos pasan vemos a cual dato cambia.

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from './pages/Homepage';
// import AboutPage from './pages/AboutPage';
// import UsersPage from "./pages/UsersPage";
// import NotFoundPage from './pages/NotFoundPage';
// import Navbar from './components/Navbar';
// import UserPage from "./pages/UserPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//             <Navbar/>
//             <Routes>
//                 <Route  path="/" element={<Homepage/>}/>
//                 <Route  path="/about" element={<AboutPage/>}/>
//                 <Route  path="/users" element={<UsersPage/>}/>
//                 {/* <Route  path="/users/10" element={<UserPage/>}/> */}
//                 <Route  path="/users/:id" element={<UserPage/>}/>
//                 <Route  path="*" element={<NotFoundPage/>}/>
//             </Routes>
//     </BrowserRouter>
//   );
// }
//Como podemos hacer que no importa el numero que tipemos en /users/aqui siempre me envie a la pagina UserPage? Facil en vez de tipearle 10, le ponemos :id, que es como decr que ira cualquier cosa,cualquier string, cualquier string que haya siempre lo vas a llevar a UserPage.
//Es muy importante estas rutas o estos parametros para poder empezar a colocar un pagina personalizada a partir de esta informacion.
//-----------------------------------------------------------------
//[<Navigate/>], nos permite redirecionar a otra ruta. Nota: hace un push de la pagina principal, es decir si vamoa fleshita para atras estara la ruta principal.

// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import Homepage from './pages/Homepage';
// import AboutPage from './pages/AboutPage';
// import UsersPage from "./pages/UsersPage";
// import NotFoundPage from './pages/NotFoundPage';
// import Navbar from './components/Navbar';
// import UserPage from "./pages/UserPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//             <Navbar/>
//             <Routes>
//                 <Route  path="/" element={<Homepage/>}/>
//                 <Route  path="/about" element={<AboutPage/>}/>
//                 <Route  path="/users" element={<UsersPage/>}/>
//                 <Route  path="/usuarios" element={<Navigate to='/users'/>}/>
//                 {/* <Route  path="/users/10" element={<UserPag
//                 e/>}/>*/}
//                 <Route  path="/users/:id" element={<UserPage/>}/>
//                 <Route  path="*" element={<NotFoundPage/>}/>
//             </Routes>
//     </BrowserRouter>
//   );
// }
//-----------------------------------------------------------------
//[useNavigate] Tambien podemos usar el navigate a traves de un hook, no nesesariamente a travez de un componente.

// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import Homepage from './pages/Homepage';
// import AboutPage from './pages/AboutPage';
// import UsersPage from "./pages/UsersPage";
// import NotFoundPage from './pages/NotFoundPage';
// import Navbar from './components/Navbar';
// import UserPage from "./pages/UserPage";
// import Dasbhoard from "./pages/Dasbhoard";

// export default function App() {
//   return (
//     <BrowserRouter>
//             <Navbar/>
//             <Routes>
//                 <Route  path="/" element={<Homepage/>}/>
//                 <Route  path="/about" element={<AboutPage/>}/>
//                 <Route  path="/users" element={<UsersPage/>}/>
//                 <Route  path="/usuarios" element={<Navigate to='/users'/>}/>
//                 {/* <Route  path="/users/10" element={<UserPag
//                 e/>}/>*/}
//                 <Route  path="/users/:id" element={<UserPage/>}/>
//                 <Route  path="/dasbhoard" element={<Dasbhoard/>}/>
//                 <Route  path="*" element={<NotFoundPage/>}/>
//             </Routes>
//     </BrowserRouter>
//   );
// }
//-----------------------------------------------------------------
//[subComponentes]¿Como colocar un componente dentro de otro?

// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import Homepage from './pages/Homepage';
// import AboutPage from './pages/AboutPage';
// import UsersPage from "./pages/UsersPage";
// import NotFoundPage from './pages/NotFoundPage';
// import Navbar from './components/Navbar';
// import UserPage from "./pages/UserPage";
// import Dasbhoard from "./pages/Dasbhoard";

// export default function App() {
//   return (
//     <BrowserRouter>
//             <Navbar/>
//             <Routes>
//                 <Route  path="/" element={<Homepage/>}/>
//                 <Route  path="/about" element={<AboutPage/>}/>
//                 <Route  path="/users" element={<UsersPage/>}/>
//                 <Route  path="/usuarios" element={<Navigate to='/users'/>}/>
//                 {/* <Route  path="/users/10" element={<UserPag
//                 e/>}/>*/}
//                 <Route  path="/users/:id" element={<UserPage/>}/>
//                 <Route  path="/dasbhoard/*" element={<Dasbhoard/>}/>
//                 <Route  path="*" element={<NotFoundPage/>}/>
//             </Routes>
//     </BrowserRouter>
//   );
// }
//Es muy importante crear una ruta dentro de otra. Lo que tenemos que hacer es ir al componenten en donde queremos crear la sub ruta.Ej: Dasbhoard.
//-----------------------------------------------------------------
//[subRoutes]
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import UsersPage from "./pages/UsersPage";
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import UserPage from "./pages/UserPage";
import Dasbhoard from "./pages/Dasbhoard";

export default function App() {
  return (
    <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route  path="/" element={<Homepage/>}/>
                <Route  path="/about" element={<AboutPage/>}/>
                <Route  path="/users" element={<UsersPage/>}/>
                <Route  path="/usuarios" element={<Navigate to='/users'/>}/>
                {/* <Route  path="/users/10" element={<UserPag
                e/>}/>*/}
                <Route  path="/users/:id" element={<UserPage/>}/>

              <Route  path="/dasbhoard/*" element={<Dasbhoard/>}>
                <Route path='welcome' element={<p>Welcome!!!</p>}/>
                <Route path='goodbye' element={<p>Goodbye!!!</p>}/>
              </Route>

                <Route  path="*" element={<NotFoundPage/>}/>
            </Routes>
    </BrowserRouter>
  );
} 
//Aca le vamos a decir al dasbhoard que este compentes va tener componentes hijos. Entonces lo que hacemos es que vamos crearle una etiqueta con cierre y dentro las rutas.
//Ahora que tenemos el welcome aqui no le estamos diciendo al element donde lo tiene que pintar.
//IMPORTANTE! La conexion de Outlet al <p>Welcome!!!</p> se debe gracias a que Link to llama a welcome de aqui y esa conexion ante mostrar el elemento welcome lo permite el outlet.