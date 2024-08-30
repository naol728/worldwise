import styles from "./Login.module.css";
import PageNav from '../components/PageNav'
import { useEffect, useState } from "react";
import style from '../components/PageNav.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import Button from "../components/Button";
export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const {login,isAuthenticated}=useAuth()
   const navigate=useNavigate()
   function handlelogin(e){
  e.preventDefault();
    if(email && password) login(email,password);
   }
   useEffect(
    function(){
      if(isAuthenticated===true) navigate("/app")
    },[isAuthenticated,navigate]
  )

  
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handlelogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">log in</Button>
        </div>
      </form>
    </main>
  );
}
