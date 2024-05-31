import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PetIndex from './components/PetIndex';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PetIndex />
  }
])
const App = () => (
  <>
    <h1>Pet Reviews</h1>
    <h2>Which animals make the best pet?</h2>
    <RouterProvider router={router} />
  </>
);

export default App;
