import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Analytics from '../containers/Analytics/Analytics';
import Content from '../containers/Content';
import Home from '../containers/Content';
import Customization from '../containers/Customization';
import Dashboard from '../containers/Dashboard';
import Viewdataset from '../containers/Viewdataset';
import Upload from '../containers/publisher/Upload';
import Mydata from '../containers/Mydata';

const AppRoutes = () => {
    return <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/content' element={<Content />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/customization' element={<Customization />} />
        <Route path='/publisher/upload' element={<Upload />} />
        <Route path='/publisher/mydata' element={<Mydata />} />
    </Routes>
};

export default AppRoutes;