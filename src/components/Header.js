import HeaderCss from "../module/Header.module.css";
import StockNav from "./StockNav";

const Header = () => {
  return (
    <div>
      <h1 className={HeaderCss.title}>DuckguStock</h1>
      <div>
        <StockNav />
      </div>
    </div>
  );
};

export default Header;
