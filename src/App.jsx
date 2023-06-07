import { Route, Router, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import FrontPage from "./pages/FrontPage"
import Members from "./pages/Members"


function App() {

  // const widthConnect = 

  return(
    <>  


        {/* <main> */}
            {/* <Login /> */}
            {/* <Register /> */}

        {/* </main> */}
        <main style={{ margin:"0 auto"}}>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="registration" element={<Register />} />
              <Route path="homepage" element={<FrontPage />} />
              <Route path="members" element={<Members />} /> 
          </Routes>
        </main>
    </>
  )
}

export default App
