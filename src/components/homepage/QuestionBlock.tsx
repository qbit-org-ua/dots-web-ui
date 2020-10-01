import theme from "../../styles/theme";

const QuestionBlock = (props) => {
  const { questionTitle, questionText } = props;
  return (
    <>
      <section className="question-wrapper">
        <h3 className="question-title">{questionTitle}</h3>
        <p className="question-text">{questionText}</p>
        <div>{props.children}</div>
      </section>
      <style jsx>{`
        .question-wrapper {
          padding: 25px;
          width: 500px;
        }
        .question-wrapper:nth-child(odd) {
        }
        .question-wrapper:nth-child(even) {
          align-self: flex-end;
        }
        .question-title {
          border-bottom: 2px solid ${theme.colorScheme.accentColor};
          font-size: ${theme.fontSize.headerS};
        }
        .question-text {
          font-size: ${theme.fontSize.textM};
        }
      `}</style>
    </>
  );
};

export default QuestionBlock;
