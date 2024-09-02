import { MainHeader } from "../components/MainHeader";
import SideMenu from "../components/SideMenu";
import Questions from "../components/Questions";

const MainMenu = () => {
  return (
    <main className="flex flex-col gap-5">
      <MainHeader />
      <main className="grid grid-cols-3 ">
        <SideMenu />
        <Questions />
      </main>

      <div>Examen de simulacro</div>
      <footer className="flex justify-around lg:mx-20">
        <button className="btn btn-success text-white">Finalizar</button>
        {/* <button className="btn">Siguiente</button> */}
      </footer>
    </main>
  );
};

export default MainMenu;
