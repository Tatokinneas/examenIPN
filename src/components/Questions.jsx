const listQuestionsEsp = [
  {
    materia:"Español",
    id: 1,
    pregunta: "¿Quien es miguel hidalgo?",
    respuesta1: "El padre de la patria",
    respuesta2: "El chiquito pelon dsadsa",
    respuesta3: "El chiquito pelon a",
    respuesta4: "El chiquito pelon fdafsdfadsfasds",
    respuestaCorrecta: "2",
  },
  {
    materia:"Español",
    id: 2,
    pregunta: "¿Quien es miguel hidalgo aver dinme?",
    respuesta1: "El padre de la patria 2",
    respuesta2: "El chiquito pelon 3",
    respuesta3: "El chiquito pelon 4",
    respuesta4: "El chiquito pelon 5",
    respuestaCorrecta: "3",
  },
  {
    materia:"Español",
    id: 3,
    pregunta: "¿Quien es miguel hidalgo aver dinme?",
    respuesta1: "El padre de la patria 2",
    respuesta2: "El chiquito pelon 3",
    respuesta3: "El chiquito pelon 4",
    respuesta4: "El chiquito pelon 5",
    respuestaCorrecta: "3",
  },
  {
    materia:"Español",
    id: 4,
    pregunta: "¿Quien es miguel hidalgo aver dinme?",
    respuesta1: "El padre de la patria 2",
    respuesta2: "El chiquito pelon 3",
    respuesta3: "El chiquito pelon 4",
    respuesta4: "El chiquito pelon 5",
    respuestaCorrecta: "3",
  },
];

const Questions = () => {
  const uniqueMaterias = [...new Set(listQuestionsEsp.map(question => question.materia))];
  return (
    <section className=" col-span-3 md:col-span-2 lg:max-h-[600px] overflow-y-auto p-4rounded-lg shadow-m ">
      <p className="my-3">Preguntas de {uniqueMaterias}</p>
      {listQuestionsEsp.map((e) => {
        return (
          <section
            className="gap-2 flex flex-col  justify-start my-5"
            key={e.id}
          >
            <h1 className="border border-red-300 mx-4 py-4">
              {e.id}. {e.pregunta}
            </h1>
            <section className="flex mx-3 p-2 gap-5 border border-gray-400">
              <input type="radio" id={`${e.id}-1`} name={`question-${e.id}`} />
              <label htmlFor={`${e.id}-1`}> a. {e.respuesta1}</label>
            </section>
            <section className="flex mx-3 p-2 gap-5 border border-gray-400">
              <input type="radio" id={`${e.id}-2`} name={`question-${e.id}`} />
              <label htmlFor={`${e.id}-2`}> b. {e.respuesta2}</label>
            </section>
            <section className="flex mx-3 p-2 gap-5 border border-gray-400">
              <input type="radio" id={`${e.id}-3`} name={`question-${e.id}`} />
              <label htmlFor={`${e.id}-3`}> c. {e.respuesta3}</label>
            </section>
            <section className="flex mx-3 p-2 gap-5 border border-gray-400">
              <input type="radio" id={`${e.id}-4`} name={`question-${e.id}`} />
              <label htmlFor={`${e.id}-4`}> d. {e.respuesta4}</label>
            </section>
            {/* <p>{e.respuestaCorrecta}</p> */}
          </section>
        );
      })}
    </section>
  );
};

export default Questions;
