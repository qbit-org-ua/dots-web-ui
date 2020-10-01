import theme from "../../styles/theme";
import NavigationBar from "./NavigationBar";

const HomeHeader = () => {
  return (
    <header>
      <NavigationBar />
      <div className="title-wrapper">
        <h1 className="title-dots title-dots_red">DOTS - </h1>
        <h1 className="title-dots">
          это онлайн-платформа для обучения программированию и развития
          алгоритмического мышления!
        </h1>
      </div>
      <style jsx>{`
        .title-wrapper {
          padding: 30px;
          height: 350px;
          background-color: ${theme.colorScheme.bgLightColor};
          background-image: url("/img/bg-img.png");
          background-repeat: no-repeat;
          background-position: right;
          background-size: 50% 100%;
        }
        .title-dots {
          width: 40%;
          margin: 0 100px;
          color: ${theme.colorScheme.textColor};
          font-size: ${theme.fontSize.headerL};
          font-weight: ${theme.fontWeight.medium};
        }
        .title-dots_red {
          color: ${theme.colorScheme.accentColor};
          font-weight: ${theme.fontWeight.black};
        }
      `}</style>
    </header>
  );
};

export default HomeHeader;
