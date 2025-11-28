import './App.css';
import {
  AppLayout,
  SideNavigation,
} from '@cloudscape-design/components';
import MenuBar from './components/menu-bar/menu-bar';
import Content from './components/content/content';
import { BrowserRouter, HashRouter } from 'react-router-dom';
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
          content={
            <BrowserRouter basename={"/"}>
              <GooglePageView/>
              <Content />
            </BrowserRouter>
          }
          navigation={
            <HashRouter>
              <SideNavigation
                header={{
                  href: '/',
                  text: 'Topics',
                }}
                items={[
                  {
                    type: 'link',
                    text: 'Computers',
                    href: '/computers'
                  },
                  {
                    type: 'link',
                    text: 'Electronics',
                    href: '/electronics'
                  },
                  {
                    type: 'link',
                    text: 'Mathematics',
                    href: '/mathematics'
                  },
                ]}
              />
            </HashRouter>
          }
        >
        </AppLayout>
      </ModeProvider>
    </div>
  );
}

export default App;
