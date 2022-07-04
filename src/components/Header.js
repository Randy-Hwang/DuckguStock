import pawImg from "../paw-solid.svg";
import HeaderCss from "../module/Header.module.css";

const Header = () => {
  return (
    <div className={HeaderCss.header}>
      <h1>
        DuckguStock
        <img src={pawImg} className={HeaderCss.logo} alt="dogs paw" />
      </h1>
    </div>
  );
};

export default Header;
