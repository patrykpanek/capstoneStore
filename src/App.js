import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './components/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return (
    <div>
      <div>
        <h1>SHOP NOW HERE</h1>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
