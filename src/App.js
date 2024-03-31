import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Admin from "./Components/Admin";
import { useState } from "react";

function App() {
  const [mainState, setMainState] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: mainState ? (
        <Dashboard state={setMainState} />
      ) : (
        <Login state={setMainState} />
      ),
    },

    {
      path: "register",
      element: <Register />,
    },
    {
      path: "admin",
      element: <Admin />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
