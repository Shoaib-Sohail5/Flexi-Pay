import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import { Success } from "./components/Success"

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
