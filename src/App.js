import {Routes, Route} from 'react-router-dom';

import Header from "./components/header/header.component";
import Home from './route/home/home.route';
import About from './components/about/about.component';
function App() {
  return (
    <Routes >
      <Route path='/' element={<Header />}>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
