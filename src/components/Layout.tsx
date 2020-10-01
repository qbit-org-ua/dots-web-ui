import { colorScheme } from "../styles/app-theme";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";

const Layout = (props) => {
  return (
    <>
      <div className="layout-container">
        <div className="layout-header">
          <Header></Header>
        </div>
        <div className="layout-side">
          <img
            src="img/logo.gif"
            className="nav-logo"
            alt="dots logo"
            width="100"
            height="70"
          />
        </div>
        <nav className="layout-nav">
          <Navigation />
        </nav>
        <main className="layout-content">{props.children}</main>
        <div className="layout-footer"></div>
      </div>
      <style global jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Nunito;
        }

        * {
          box-sizing: border-box;
        }
        h1,
        h2,
        h3 {
          margin: 0;
        }
        .layout-container {
          width: 100vw;
          height: 100vh;
          display: grid;
          grid-template-columns: 150px auto 150px;
          grid-template-rows: 20vh auto 15vh;
          grid-template-areas:
            "side header header"
            "side content ."
            "side content ."
            "side content ."
            "side footer footer";
          background: ${colorScheme.backgroundColor};
        }

        .layout-header {
          grid-area: header;
        }
        .layout-side {
          grid-area: side;
          background: ${colorScheme.sidebarColor};
        }
        .layout-nav {
          grid-area: 2 / 1 / 3 / 2;
        }
        .nav-logo {
          margin: 20px 10px;
        }
        .layout-content {
          grid-area: content;
        }
        .layout-footer {
          grid-area: footer;
        }
      `}</style>
    </>
  );
};

export default Layout;
