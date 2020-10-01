import theme from "../../styles/theme";

const HomeFooter = () => {
  return (
    <>
      <div className="footer-container">
        <p className="footer-text">
          Copyright © 2005-2019, Молодёжное научное общество "Q-BIT" тех.
          поддержка: Н. Арзубов, В. Фролов
        </p>
        <p className="footer-text">
          При использовании материалов сайта ссылка на dots.org.ua обязательна.
        </p>
        <p className="footer-text">LTD FiveWalls</p>
      </div>
      <style jsx>
        {`
          .footer-container {
            height: 120px;
            padding: 20px;
            background-color: ${theme.colorScheme.bgDarkColor};
          }
          .footer-text {
            margin: 0 auto;
            width: 70%;
            font-size: ${theme.fontSize.textS};
            color: white;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default HomeFooter;
