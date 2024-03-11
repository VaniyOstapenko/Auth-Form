import Header from "../../Components/Header/Header";
import style from "../HomePage/style.module.scss";

function HomePage() {
  return (
    <>
      <Header></Header>
      <div className={style.wrapper}>
        <div className={style.img}></div>
        <h1>Woohoo!</h1>
        <p>
          You have successfully logged into the system, and a token has been
          assigned to you. To log out, please click on 'Sign Out'.
        </p>
      </div>
    </>
  );
}

export default HomePage;
