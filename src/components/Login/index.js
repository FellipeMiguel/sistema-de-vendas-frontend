import React, { useState } from "react";
import LoginContainer from "./styleContainer.js";
import Header from "../Header/index.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <>
      <Header />
      <div className="container-body">
        <LoginContainer>
          <div className="container-login">
            <div className="container-form-h1">
              <h1>Entrada de usuário</h1>
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email de acesso"
                />
              </label>
              <label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Senha"
                />
              </label>
              <button type="submit">Entrar</button>
            </form>
          </div>
        </LoginContainer>
      </div>
    </>
  );
}

export default Login;
