import { MainHeader } from "../components/MainHeader";
import SideMenu from "../components/SideMenu";
import Questions from "../components/Questions"

const MainMenu = () => {
  return (
    <main className="flex flex-col gap-5">
      <MainHeader />
      <main className="grid grid-cols-3 ">
        <SideMenu />
        <Questions />
      </main>
      <footer className="flex justify-around">
        <button className="btn">Regresar</button>
        <button className="btn btn-success text-white">Finalizar</button>
        <button className="btn">Siguiente</button>
      </footer>
    </main>
  );
};

export default MainMenu;
