"use client";

import {
  ActionType,
  authenticate,
  setEmail,
  setPassword,
} from "@/store/registerState";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useState } from "react";
import styles from "./SubmitForm.module.css";

const SubmitForm = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.register.email);
  const password = useAppSelector((state) => state.register.password);
  const [actionType, setActionType] = useState<ActionType>("login");

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(authenticate({ data: { email, password }, actionType }));
      }}
      id="myForm"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.currentTarget.value))}
        placeholder="Correo"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => dispatch(setPassword(e.currentTarget.value))}
        placeholder="Contraseña"
        minLength={8}
      />
      <button
        type="submit"
        onClick={() => setActionType("login")}
        className={styles.loginButton}
      >
        Iniciar Sesión
      </button>
      <p>¿Olvidó la contraseña?</p>
      <button
        type="submit"
        onClick={() => setActionType("signup")}
        className={styles.signUpButton}
      >
        Registrarse
      </button>
    </form>
  );
};

export default SubmitForm;
