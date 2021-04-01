import React, { FunctionComponent, useState, useEffect } from 'react';
import { useApi } from '../useApi-hooks';
import User from '../models/user';
 
const Login: FunctionComponent = () => {

  const [users, setUsers] = useState<User[]>([]);
  // Affichage du formulaire et récupération
  useEffect(() => {       
    const { setParams, loading } = useApi();
  }, []);
 
  return (
    <>
      <form 
      // A l'envoi du formulaire
        onSubmit={e => {
          e.preventDefault();
          setParamsPost({
            method: "post",
            payload: JSON.stringify({
              id,
              mail,
              password,
            }),
            namespace: "posts",
            callbackSuccess: data => {
              alert(`${mail} est bien connecté`);
            },
            callbackFail: () => {
              alert("Votre email ou votre mot de passe sont incorrect.");
            }
          });
        }}
      >
        <input
          type="mail"
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="mdp"
        />
        <button type="submit">Se connecter</button>
      </form>
      {loading && <h3> Connexion en cours </h3>}
    </>
  );
}
 
export default Login;