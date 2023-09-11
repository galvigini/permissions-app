import { Grid } from "semantic-ui-react";
import AddPermission from "./AddPermission";
import PermissionsTable from "./PermissionTable";
import EditPermission from "./EditPermission";
import BasicTable from "./BasicTable";
import PermissionTableM from "./BasicTable";

export default function PermissionsDashboard(props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <PermissionTableM permissions={props.permissions} editForm={props.editForm}/>
      </Grid.Column>
      <Grid.Column width="6">
        {props.showAddForm && (<AddPermission closeForm={props.closeForm} handleSumbit={props.handleSumbit} />)}
        {props.showEditForm && ( <EditPermission permission={props.permission} closeForm={props.closeForm} handleEditPermission={props.handleEditPermission} />  )}
      </Grid.Column>
    </Grid>
  );
}