import Header from "../../Components/Header/Header";
import style from "../AuthPage/style.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

function AuthPage() {
  const [data, setData] = useState({});

  function changeInp(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function clickBtn() {
    const response = await axios.post("http://localhost:3000/user/auth", data, {
      withCredentials: true,
    });
    console.log(response);
  }
  return (
    <>
      <Header></Header>
      <div className={style.wrapper}>
        <h1>Sign In</h1>
        <p>
          Log in to access your account or create one. Verify your email for
          seamless access.
        </p>

        <div>
          <TextField
            onChange={changeInput}
            name="email"
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Your email"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={changeInp}
            name="password"
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Must be at least 8 characters."
            variant="outlined"
          />
        </div>
        <Button
          onClick={clickBtn}
          style={{ width: "15%", marginLeft: "auto" }}
          variant="contained"
        >
          Continue
        </Button>
        <div className={style.sign_up}>
          <p style={{ textAlign: "end" }}>Not registered yet? Sign Up</p>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
