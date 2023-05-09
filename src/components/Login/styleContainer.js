import styled from "styled-components"

const LoginContainer = styled.div`
*{
  align-items: center;
  display: flex;
  justify-content: center;
}

.container-login {
  align-items: center;
  background: rgba(217, 220, 236, 0.6);
  border-radius: 20px;
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
  display: flex;
  height: 387px;
  justify-content: space-around;
  width: 848px;
}

.container-form-h1 {
  align-items: center;
  border-radius: 20px 0px 0px 20px;
  background: #181C32;
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
  color: #E6E7E8;
  display: flex;
  flex-direction: row;
  gap: 11.22px;
  height: 387px;
  justify-content: center;
  margin-left: -65px;
  padding: 11.2174px 22.4348px;
  text-align: center;
  width: 236px;
}

.form {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form label {
  font-size: 20px;
  margin-bottom: 10px;
}

.form input {
  background: #FFFFFF;
  border: 0.75px solid #C1C2C2;
  border-radius: 8px;
  height: 48px;
  padding: 10px;
  width: 415px;
}

.form button {
  align-items: center;
  background: #181C32;
  border: none
  border-radius: 8px;
  color: #E6E7E8;
  display: flex;
  flex-direction: row;
  height: 46px;
  justify-content: center;
  outline: none;
  padding: 12px;
  width: 417px;
}

.form button:hover {
  background-color: #0988A8;
  outline: none;
}

`;

export default LoginContainer