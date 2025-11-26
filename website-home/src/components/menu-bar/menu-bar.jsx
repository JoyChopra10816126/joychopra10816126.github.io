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
            <p>Technology Made Clear</p>
          ),
          logo: {
            src: "/tmc.png",
            alt: "TMC"
          }
        }}
      />
    </div>
  )
}

export default MenuBar;
