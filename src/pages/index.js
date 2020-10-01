import HomeHeader from "../components/homepage/HomeHeader";
import DescrtiptionSection from "../components/homepage/DescrtiptionSection";
import QuestionsSection from "../components/homepage/QuestionsSection";
import HomeFooter from "../components/homepage/HomeFooter";
import ContactsSection from "../components/homepage/ContactsSection";
import InfoSection from "../components/homepage/InfoSection";
import theme from "../styles/theme";

export default function HomePage() {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <DescrtiptionSection></DescrtiptionSection>
      <QuestionsSection />
      <InfoSection></InfoSection>
      <ContactsSection></ContactsSection>
      <HomeFooter></HomeFooter>
      <style global jsx >{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ${theme.fontStyle.Nunito};
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
