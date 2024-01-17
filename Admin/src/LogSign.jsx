import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import Head from "./Head";

export default function LogSign() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/annonce');
  };
  return (
    <>
    <Head></Head>
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">CarReflexe Admin page</h1>
          <p className="col-lg-10 fs-4">
            Bienvenue sur CarReflexe,ceci est la page de connexion pour les administrateur entrer vos donner de connexion pourvous connecter en tant qu'administrateur
          </p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
            <div className="text-center h2">Log in</div>
            <div className="py-3" ></div>
          <div class="form-floating mb-3 col-12" >
            <input type="email" class="form-control" style={{height: "60px"}} id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="py-3"></div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" style={{height: "60px"}} id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="py-2" ></div>
          <button class="w-100 btn btn-lg btn-success" type="button" onClick={handleLogin}>Log in</button>
        </form>
      </div>
      </div>
    </div>
    </>
  );
}
