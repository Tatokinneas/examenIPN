import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../api/firebase";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Referencia a la colección de Firestore
        const questionsCollection = collection(db, "questions");

        // Obtener documentos de la colección
        const questionSnapshot = await getDocs(questionsCollection);

        // Mapear documentos a un array de datos
        const questionList = questionSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const questionListSorted = questionList.sort((a, b) => a.id - b.id);

        setQuestions(questionListSorted);
        console.log(questionListSorted);
      } catch (error) {
        console.error("Error obteniendo documentos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const materiasUnicas = [...new Set(questions.map((item) => item.materia))];

  // Agrupar por materia
  const agrupadoPorMateria = materiasUnicas.reduce((acc, materia) => {
    acc[materia] = questions.filter((item) => item.materia === materia);
    return acc;
  }, {});

  const handleAnswerChange = (questionId, answerId) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const checkAnswers = () => {
    const newFeedback = {};

    questions.forEach((q) => {
      if (selectedAnswers[q.id]) {
        const isCorrect = selectedAnswers[q.id] === q.respuestaCorrecta;
        newFeedback[q.id] = isCorrect ? "Correcto" : "Incorrecto";
      } else {
        newFeedback[q.id] = "No respondido";
      }
    });

    setFeedback(newFeedback);
  };

  if (loading) {
    return (
      <div className="flex justify-center h-screen flex items-center justify-center">
        Cargando
      </div>
    );
  }

  return (
    <section className="col-span-3 md:col-span-2 lg:max-h-[600px] overflow-y-auto p-4 rounded-lg shadow-m">
      {materiasUnicas.map((materia) => (
        <div key={materia}>
          <p className="my-3">Preguntas de {materia}</p>
          {agrupadoPorMateria[materia].map((e) => (
            <section
              className="gap-2 flex flex-col justify-start my-5"
              key={e.id}
            >
              <h1 className="border border-red-300 mx-4 py-4">
                {e.id}. {e.pregunta}
              </h1>
              {["respuesta1", "respuesta2", "respuesta3", "respuesta4"].map(
                (res, index) => (
                  <section
                    className="flex mx-3 p-2 gap-5 border border-gray-400"
                    key={index}
                  >
                    <input
                      type="radio"
                      id={`${e.id}-${index + 1}`}
                      name={`question-${e.id}`}
                      value={index + 1}
                      onChange={() =>
                        handleAnswerChange(e.id, (index + 1).toString())
                      }
                      checked={selectedAnswers[e.id] === (index + 1).toString()}
                    />
                    <label htmlFor={`${e.id}-${index + 1}`}>
                      {String.fromCharCode(97 + index)}. {e[res]}
                    </label>
                  </section>
                )
              )}
              {feedback[e.id] && <p>{feedback[e.id]}</p>}
            </section>
          ))}
        </div>
      ))}
      <button
        onClick={checkAnswers}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Verificar todas las respuestas
      </button>
    </section>
  );
};

export default Questions;
