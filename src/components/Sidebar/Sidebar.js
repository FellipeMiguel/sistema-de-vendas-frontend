import React from "react";
import SidebarContainer from "./style";

import SidebarData from "./SidebarData";

function Sidebar() {
  return (
    <SidebarContainer>
      <h2>PAINEL ADMINISTRATIVO</h2>
      <ul className="sidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key.id}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}>
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </SidebarContainer>
  );
}

export default Sidebar;
