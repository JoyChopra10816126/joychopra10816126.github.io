import {
  TopNavigation,
} from '@cloudscape-design/components';

const MenuBar = () => {
  return (
    <div id="menu-bar" style={{ position: 'sticky', top: 0, zIndex: 1002 }}>
      <TopNavigation
        identity={{
          href: "/",
          title: (
            <p>Technology Made&nbsp;
              <span style={{"color": "orange"}}>S</span>imple
            </p>
          ),
          logo: {
            src: "/tms.png",
            alt: "TMS"
          }
        }}
      />
    </div>
  )
}

export default MenuBar;
