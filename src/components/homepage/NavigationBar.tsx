import Link from "next/link";
import theme from "../../styles/theme";

const NavigationBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">DOTS</div>
        <nav className="nav-container">
          <div className="nav-item">
            <Link href="#about-dots">
              <a>О нас</a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="#info">
              <a>Информация</a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="#contacts">
              <a>Контакты</a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="">
              <a>Мы работаем</a>
            </Link>
          </div>
        </nav>
      </div>
      <style jsx>
        {`
          .navbar {
            display: flex;
          }
          .logo {
            flex-grow: 2;
            margin: 20px 50px;
            font-size: 30px;
          }
          .nav-container {
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            justify-content: space-around;
            margin: 0 100px 0;
          }
          .nav-item {
            align-self: center;
            font-size: ${theme.fontSize.textM};
          }
          .nav-item > a {
            color: ${theme.colorScheme.textColor};
            text-decoration: none;
          }
          .nav-item > a :hover {
            color: ${theme.colorScheme.accentColor};
          }
        `}
      </style>
    </>
  );
};

export default NavigationBar;
