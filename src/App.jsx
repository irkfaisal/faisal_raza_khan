import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import MoreProjects from './Pages/MoreProjects'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<MoreProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
