
import './App.css';
import { MantineProvider } from '@mantine/core';
import RolePage from './RolePage';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RolePage/>
    </MantineProvider>
  );
}

export default App;
