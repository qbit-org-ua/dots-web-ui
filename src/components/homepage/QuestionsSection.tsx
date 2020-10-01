import QuestionBlock from "./QuestionBlock";
import ProgLangListBlock from "./ProgLangListBlock";
import theme from "../../styles/theme";

const QuestionsSection = () => {
  return (
    <>
      <h2 id="info" className="questions-title">О платформе DOTS</h2>
      <div className="questions-container">
        <div className="questions-wrapper">
          <QuestionBlock
            questionTitle={`Как функционирует платформа DOTS?`}
            questionText={`База включает задачи от азов программирования до международного олимпиадного уровня.`}
          />
          <QuestionBlock
            questionTitle={`Какой сложности задачи  в DOTS?`}
            questionText={`База включает задачи от азов программирования до международного олимпиадного уровня.`}
          />
        </div>
        <div className="questions-wrapper">
          <QuestionBlock
            questionTitle={`Какие языки программирования  
        доступны для решения задач в DOTS?`}
          >
            <ProgLangListBlock></ProgLangListBlock>
          </QuestionBlock>
          <QuestionBlock questionTitle={`Как создавать турниры в DOTS`}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZBhZbwwNWkE"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </QuestionBlock>
        </div>
      </div>
      <style jsx>{`
        .questions-title {
          text-align: center;
          font-size: ${theme.fontSize.headerM};
        }
        .questions-container {
          background-color: ${theme.colorScheme.bgLightGray};
        }
        .questions-wrapper {
          width: 70%;
          margin: auto;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default QuestionsSection;
