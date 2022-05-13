import axios from "axios";
import cheerio from "cheerio";

// const samsung = document.getElementById("samsung");
// const naver = document.getElementById("naver");
// const apple = document.getElementById("apple");
// const tesla = document.getElementById("tesla");
// const google = document.getElementById("google");
// const microsoft = document.getElementById("microsoft");
// const nvidia = document.getElementById("nvidia");

let buttonWord = "삼성전자";
let searchKeyWord = encodeURI(`${buttonWord}`);

// samsung.addEventListener("click", () => (buttonWord = "삼성전자"));
// naver.addEventListener("click", () => (buttonWord = "naver 네이버"));
// apple.addEventListener("click", () => (buttonWord = "애플"));
// tesla.addEventListener("click", () => (buttonWord = "테슬라"));
// google.addEventListener("click", () => (buttonWord = "구글"));
// microsoft.addEventListener("click", () => (buttonWord = "마이크로소프트"));
// nvidia.addEventListener("click", () => (buttonWord = "엔비디아"));

// axios를 활용해 AJAX로 HTML 문서를 가져오는 함수 구현
async function getHTML() {
  try {
    return await axios.get(
      `https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=${searchKeyWord}`
    );
  } catch (error) {
    console.error(error);
  }
}

getHTML()
  .then((html) => {
    let titleList = [];
    const $ = cheerio.load(html.data);
    // ul.list_news를 찾고 그 children 노드를 bodyList에 저장
    const bodyList = $("ul.list_news").children("li.bx");

    // bodyList를 순회하며 titleList에 div > div > a.news_tit의 내용을 저장
    bodyList.each(function (i, elem) {
      titleList[i] = {
        title: $(this).find("div div a.news_tit").text(),
      };
    });
    return titleList;
  })
  .then((res) => console.log(res));
