import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import FormUsers from "./components/FormUsers";
import UserCard from "./components/UserCard";
import { useForm } from "react-hook-form";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [users, setUsers] = useState();
  const [stateUpdateUser, setStateUpdateUser] = useState();
  const [isShowForm, setIsShowForm] = useState(false)

  // const {reset} = useForm()

  //Funcion que obtiene todos los usuarios
  const getAllUsersF = () => {
    const URL = `${BASE_URL}users/`;
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  console.log(users);

  

  //Funcion que crea un usuario
  const createUser = (data) => {
    const URL = `${BASE_URL}users/`;
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsersF();
      })
      .catch((err) => console.log(err));
  };

  //Funcion para Eliminar un usuario
  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAllUsersF();
      })
      .catch((err) => console.log(err));
  };

  // Funcion para actualizar info usuario

  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`;
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsersF();
        setStateUpdateUser();
      })
      .catch((err) => console.log(err));
  };

  // const defaultValues = {
  //   email: "",
  //   birthday: "",
  //   first_name: "",
  //   last_name: "",
  //   password: "",
  // };

  //   const clearForm = () => {
  //     if(setStateUpdateUser){
  //       reset(setStateUpdateUser)
  //       }
      
        
  //     }
      
      
    // Funcion que cambia el estado para mostrar el modal o no.
  
  const handleChangeModal = () => {
    setIsShowForm(!isShowForm)
    clearForm()
    
  }

  //Se obtienen todos los usuarios una vez al cargar la app
  useEffect(() => {
    getAllUsersF();
  }, []);

  console.log(stateUpdateUser);

  return (
    <div className="App">

      <h1>CRUD USERS</h1>

      <button onClick={handleChangeModal} className="btn-new_user"><i className='bx bx-plus'></i> Create new User</button>

      <FormUsers
        createUser={createUser}
        stateUpdateUser={stateUpdateUser}
        updateUser={updateUser}
        isShowForm={isShowForm}
        handleChangeModal={handleChangeModal}
      />

      <div className="users-card_conteiner">
        {
        users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setStateUpdateUser={setStateUpdateUser}
            handleChangeModal={handleChangeModal}
          />
        ))
        }
      </div>
    </div>
  );
}

export default App;
