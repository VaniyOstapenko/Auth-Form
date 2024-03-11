import Header from "../../Components/Header/Header";
import style from "../RegPage/style.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function RegPage() {
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
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Your name"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Your surname"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Your email"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Must be at least 8 characters."
            variant="outlined"
          />
        </div>
        <Button
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
