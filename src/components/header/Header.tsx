import { appTitles } from "../../styles/app-theme";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <h1 className="header-title">
          Молодёжное научное общество Q-Bit, г. Харьков
        </h1>
        <h2 className="header-subtitle">ПРАКТИКУМ ПО ПРОГРАММИРОВАНИЮ</h2>
      </div>
      <style jsx>{`
        .header-container{
          margin: 20px 40px; 
        }
        .header-title {
          ${appTitles.h1}
        }
        .header-subtitle {
          ${appTitles.h2}
        }
      `}</style>
    </>
  );
};

export default Header;
