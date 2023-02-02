import { Route, Routes } from 'react-router-dom';
import Edit from '../Edit/Edit';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import AppLayout from './AppLayout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
