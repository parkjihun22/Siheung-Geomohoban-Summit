// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>시흥 거모 호반써밋</span>
        </li>

        <li>
          <strong>대지위치</strong>
          <span>
            시흥거모 B1블럭
            <br />
            (경기도 시흥시 거모동 1171번지 일원)
          </span>
        </li>

        <li>
          <strong>대지면적</strong>
          <span>22,254.00㎡</span>
        </li>

        <li>
          <strong>건축면적</strong>
          <span>2,983.1712㎡</span>
        </li>

        <li>
          <strong>건폐율 / 용적률</strong>
          <span>13.40% / 179.73%</span>
        </li>

        <li>
          <strong>건축규모</strong>
          <span>지하 2층~지상 24층 / 총 4개동</span>
        </li>

        <li>
          <strong>세대수</strong>
          <span>총 353세대</span>
        </li>

        <li>
          <strong>세대정보</strong>
          <span>84㎡A 265세대 / 84㎡B 88세대</span>
        </li>

        <li>
          <strong>주차대수</strong>
          <span>총 533대 (세대당 약 1.5대)</span>
        </li>

        <li>
          <strong>용도</strong>
          <span>공동주택(아파트) 및 부대복리시설</span>
        </li>

        <li>
          <strong>시공사</strong>
          <span>(주)호반건설</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="시흥 거모 호반써밋 입지환경 지도"
        />
  
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="시흥 거모 호반써밋 거모지구 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
  
          <p className={styles.premiumSubtitle}>
            거모지구의 미래가치와 호반써밋의 브랜드 가치를 누리는
            <br />
            시흥 거모 호반써밋 프리미엄 라이프
          </p>
        </div>
  
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
  ];
  
  function PremiumSlider() {
    const slides = [
      {
        img: slide1,
        title: "탁월한 희소가치",
        desc:
          "분양가상한제가 적용되는 시흥거모 공공주택지구<br/>공공택지에서 만나는 희소성 높은 민간분양 단지<br/>합리적인 내 집 마련을 기대할 수 있는 주거 선택",
      },
      {
        img: slide2,
        title: "호반써밋 브랜드 프리미엄",
        desc:
          "시흥 곳곳에 약 1만3천여 세대를 공급해 온 호반써밋<br/>지역에서 입증해 온 브랜드 가치와 주거 노하우<br/>시흥 거모 호반써밋이 제안하는 품격 있는 주거생활",
      },
      {
        img: slide3,
        title: "수도권을 연결하는 멀티 교통망",
        desc:
          "지하철 4호선·수인분당선 신길온천역 인접<br/>평택시흥고속도로와 영동고속도로를 이용하는 광역교통망<br/>서울·안산·수원 등 수도권 주요 지역으로 편리한 이동",
      },
      {
        img: slide4,
        title: "거모지구의 눈부신 미래비전",
        desc:
          "거모지구와 신길2지구를 연계한 신흥 주거생활권<br/>신안산선과 인천발 KTX 등 예정된 광역교통 개발<br/>도시 성장과 함께 더욱 기대되는 거모지구의 미래가치",
      },
      {
        img: slide5,
        title: "편리하고 쾌적한 생활환경",
        desc:
          "단지 인근에 계획된 거모지구 중심상업지구<br/>제기천 수변공간과 산들공원, 체육공원을 누리는 생활환경<br/>자연과 생활편의가 조화를 이루는 원스톱 주거생활",
      },
      {
        img: slide6,
        title: "가까이 누리는 안심 교육환경",
        desc:
          "도일초등학교와 군자중학교, 군자디지털과학고 인접<br/>단지 약 400m 거리에 초등학교와 중학교 신설 추진<br/>아이들의 편리한 통학환경을 고려한 교육 인프라",
      },
    ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>CHEONGJU HANYANG LIPS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="시흥 거모 호반써밋 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
