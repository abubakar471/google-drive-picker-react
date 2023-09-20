import Home from "./pages/home"
import Layout from "./components/layout/layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App;
