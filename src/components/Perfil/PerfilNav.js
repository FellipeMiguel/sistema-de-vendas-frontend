import React from "react";
import PerfilSidebar from "./PerfilNavStyle";
import PerfilNavData from "./PerfilNavData";

function PerfilNav() {
  return (
    <PerfilSidebar>
      <ul className="navPerfil">
        {PerfilNavData.map((val, key) => {
          return (
            <li
              key={key.id}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}>
              {" "}
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </PerfilSidebar>
  );
}

export default PerfilNav;
