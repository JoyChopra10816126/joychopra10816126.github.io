import './App.css';
import {
  AppLayout,
} from '@cloudscape-design/components';
import MenuBar from './components/menu-bar/menu-bar';
import Content from './components/content/content';

function App() {
  return (
    <div id="App">
      <MenuBar/>
      <AppLayout
        headerSelector="#menu-bar"
        navigationHide
        toolsHide
        content={
          <Content/>
        }
      >
      </AppLayout>
    </div>
  );
}

export default App;
