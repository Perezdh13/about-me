import Projects from './Projects';
import Skills from './Skils';
import About from './About';
import MainGreeting from './MainGreeting'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import '../css/App.css';
import LinksMainPage from './LinksMainPage';
import Contact from "./Contact";

function App() {

   const router = createBrowserRouter([
  
    {
      path:"/",
      element:<><LinksMainPage /><MainGreeting /></>
    },
    {
       path:"/About",
     element:<><LinksMainPage /><About /></>
    },
    {
     path:"/Skills",
     element:<><LinksMainPage /><Skills /></>
    },
    {
      path:"/Projects",
      element:<><LinksMainPage /><Projects /></>
    },
    {
      path:"/Contact",
      element: <><LinksMainPage /><Contact /></>
    }
  ])

  return (
    <div className="App">     
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
