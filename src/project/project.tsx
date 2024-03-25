import ESG from "../imgs/ESG_ManagementSystem.png";
import CMS from "../imgs/CMS.png";
import PER from "../imgs/Personal_Website.png";
import Bravelog from "../imgs/Bravelog.png";
import CMSFXG from "../imgs/CMS(FXG).png";
const project = [
  {
    id: "01",
    img: PER.src,
    title: "Personal Website",
    text: "個人靜態網站，純css動畫特效與個人資料作品集",
    technology: "React.js | Next.js | 1i8n | TypeScript | CSS | HTML | RWD",
    SOURCE: "https://github.com/felff/personal-website",
    vist: "https://personal-website-one-sooty.vercel.app/",
  },
  {
    id: "02",
    img: Bravelog.src,
    title: "Bravelog(FXG)",
    text: "設計並實現通用性高、可設定化的UI元件庫，包括按鈕、表單、卡片、導航等常用元件，将页面切割后的设计稿转化为可重用的React组件",
    technology:
      "React.js | Next.js | Antd | MUI | 1i8n | TypeScript | CSS | HTML | RWD",
    SOURCE: "",
    vist: "https://www.bravelog.tw/training/",
  },
  {
    id: "03",
    img: CMSFXG.src,
    title: "CMS(FXG)",
    text: "升級React版本至最新的穩定版本 以獲得最新的功能和效能最佳化16 =>18，公司內部CMS系統新功能將工作任務細分為小型的模組或功能單元 並指派給團隊成員負責開發",
    technology:
      "React.js | Antd | MUI | 1i8n | TypeScript | Prettier | Day.js | Redux | SSE | websocket ",
    SOURCE: "",
    vist: "",
  },
  {
    id: "04",
    img: ESG.src,
    title: "ESG Management (DIF)",
    text: "以ESG為出發點開發的系統，可協助彙整所有排放源數據、係數等，結合現代的前端框架和工具（如React HooksAPI等），編寫乾淨、簡潔的元件程式碼 ",
    technology:
      "React.js | react-router-dom | react-paginate | Chart.js | Font Awesome | RWD | Antd | Typescript | Redux toolkit+Redux Saga",
    SOURCE: "",
    vist: "",
  },
  {
    id: "05",
    img: CMS.src,
    title: "CMS(DIF)",
    text: "為公司開發一套CMS系統 整合公司每個客戶訂單細節等等的多元系統",
    technology:
      "React.js | react-router-dom | Font Awesome | react-paginate | RWD | Typescript | Redux toolkit+Redux Saga",
    SOURCE: "",
    vist: "",
  },
];

export default project;
