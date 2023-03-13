import React from "react"
import Dashboard from "./layouts/Dashboard"
import Balance from "./components/Balance"
import Transactions from "./components/Transactions"
import Unavailable from "./components/Unavailable"
import Settings from "./components/Settings"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import "./styles/style.css"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Dashboard />}>
        <Route index element={<Balance />} />
        <Route path="transactions" element={<Transactions />}/>
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Unavailable />}/>
    </Route>
  ))

  return (
        <RouterProvider router={router} />
  )
}

export default App
