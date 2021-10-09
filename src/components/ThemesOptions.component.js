import { themesList } from "../config/other.config";

const ThemeOptions = ({ user, onChange }) => {
  return (
    <div className="d-flex flex-row col-10">
      <label className="form-label col-2">Theme :- </label>
      <select onChange={onChange} className="form-select d-inline-flex col-2">
        {themesList.map((theme) => {
          if (theme === user.theme) {
            return <option selected>{theme}</option>;
          }
          return <option>{theme}</option>;
        })}
      </select>
    </div>
  );
};

export default ThemeOptions;
