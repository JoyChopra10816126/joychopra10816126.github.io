import './App.css';
import {
  AppLayout,
  SideNavigation,
} from '@cloudscape-design/components';
import MenuBar from './components/menu-bar/menu-bar';
import Content from './components/content/content';

function App() {
  return (
    <div id="App">
      <MenuBar/>
      <AppLayout
        headerSelector="#menu-bar"
        toolsHide
        content={
          <Content/>
        }
        navigation={
          <SideNavigation
            header={{
              href: '/',
              text: 'Topics',
            }}
            items={[
              {
                type: 'link',
                text: 'Mathematics',
                href: '/mathematics'
              },
              {
                type: 'link',
                text: 'Computers',
                href: '/computers'
              },
              {
                type: 'link',
                text: 'Electronics',
                href: '/electronics'
              }
            ]}
          />
        }
      >
      </AppLayout>
    </div>
  );
}

export default App;
