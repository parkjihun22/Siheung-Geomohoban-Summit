import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const LocationEnvironment2 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
  <div>경기도 시흥시 거모동 1171번지 일원에서</div>
  <div>시흥 거모 호반써밋의 프리미엄을 누리세요.</div>
  <div>
    총 353세대, 호반건설 시공, 84㎡A·84㎡B로 구성된 브랜드
    주거 가치를 제안합니다.
  </div>
</div>

<figure className={styles.locationMapFrame}>
  <img
    src={page1}
    className={styles.image3}
    alt="시흥 거모 호반써밋 프리미엄과 거모지구 주거 가치"
  />
      </figure>

      <Footer />
    </div>
  );
};

export default LocationEnvironment2;
