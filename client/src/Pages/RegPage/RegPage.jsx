import Header from "../../Components/Header/Header";
import style from "../RegPage/style.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

function RegPage() {
  const [data, setData] = useState({});
  function changeState(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function clickButton() {
    const response = await axios.post("http://localhost:3000/user/", data);
    console.log(response);
  }

  return (
    <>
      <Header></Header>
      <div className={style.wrapper}>
        <h1>Welcome, let's create an account</h1>
        <p>
          Create an account to keep track of your customers, and contributors.
          Once your account has been created then don’t forget to verify your
          account through mail.
        </p>

        <div className={style.name}>
          <TextField
            onChange={changeState}
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Your name"
            variant="outlined"
            name="name"
          />
          <TextField
            onChange={changeState}
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Your surname"
            variant="outlined"
            name="surname"
          />
        </div>
        <div>
          <TextField
            onChange={changeState}
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Your email"
            variant="outlined"
            name="email"
          />
        </div>
        <div>
          <TextField
            onChange={changeState}
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Must be at least 8 characters."
            variant="outlined"
            name="password"
          />
        </div>
        <Button
          onClick={clickButton}
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

export default RegPage;
