import { Button, Form, Segment } from "semantic-ui-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AddPermission(props) {
  
  const initialState = {
    nombreEmpleado: null,
    apellidoEmpleado: null,
    tipoPermiso: null
  };

  const [permission, setpermission] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (!permission.nombreEmpleado) {
      toast.error("Please fill all the details !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    props.handleSumbit(permission);
    setpermission(initialState);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setpermission({ ...permission, [name]: value });
  }

  return (
    <>
      <h1 style={{ marginLeft: "15px" }}>Request Permission</h1>
      <Segment clearing style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }} >
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Input placeholder="Nombre" value={permission.nombreEmpleado} name="nombreEmpleado" onChange={handleInputChange} />
          <Form.Input placeholder="Apellido" value={permission.apellidoEmpleado} name="apellidoEmpleado" onChange={handleInputChange}/>
          <Form.Input placeholder="TipoPermiso" value={permission.tipoPermiso} name="tipoPermiso" onChange={handleInputChange} />
          <Button floated="right" positive type="submit" content="Submit" />
          <Button floated="right" type="button" content="Cancel" onClick={() => props.closeForm()}
          />
        </Form>
      </Segment>
    </>
  );
}
