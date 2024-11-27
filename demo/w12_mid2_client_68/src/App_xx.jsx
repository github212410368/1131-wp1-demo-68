import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage_xx from './pages/HomePage_xx'
import BlogStaticPage_xx from './pages/BlogStaticPage_xx'
import BlogNodePage_xx from './pages/BlogNodePage_xx'
import BlogSupaPage_xx from './pages/BlogSupaPage_xx'
import BlogSupaPage2_xx from './pages/BlogSupaPage2_xx'

import { P1Page_68, P2Page_68, P3Page_68, P4Page_68 } from './pages/mid_xx'

const App_xx = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_xx />} />
        <Route path='/static_xx' element={<BlogStaticPage_xx />} />
        <Route path='/node_xx' element={<BlogNodePage_xx />} />
        {/* <Route path='/supa_xx' element={<BlogSupaPage_xx />} />
        <Route path='/supa2_xx' element={<BlogSupaPage2_xx />} /> */}
      </Routes>
      <Routes>
        <Route path='/mid_xx/p1_xx' element={<P1Page_68 />} />
        <Route path='/mid_xx/p2_xx' element={<P2Page_68 />} />
        <Route path='/mid_xx/p3_45' element={<P3Page_68 />} />
        <Route path='/mid_xx/p4_45' element={<P4Page_68 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App_xx
