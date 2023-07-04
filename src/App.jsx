import { Outlet, Link } from "react-router-dom";

const App = () => {
 
  return (
    <div>
        <nav className="nav">
          <a href="/home" className="nav--logo logo">Hair by kola</a>
          <div className="nav--links links">
            <Link className="nav--link link" to="/frontal-wigs">Frontal wigs</Link>
            <Link className="nav--link link" to="/closure-wigs">Closure wigs</Link>
            <Link className="nav--link link" to="/login">login</Link>
            <Link className="nav--link link" to="/cart">Cart</Link>
          </div>
        </nav>
        <div>
          <Outlet />
        </div>
    </div>
  );
};

export default App;
