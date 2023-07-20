"use client";

import { alertState, setEmail, setPassword } from "@/store/registerState";
import { useAppDispatch, useAppSelector } from "@/store/store";
import styles from "./SubmitForm.module.css";

const SubmitForm = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.register.email);
  const password = useAppSelector((state) => state.register.password);

  return (
    <form className={styles.form}>
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
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(alertState());
        }}
        className={styles.loginButton}
      >
        Iniciar Sesión
      </button>
      <p>¿Olvidó la contraseña?</p>
      <button
        className={styles.signUpButton}
        onClick={(e) => e.preventDefault()}
      >
        Registrarse
      </button>
    </form>
  );
};

export default SubmitForm;
