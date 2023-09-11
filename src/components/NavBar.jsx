import { Button, Menu } from "semantic-ui-react";
import "../index.css";

export default function NavBar(props) {
  return (
    <Menu inverted fixed="top">
      <Menu.Item header>
        <img
          src="/logo512.png"
          alt="logo"
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
        Permissions
      </Menu.Item>
      <Menu.Item>
        <Button positive content="Request Permission" onClick={() => props.addForm()} />
      </Menu.Item>
    </Menu>
  );
}
