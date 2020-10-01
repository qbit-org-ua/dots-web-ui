import C from "../../assets/langIcons/c.svg";
import CXX from "../../assets/langIcons/cplusplus.svg";
import Pascal from "../../assets/langIcons/pascal.svg";
import Python from "../../assets/langIcons/python.svg";
import Java from "../../assets/langIcons/java.svg";
import Csharp from "../../assets/langIcons/csharp.svg";
import JS from "../../assets/langIcons/js.svg";
import Haskell from "../../assets/langIcons/haskell.svg";
import Go from "../../assets/langIcons/golang.svg";
import Rust from "../../assets/langIcons/rust.svg";
import Ruby from "../../assets/langIcons/ruby.svg";
import Kotlin from "../../assets/langIcons/kotlin.svg";
import Scala from "../../assets/langIcons/scal.svg";
import Nim from "../../assets/langIcons/nim.svg";
import PHP from "../../assets/langIcons/php.svg";
import VB from "../../assets/langIcons/vb.svg";
import Bash from "../../assets/langIcons/bash.svg";
import React, { useState } from "react";
import theme from "../../styles/theme";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const progLangList = [
  { key: "C", lang: C },
  { key: "C++", lang: CXX },
  //{key="2", lang:"Pascal"},
  { key: "Python", lang: Python },
  { key: "Java", lang: Java },
  { key: "JavaScript", lang: JS },
  { key: "C#", lang: Csharp },
  { key: "Rust", lang: Rust },
  //{key="10", lang:"Kotlin"}
  //{key="0", lang:"Haskell}
  { key: "Co", lang: Go },
  { key: "Ruby", lang: Ruby },
  { key: "PHP", lang: PHP },
  //{key:"11", lang:Scala},
  //{key="12", lang:"Nim"},
  //{key:"14", lang:"VB"},
  //{key:"15", lang:"Bash"},
];

const extraLangList = [
  { key: "pasc", lang: "Pascal" },
  { key: "kotl", lang: "Kotlin" },
  { key: "hasc", lang: "Haskell" },
  { key: "scal", lang: "Scala" },
  { key: "nim", lang: "Nim" },
  { key: "bash", lang: "Bash" },
];

const ProgLangListBlock = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section>
      {progLangList.map((item) => {
        const { key, lang: Lang } = item;
        return <Lang key={key} className="lang-icon" />;
      })}
      <div className="lang-list" onClick={() => setToggle(!toggle)}>
        <span className="lang-extra-title">И другие</span>
        <FontAwesomeIcon icon={faAngleDown} style={{fontSize:'20px'}}/>
        {toggle && (
          <div>
            {extraLangList.map((item) => (
              <span key={item.key} className="lang-extra-item">
                {item.lang}
              </span>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .lang-icon {
          width: 60px;
          margin: 10px;
        }
        .lang-extra-title {
          font-size: 20px;
          margin: 10px;
        }
        .lang-list {
          height: 50px;
        }
        .lang-list:hover {
          cursor: pointer;
        }
        .lang-extra-item {
          margin: 10px;
          font-size: 20px;
          color: ${theme.colorScheme.accentColor};
        }
      `}</style>
    </section>
  );
};
export default ProgLangListBlock;
