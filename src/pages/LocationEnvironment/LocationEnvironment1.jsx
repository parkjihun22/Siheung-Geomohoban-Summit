import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "시흥거모 B1블럭 핵심 입지<br />새로운 주거 중심",
    contentText:
      "경기도 시흥시 거모동 1171번지 일원<br />거모지구의 생활 인프라와 미래가치를 누리는 시흥 거모 호반써밋",
  },
  {
    img: section2Image2,
    titleText: "수도권을 연결하는<br />다양한 광역교통망",
    contentText:
      "지하철 4호선·수인분당선 신길온천역 인접<br />평택시흥고속도로와 영동고속도로를 이용하는 편리한 교통환경",
  },
  {
    img: section2Image3,
    titleText: "더욱 빨라지는 교통<br />기대되는 미래가치",
    contentText:
      "신안산선과 인천발 KTX 등 예정된 광역교통 개발<br />거모지구와 신길2지구를 잇는 신흥 주거생활권",
  },
  {
    img: section2Image4,
    titleText: "생활과 자연을 함께 누리는<br />원스톱 생활환경",
    contentText:
      "단지 인근에 계획된 거모지구 중심상업지구<br />제기천 수변공간과 산들공원, 체육공원이 어우러진 주거환경",
  },
  {
    img: section2Image5,
    titleText: "가까이 누리는 교육시설<br />편리한 통학환경",
    contentText:
      "도일초등학교와 군자중학교, 군자디지털과학고 인접<br />단지 약 400m 거리에 초등학교와 중학교 신설 추진",
  },
  {
    img: section2Image6,
    titleText: "호반써밋 브랜드가 완성하는<br />프리미엄 주거생활",
    contentText:
      "시흥에서 약 1만3천여 세대를 공급해 온 브랜드 경쟁력<br />시흥 거모 호반써밋에서 만나는 품격 있는 주거 가치",
  },
];

const LocationEnvironment1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
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

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
  <div>시흥거모 공공주택지구의 새로운 중심에서</div>
  <div>생활의 편리함과 미래가치를 함께 누리는 곳</div>
  <div>시흥 거모 호반써밋이 새로운 주거 가치로 찾아옵니다.</div>
</div>

<figure className={styles.locationMapFrame}>
  <img
    src={page1}
    className={styles.image2}
    alt="시흥 거모 호반써밋 입지환경과 거모지구 생활권 안내"
  />

  <button
    type="button"
    className={styles.zoomButton}
    onClick={() =>
      openZoom(
        page1,
        "시흥 거모 호반써밋 입지환경과 거모지구 생활권 안내"
      )
    }
    aria-label="시흥 거모 호반써밋 입지환경 이미지 크게 보기"
  >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `시흥 거모 호반써밋 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
