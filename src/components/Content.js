import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import contentCss from "../module/Content.module.css";

const Content = () => {
  const { URLticker } = useParams();
  const stockState = useSelector((state) => state.stockState);

  let curStock = "";
  if (URLticker === undefined) {
    curStock = stockState[0];
  } else {
    curStock = stockState.find((i) => i.ticker === URLticker);
  }
  console.log(curStock);

  return (
    <div>
      <h1 className={contentCss.stockTitle}>{curStock.name}</h1>
      <div className={contentCss.content}></div>
    </div>
  );
};

export default Content;
