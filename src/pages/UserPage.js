// import {useParams} from 'react-router-dom';

// export default function UserPage() {

//   const {id} = useParams();
  
//   /* Sejecuta la funcion, nos devuelve un objeto, lo muestro por consola- */

//   return (
//     <div>
//         User<h1>{id}</h1>
//      </div>
//   )
// }
//De esta forma podriamos enviar una peticion fetch el id o el usario con este id quiere sus datos. Obtendriamos los datos y lo pintariamos en el componente:   User<h1>{id}</h1>. Es asi como funcionan muchas aplicaciones.
//-----------------------------------------------------------------
//[<Navigate/>]
// import {useParams} from 'react-router-dom';

// export default function UserPage() {

//   const {id} = useParams();
  
//   /* Sejecuta la funcion, nos devuelve un objeto, lo muestro por consola- */

//   return (
//     <div>
//         User<h1>{id}</h1>
//      </div>
//   )
// }
//-----------------------------------------------------------------
//useNavigate
// import {useParams} from 'react-router-dom';

// export default function UserPage() {

//   const {id} = useParams();
  
//   /* Sejecuta la funcion, nos devuelve un objeto, lo muestro por consola- */

//   return (
//     <div>
//         User<h1>{id}</h1>
//      </div>
//   )
// }
//-----------------------------------------------------------------
//[subComponentes]
// import {useParams} from 'react-router-dom';

// export default function UserPage() {

//   const {id} = useParams();
  
//   /* Sejecuta la funcion, nos devuelve un objeto, lo muestro por consola- */

//   return (
//     <div>
//         User<h1>{id}</h1>
//      </div>
//   )
// }
//-----------------------------------------------------------------
//[subRoutes]
import {useParams} from 'react-router-dom';

export default function UserPage() {

  const {id} = useParams();
  
  /* Sejecuta la funcion, nos devuelve un objeto, lo muestro por consola- */

  return (
    <div>
        User<h1>{id}</h1>
     </div>
  )
}