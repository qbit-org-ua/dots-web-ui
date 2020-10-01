import theme from "../../styles/theme"

const DescrtiptionSection = () => {
  return (
    <>
      <section>
        <h2 id="about-dots" className="descr-title">О нас</h2>
        <div className="descr-text-wrapper">
          <p className="descr-text">
            Уже многие годы мы занимаемся популяризацией программирования. В
            платформе DOTS мы воплотили наш опыт, накопленный в преподавании и
            участии во многих олимпиадах.
          </p>
          <p className="descr-text">
            DOTS призвана объединить всех, кто желает выучить основы
            программирования, углубить свои знания и, возможно, связать свою
            будущую профессию с информационными технологиями.
          </p>
          <p className="descr-text">
            В рамках DOTS мы предоставляем онлайн-площадки "под ключ" для
            обучения программированию. Каждый наш партнёр получает
            персонализированный веб-портал, где может проводить собственные
            турниры и курсы. Мы предоставляем бесплатный доступ к платформе для
            некоммерческого использования (в школах, университетах).
          </p>
        </div>
      </section>
      <style jsx>{`
        .descr-title {
          text-align: center;
          font-size: ${theme.fontSize.headerM};
        }
        .descr-text-wrapper {
          margin: auto;
          max-width: 680px;
        }
        .descr-text {
          text-align: justify;
          font-size: 20px;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
};

export default DescrtiptionSection;
