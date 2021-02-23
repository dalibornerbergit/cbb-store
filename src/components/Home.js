import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="content">
      <h1>{t("Home")}</h1>
    </div>
  );
};

export default Home;
