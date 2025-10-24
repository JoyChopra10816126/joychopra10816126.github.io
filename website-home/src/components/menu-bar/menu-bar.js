import {
  TopNavigation,
} from '@cloudscape-design/components';

const MenuBar = () => {
  return (
    <div id="menu-bar">
      <TopNavigation
        identity={{
          href: "/",
          title: "Tech made simple",
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
