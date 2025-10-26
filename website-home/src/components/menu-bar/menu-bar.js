import {
  TopNavigation,
} from '@cloudscape-design/components';

const MenuBar = () => {
  return (
    <div id="menu-bar">
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
