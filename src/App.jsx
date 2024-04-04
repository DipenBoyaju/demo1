import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./ui/RootLayout"
import Home from "./features/Home"
import About from "./features/About"
import Contact from "./features/Contact"
import CountView from "./features/counter/CountView"
import DailyForm from "./features/DailyBlogs/DailyForm"


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'counter', element: <CountView /> },
        { path: 'dailyform', element: <DailyForm /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App