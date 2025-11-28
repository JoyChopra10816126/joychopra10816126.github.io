import './App.css';
import {
  AppLayout,
} from '@cloudscape-design/components';
import MenuBar from './components/menu-bar/menu-bar';
import Content from './components/content/content';
import { BrowserRouter } from 'react-router-dom';
import { ModeProvider } from './components/mode-selector/mode-context';
import GooglePageView from './components/analytics/page-view';


function App() {
  return (
    <div id="App">
      <MenuBar />
      <ModeProvider>
        <AppLayout
          headerSelector="#menu-bar"
          toolsHide
          navigationHide
          content={
            <BrowserRouter basename={"/"}>
              <GooglePageView/>
              <Content />
            </BrowserRouter>
          }
        >
        </AppLayout>
      </ModeProvider>
    </div>
  );
}

export default App;
