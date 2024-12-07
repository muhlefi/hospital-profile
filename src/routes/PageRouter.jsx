import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "../pages/Home/Home"
import Facility from "../pages/Facility/Facility"
import HomeLayout from "../layout/HomeLayout"

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/facility" element={<Facility />} />
      </Route>  
    )
)