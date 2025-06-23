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
        utilities={[
          {
            type: "button",
            iconUrl: "/linkedin-icon.svg",
            target: "_blank",
            href: "https://www.linkedin.com/in/joy-c-b25896276/",
          },
          {
            type: "button",
            iconUrl: "/instagram-icon.svg",
            target: "_blank",
            href: "https://www.instagram.com/jkchopra126/",
          },
        ]}
      >

      </TopNavigation>
    </div>
  )
}

export default MenuBar;
