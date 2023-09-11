import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import PermissionDashboard from "./components/PermissionDashboard";
import { toast, ToastContainer } from "react-toastify";
function App() {
  const [permissions, setPermissions] = useState([]);
  const [permission, setPermission] = useState();
  const [showAddForm, setshowAddForm] = useState(false);
  const [showEditForm, setshowEditForm] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5223/api/permissions").then((response) => {
      setPermissions(response.data);
    });
  }, [permissions]);

  function handleEditPermission(permission) {
    axios({
      method: "put",
      url: `http://localhost:5223/api/permissions/${permission.id}`,
      data: {
        Id: permission.id,
        nombreEmpleado: permission.nombreEmpleado,
        apellidoEmpleado: permission.apellidoEmpleado,
        tipoPermiso: permission.tipoPermiso,
        fechaPermiso: new Date(),
      },
      config: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("Permission updated successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.log("the error has occured: " + error);
      });

    setPermissions([...permissions, permission]);
  }

  function handleSumbit(permission) {
    axios({
      method: "post",
      url: `http://localhost:5223/api/permissions`,
      data: {
        Id: permission.id,
        nombreEmpleado: permission.nombreEmpleado,
        apellidoEmpleado: permission.apellidoEmpleado,
        tipoPermiso: permission.tipoPermiso,
        fechaPermiso: new Date(),
      },
      config: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("Permission added successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.log("the error has occured: " + error);
      });

    setPermissions([...permissions, permission]);
  }

  function addForm() {
    setshowEditForm(false);
    setshowAddForm(true);
  }

  function closeForm() {
    setshowAddForm(false);
    setshowEditForm(false);
    setPermission("");
  }

  function editForm(permission) {
    setPermission("");
    setshowAddForm(false);
    setshowEditForm(true);
    setPermission(permission);
  }

  function deletePermission(id) {
    setshowEditForm(false);
    setPermission("");
    axios.delete(`http://localhost:5223/api/permission/${id}`).then(() => {
      toast.success("Permission deleted successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });

    setPermissions([...permission.filter((x) => x.id !== id)]);
  }

  return (
    <div>
      <NavBar addForm={addForm} />
      <h1>Permission Data</h1>
      <PermissionDashboard
        permissions={permissions}
        showAddForm={showAddForm}
        showEditForm={showEditForm}
        editForm={editForm}
        permission={permission}
        deletePermission={deletePermission}
        closeForm={closeForm}
        handleSumbit={handleSumbit}
        handleEditPermission={handleEditPermission}
      />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;