import { Route, Router, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import FrontPage from "./pages/FrontPage"
import Members from "./pages/Members"


function App() {
  return(
    <>  
        {/* <main> */}
            {/* <Login /> */}
            {/* <Register /> */}

        {/* </main> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="registration" element={<Register />} />
          <Route path="homepage" element={<FrontPage />} />
          <Route path="members" element={<Members />} />
        </Routes>
    </>
  )
}

export default App
