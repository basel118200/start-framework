import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";

// Standard HashRouter configuration
const routers = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
