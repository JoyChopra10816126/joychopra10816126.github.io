import './App.css';
import {
  AppLayout,
} from '@cloudscape-design/components';
import MenuBar from './components/menu-bar/menu-bar';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <AppLayout
        headerSelector="#menu-bar"
      >
      </AppLayout>
    </div>
  );
}

export default App;
