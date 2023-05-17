import { RouterProvider } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { routes } from './Routes/Routes';

function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
