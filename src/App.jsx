import { Outlet } from "react-router-dom";

const App = () => {
 
  return (
    <div>
        <nav></nav>
        <div>
          <Outlet />
        </div>
    </div>
  );
};

export default App;
