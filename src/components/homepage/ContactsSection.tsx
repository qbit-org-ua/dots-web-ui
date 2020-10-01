import theme from "../../styles/theme";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactsSection = () => {
  return (
    <>
      <h2 id="contacts" className="contacts-title">Контакты</h2>
      <div className="contacts-wrapper">
        <div className="contacts-item">
          <FontAwesomeIcon icon={faEnvelopeOpen} style={{ fontSize: "20px" }} />
          <span> info@qbit.org.ua</span>
        </div>

        <div className="contacts-item">
          <FontAwesomeIcon icon={faMobileAlt} style={{ fontSize: "20px" }} />
          <span> +38 (099) 553-9-552</span>
        </div>

        <div className="contacts-item">
          <FontAwesomeIcon icon={faMobileAlt} style={{ fontSize: "20px" }} />
          <span> +38 (063) 99-22-556</span>
        </div>
      </div>
      <style jsx>{`
        .contacts-title {
          font-size: ${theme.fontSize.headerM};
          text-align: center;
        }
        .contacts-wrapper {
          background-color: ${theme.colorScheme.bgLightColor};
          padding: 20px 180px;
        }
        .contacts-item {
          color: ${theme.colorScheme.textColor};
          font-size: ${theme.fontSize.textM};
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default ContactsSection;
