import './App.css';
import {
  AppLayout,
  SideNavigation,
} from '@cloudscape-design/components';
import MenuBar from './components/menu-bar/menu-bar';
import Content from './components/content/content';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div id="App">
      <MenuBar />
      <AppLayout
        headerSelector="#menu-bar"
        toolsHide
        content={
      <HashRouter>
          <Content />
          </HashRouter>
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
                  href: '#/computers'
                },
                {
                  type: 'link',
                  text: 'Electronics',
                  href: '#/electronics'
                },
                {
                  type: 'link',
                  text: 'Mathematics',
                  href: '#/mathematics'
                },
              ]}
            />
          </HashRouter>
        }
      >
      </AppLayout>
    </div>
  );
}

export default App;
