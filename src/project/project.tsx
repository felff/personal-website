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
    text: "和一位前端工程師共同開發的外包網站、依照客戶需求規劃架構選寫元件。元件的部分都是以MUI|Antd為基礎再去做細部的鑽寫",
    technology:
      "React.js | Next.js | Antd | MUI | 1i8n | TypeScript | CSS | HTML | RWD",
    SOURCE: "",
    vist: "https://www.bravelog.tw/training/",
  },
  {
    id: "03",
    img: CMSFXG.src,
    title: "CMS(FXG)",
    text: "我在FXG主要負責的專案CMS公司內部管理系統，剛開始先幫忙把REACT升級版16=>18，再來負責開發新功能、和後團討論架構設計、分配新功能的工作項、分配工作、共同開發、和最後的code reivew",
    technology:
      "React.js | Antd | MUI | 1i8n | TypeScript | Prettier | Day.js | SSE | websocket",
    SOURCE: "",
    vist: "",
  },
  {
    id: "04",
    img: ESG.src,
    title: "ESG Management (DIF)",
    text: "以ESG為出發點開發的系統，可協助彙整所有排放源數據、係數等，建立統一標準化的資料庫，我負責前端所有介面開發交互及渲染，與串接api，建立可重用、調整的共用compoent!",
    technology:
      "React.js | react-router-dom | react-paginate | Chart.js | Font Awesome | RWD | Antd | Typescript | Redux toolkit+Redux Saga",
    SOURCE: "",
    vist: "",
  },
  {
    id: "05",
    img: CMS.src,
    title: "CMS(DIF)",
    text: "公司內部專案 內部客戶管理系統，負責管理與顯示洽談客戶不同層級的類別，與層級有多少客戶 。",
    technology:
      "React.js | react-router-dom | Font Awesome | react-paginate | RWD | Typescript | Redux toolkit+Redux Saga",
    SOURCE: "",
    vist: "",
  },
];

export default project;
