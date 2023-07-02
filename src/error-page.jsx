import {useRouteError} from "react-router-dom"

export default function ErrorPage() {
 const error = useRouteError()
 console.error(error)

 return (
  <div id="error-page">
   <h1 className="head-comment dark">Oops!</h1>
   <p className="p-mid dark">Sorry, an unexpected error has occurred.</p>
   <p className="p-mid dark">
    <i>{error.statusText || error.message}</i>
   </p>
  </div>
 )
}
