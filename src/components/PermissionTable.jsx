import { Fragment } from "react";
import { Table, Button } from "semantic-ui-react";
import "../index.css";

export default function PermissionTable(props) {
  return (
    <Fragment>
      <h1 style={{ marginLeft: "30px" }}>Permissions Table</h1>
      <Table
        celled
        style={{
          marginLeft: "30px",
          marginTop: "30px",
          width: "1100px",
          border: "1px solid black",
        }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>NombreEmpleado</Table.HeaderCell>
            <Table.HeaderCell>ApellidoEmpleado</Table.HeaderCell>
            <Table.HeaderCell>TipoPermiso</Table.HeaderCell>
            <Table.HeaderCell>FechaPermiso</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.permissions.map((permission) => (
            <Table.Row key={permission.id}>
              <Table.Cell>{permission.nombreEmpleado}</Table.Cell>
              <Table.Cell>{permission.apellidoEmpleado}</Table.Cell>
              <Table.Cell>{permission.tipoPermiso}</Table.Cell>
              <Table.Cell>{permission.fechaPermiso}</Table.Cell>
              <Table.Cell>
              <Button positive onClick={() => props.editForm(permission)}>
                  Edit
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Fragment>
  );
}
