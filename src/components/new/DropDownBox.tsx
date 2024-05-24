import React from "react";
import Dropdown from "rc-dropdown";


const DropDownBox = () => {

    const menu = (
        <div style={{ padding: '10px', background: '#fff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li><a href="#">Option 1</a></li>
          <li><a href="#">Option 2</a></li>
          <li><a href="#">Option 3</a></li>
        </ul>
      </div>
    );
    return (
        <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
            <button style={{ padding: '10px', cursor: 'pointer' }}>Open Dropdown</button>
        </Dropdown>
    )
}

export default DropDownBox;
