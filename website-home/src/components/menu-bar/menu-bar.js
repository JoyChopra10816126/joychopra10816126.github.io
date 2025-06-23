import React from "react";
import {
  TopNavigation,
} from '@cloudscape-design/components';

const MenuBar = () => {
  return (
    <div id="menu-bar">
      <TopNavigation
        identity={{
          href: "#",
          title: "Joy K Chopra",
          logo: {
            src: "/jkc.png",
            alt: "JKC"
          }
        }}
      >

      </TopNavigation>
    </div>
  )
}

export default MenuBar;
