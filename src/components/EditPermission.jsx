import { Button, Form, Segment } from "semantic-ui-react";
import React, { useState } from "react";

export default function EditPermission(props) {
  const [permission, setPermission] = useState(props.permission);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleEditPermission(permission);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setPermission({ ...permission, [name]: value });
  }

  return (
    <>
      <h1 style={{ marginLeft: "15px" }}>Modified Permission</h1>
      <Segment
        clearing
        style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }}
      >
        <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
            placeholder="Nombre"
            value={permission.nombreEmpleado}
            name="nombreEmpleado"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="Apellido"
            value={permission.apellidoEmpleado}
            name="apellidoEmpleado"
            onChange={handleInputChange}
          />

          <Form.Input
            placeholder="Tipo"
            value={permission.tipoPermiso}
            name="tipoPermiso"
            onChange={handleInputChange}
          />
          <Button floated="right" positive type="submit" content="Submit" />
          <Button
            floated="right"
            type="button"
            content="Cancel"
            onClick={() => props.closeForm()}
          />
        </Form>
      </Segment>
    </>
  );
}