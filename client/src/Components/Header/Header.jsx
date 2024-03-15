import Button from "@mui/material/Button";
import style from "../Header/style.module.scss";

function Header() {
  return (
    <>
      <div className={style.wrapper}>
        <Button variant="text">Sign In</Button>
        <Button variant="text">Sign Up</Button>
      </div>
    </>
  );
}

export default Header;
