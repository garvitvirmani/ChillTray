import React from "react";
import SidebarRow from "./SidebarRow";


function Entry({tit,para,src}) {
  return (
    <div className="term">
      <table>
        <tr>
        <td>
          <h6>Hot Scoops</h6>
          <h1>{tit}</h1>
          <p>{para}</p>     
        </td>
        <td><img src={src}></img></td>
        </tr>
        <tr>
          <my>
            <SidebarRow title="❤ Like"></SidebarRow>
            <SidebarRow title="∞ Share"></SidebarRow>
            <SidebarRow title="✔ Read Later"></SidebarRow>
          </my>
        </tr>
        </table>
    </div>
  );
}

export default Entry;