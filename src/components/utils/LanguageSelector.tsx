import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
      className="rounded-md bg-black border px-2 py-1"
    >
      <option value="en">🇬🇧 English</option>
      <option value="de">&#x1f1e9;&#x1f1ea; German</option>
    </select>
  );
};

export default LanguageSelector;
