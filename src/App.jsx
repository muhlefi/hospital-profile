import { RouterProvider } from "react-router-dom"
import { router } from "./routes/PageRouter"


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
