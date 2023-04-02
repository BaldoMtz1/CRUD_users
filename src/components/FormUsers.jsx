import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  email: "",
  birthday: "",
  first_name: "",
  last_name: "",
  password: "",
};

const FormUsers = ({ createUser, stateUpdateUser, updateUser , isShowForm, handleChangeModal}) => {
  const { handleSubmit, register, reset } = useForm();

  console.log(stateUpdateUser);

  const submitForm = (data) => {
    if (stateUpdateUser) {
      updateUser(stateUpdateUser.id, data);
    } else {
      console.log(data);
      createUser(data);
    }

    reset(defaultValues);
  };

  useEffect(() => {
    if (stateUpdateUser) {
      reset(stateUpdateUser);
    }
  }, [stateUpdateUser]);

  return (
    <div className={`form-container ${isShowForm ? "disable-form" : ""   } `}>
      <form className="form" onSubmit={handleSubmit(submitForm)}>
      <i onClick={handleChangeModal} className='form-x bx bx-x'></i>
        <h2 className="form-title">{stateUpdateUser ? "Edit User" : "New User"}</h2>
        
        <div className="form-div">
          <label htmlFor="">Email</label>
          <input className="form-input" type="email" {...register("email")} />
        </div>
        <div className="form-div">
          <label htmlFor="">Password</label>
          <input className="form-input" type="password" {...register("password")} />
        </div>
        <div className="form-div">
          <label htmlFor="">First name</label>
          <input className="form-input" type="text" {...register("first_name")} />
        </div>
        <div className="form-div">
          <label htmlFor="">Last name</label>
          <input className="form-input" type="text" {...register("last_name")} />
        </div>
        <div className="form-div">
          <label htmlFor="">Birthday</label>
          <input className="form-input" type="date" {...register("birthday")} />
        </div>

        <button onClick={handleChangeModal}>{stateUpdateUser ? "Edit User" : "Create User"}</button>
      </form>
    </div>
  );
};

export default FormUsers;
