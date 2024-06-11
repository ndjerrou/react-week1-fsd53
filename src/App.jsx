import GuestList from './components/GuestList';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <>
      <Toaster position='top-right' />
      <GuestList />
    </>
  );
};

export default App;
