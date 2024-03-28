import React from "react";
import Style from "../styles/home.module.css";
import SELFIE from "../imgs/selfie.jpg";
import { useTranslation } from "react-i18next";
import MoreButton from "../components/moreButton";
interface homeProp {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}
const Home = ({ setCurrentPage }: homeProp) => {
  const { t } = useTranslation();
  let title = t("home_title").split("");
  return (
    <div className={Style.bg}>
      <div className={Style.color}></div>
      <div className={Style.color}></div>
      <div className={Style.color}></div>
      <div className={Style.container}>
        <div className={Style.selfie}>
          <img
            src={SELFIE.src}
            alt="selfie"
            className={Style.img}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className={Style.about}>
        <h1>
          {title.map((char, i) => {
            return <span key={i}>{char}</span>;
          })}
        </h1>
        <h2>{t("home_name")}</h2>
        <p>{t("home_content")}</p>
        <div className={Style.btn}>
          <MoreButton
            text={t("more_btn_text")}
            onClick={() => {
              if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                )
              ) {
                // 使用 URI Scheme "weixin://" 來打開手機上的微信應用程序
                var weChatAppUrl = "weixin://";

                // 創建一個隱藏的 a 標籤，設置 href 為微信 URI Scheme
                var link = document.createElement("a");
                link.setAttribute("href", weChatAppUrl);

                // 觸發點擊事件來打開微信應用程序
                link.dispatchEvent(new MouseEvent("click"));
              } else {
                alert("請使用手機訪問此網站以打開微信應用程序。");
              }
              //   setCurrentPage("ABOUT");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
