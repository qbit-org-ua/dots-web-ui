import theme from "../../styles/theme";

const InfoSection = () => {
  return (
    <section>
      <h2 className="info-title">Информация для некоммерческих организаций</h2>
      <h3 className="info-subtitle">
        Кто может получить доступ к платформе на правах некоммерческого
        использования?
      </h3>
      <ul className="info-text">
        <li>учителя информатики в школах</li>
        <li>преподаватели высших учебных заведений</li>
        <li>
          организаторы бесплатных или благотворительных кружков по
          программированию
        </li>
      </ul>
      <style jsx>{`
        .info-title {
          text-align: center;
          font-size: ${theme.fontSize.headerM};
        }
        .info-subtitle {
          text-align: center;
          color: ${theme.colorScheme.accentColor};
          font-size: ${theme.fontSize.headerS};
        }
        .info-text {
          max-width: 600px;
          margin: auto;
          text-align: justify;
          font-size: ${theme.fontSize.textM};
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};

export default InfoSection;
