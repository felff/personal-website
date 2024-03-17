import React from "react";
import Style from "../styles/about.module.css";
import { saveAs } from "file-saver";
import { useTranslation } from "react-i18next";
import MoreButton from "../components/moreButton";
import Gallery3D from "../components/gallery3D";
import Image from "next/image";
import office from "../imgs/office_desk.png";
import school from "../imgs/school.png";
const About = () => {
  const { t } = useTranslation();
  const saveFile = () => {
    saveAs(
      "https://www.cakeresume.com/pdf/s--_UPoJUSERmXV5CSbYEUZHQ--/jv4OP.pdf",
      "Robby.pdf"
    );
  };
  return (
    <div className={Style.cotainer}>
      <div className={Style.title}>
        <div className={Style.top}>{t("about_title")}</div>
        <div className={Style.bottom}>{t("about_title")}</div>
      </div>
      <div className={Style.flex_box}>
        <div className={Style.content}>
          <h2>{t("content_title")}</h2>
          <div className={Style.personal}>
            <ul>
              <li>
                {t("About_Last_Name")}: <span>{t("About_Li")} </span>
              </li>
              <li>
                {t("About_First_Name")}: <span> {t("About_Heng")} </span>
              </li>
              <li>
                {t("About_Age")} : <span>{t("About_Years")} </span>
              </li>
              <li>
                {t("About_langages")} :{" "}
                <span>{t("About_Chinese_English")} </span>
              </li>
            </ul>
            <ul>
              <li>
                {t("About_Address")} : <span>{t("About_Taoyuan_Taipei")} </span>
              </li>
              <li>
                {t("About_Nationality")} : <span>{t("About_Taiwan")} </span>
              </li>
              <li>
                {t("About_Phone")} : <span>0905045492</span>
              </li>
              <li>
                {t("About_email")} : <span>a909henhen@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className={Style.btn}>
            <MoreButton text={t("About_btn")} onClick={saveFile} />
          </div>
        </div>
        <div className={Style.box}>
          <Gallery3D />
        </div>
      </div>
      <div className={Style.skill}>
        <h2>{t("About_MY_SKILLS")}</h2>
        <ul>
          <li>
            <div className={Style.skill_title}>Front-end</div>
            <ul>
              <li>HTML5 / CSS3 / RWD </li>
              <li>JavaScript / TypeScript</li>
              <li>React.js / Redux</li>
              <li>Ajax (axios)</li>
              <li>Bootstrap</li>
              <li>Ant Design / Material UI</li>
              <li>Taiwind CSS</li>
            </ul>
          </li>
          <li>
            <div className={Style.skill_title}>React</div>
            <ul>
              <li>Vite</li>
              <li>Next.js</li>
              <li>Create React App (CRA)</li>
              <li>Webpack</li>
              <li>React Scripts</li>
            </ul>
          </li>
          <li>
            <div className={Style.skill_title}>Other</div>
            <ul>
              <li>npm/yarn</li>
              <li>Git / Github / GitLab</li>
              <li>i18n</li>
              <li>Server-Sent Events</li>
              <li>RESTful API</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={Style.experience}>
        <h2>{t("About_EXPERIENCE_EDUCATION")}</h2>
        <ul>
          <li>
            <div className={Style.icon}>
              <Image src={office} height={50} width={50} alt={"WORK"}></Image>
              <span>2023~2024</span>
            </div>
            <div className={Style.experience_content}>
              <h1>{t("About_EXPERIENCE_Title")}</h1>
              <h3>{t("Aboit_FXG_COMPANY")}</h3>
              <p>{t("Aboit_FXG_CONTENT1")}</p>
              <p>{t("Aboit_FXG_CONTENT2")}</p>
              <p>{t("Aboit_FXG_CONTENT3")}</p>
              <p>{t("Aboit_FXG_CONTENT4")}</p>
            </div>
          </li>
          <li>
            <div className={Style.icon}>
              <Image src={office} height={50} width={50} alt={"WORK"}></Image>
              <span>2022~2023</span>
            </div>
            <div className={Style.experience_content}>
              <h1>{t("About_EXPERIENCE_Title")}</h1>
              <h3>{t("Aboit_DIF_COMPANY")}</h3>
              <p>{t("Aboit_DIF_CONTENT1")}</p>
              <p>{t("Aboit_DIF_CONTENT2")}</p>
            </div>
          </li>
          <li>
            <div className={Style.icon}>
              <Image src={school} height={50} width={50} alt={"WORK"}></Image>
              <span>2018~2022</span>
            </div>
            <div className={Style.experience_content}>
              <h1>{t("About_EDUCATION_Title")}</h1>
              <h3>{t("Aboit_EDUCATION_SCHOOL")}</h3>
              <p>{t("Aboit_EDUCATION_CONTENT1")}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
