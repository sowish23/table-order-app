import './App.css';
import Main from "./pages/Main"
import Order from "./pages/Order"
import Kitchen from "./pages/Kitchen"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/kitchen" element={<Kitchen/>} />
    </Routes>
  );
}

export default App;
