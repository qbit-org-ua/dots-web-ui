import { colorScheme, appText } from "../../styles/app-theme";
const Navigation = () => {
  return (
    <>
      <ul className="nav-container">
        <li className="nav-item">
          <span className="nav-item-name">Памятка</span>
        </li>
        <li className="nav-item">
          <span className="nav-item-name"> Войти</span>
        </li>
        <li className="nav-item">
          <span className="nav-item-name">Помощь</span>
        </li>
        <li className="nav-item">
          <span className="nav-item-name">DOTS</span>
        </li>
        <li className="nav-item">
          <span className="nav-item-name">QBIT</span>
        </li>
      </ul>
      <style jsx>{`
        .nav-container {
          padding: 0;
          margin: 10px;
        }
        .nav-item {
          list-style-type: none;
          padding: 10px;
          ${appText.large};
          cursor: pointer;
        }
        .nav-item-name {
          position: relative;
        }
        .nav-item-name:after {
          content: "";
          position: absolute;
          display: block;
          width: 0px;
          height: 2px;
          background-color: orange;
        }
        .nav-item-name:hover:after {
          width: 100%;
          transition: width 0.75s ease-in;
        }
      `}</style>
    </>
  );
};

export default Navigation;
