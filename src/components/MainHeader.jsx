import Timer from "./Timer";

export const MainHeader = () => {
  return (
    <header className="">
      <menu className="navbar bg-base-100 justify-around">
        <h1 className="text-xl">Examen de simulacro</h1>
        <section className="justify-between gap-10">
          <h1 className="text-xl">Tiempo</h1>
          <Timer initialTime={10800} />
          {/* <h1 className="text-xl">00:00</h1> */}
        </section>
      </menu>
    </header>
  );
};
