import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import "../index.css";
import { useThemeProps } from '@mui/material';

export default function PermissionTableM(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Permission table">
        <TableHead>
          <TableRow>
            <TableCell align="right">NombreEmpleado</TableCell>
            <TableCell align="right">ApellidoEmpleado&nbsp;</TableCell>
            <TableCell align="right">TipoPermiso&nbsp;</TableCell>
            <TableCell align="right">FechaPermiso&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {props.permissions.map((permission) => (
            <TableRow
              key={permission.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {permission.nombreEmpleado}
              </TableCell>
              <TableCell align="right">{permission.apellidoEmpleado}</TableCell>
              <TableCell align="right">{permission.tipoPermiso}</TableCell>
              <TableCell align="right">{permission.fechaPermiso}</TableCell>
              <TableCell>
              <Button positive onClick={() => props.editForm(permission)}>
                  Edit
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}