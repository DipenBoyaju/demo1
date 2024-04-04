import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./ui/RootLayout"
import Home from "./features/Home"
import About from "./features/About"
import Contact from "./features/Contact"


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App