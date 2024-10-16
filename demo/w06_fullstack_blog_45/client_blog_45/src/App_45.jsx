import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogStaticPage_45 from './pages/BlogStaticPage_45';
import BlogNodePage_45 from './pages/BlogNodePage_45';

const App_45 = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/static_45' element={<BlogStaticPage_45 />} />
                <Route path='/node_45' element={<BlogNodePage_45 />}  />
            </Routes>
        </BrowserRouter>
    );
};

export default App_45;
