import { Outlet, Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import CartNav from "./components/nav-comp/cart.comp";

const App = () => {
 
  return (
    <div>
        <nav className="nav">
          <a href="/home" className="nav--logo logo">Hair by kola</a>
          <div className="nav--links links">
            <Link className="nav--link link" to="/frontal-wigs">Frontal wigs</Link>
            <Link className="nav--link link" to="/closure-wigs">Closure wigs</Link>
            <Link className="nav--link link" to="/login">login</Link>
             <p className="nav--link link" >
              <Icon icon="iconoir:user-cart" color="#2b002d" width="42" height="42" />
              <CartNav />
             </p> 
          </div>
        </nav>
        <div>
          <Outlet />
        </div>
    </div>
  );
};

export default App;
