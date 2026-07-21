import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "시흥 거모 호반써밋" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="시흥 거모 호반써밋 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = [
    "홍보영상",
    "브랜드소개",
    "시흥거모호반써밋",
  ];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "분양안내",
    "입주자모집공고",
    "공급안내",
    "계약서류안내",
  ];

  const locationTitles = [
    "입지환경",
    "입지안내",
    "프리미엄",
  ];

  const complexTitles = [
    "단지안내",
    "단지배치도",
    "호수배치도",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "타입안내",
    "84A㎡평면도",
    "84B㎡평면도",
    "E모델하우스",
    "E-모델하우스",
  ];

  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          시흥거모를 대표할 새로운 주거 중심, 시흥 거모 호반써밋.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          호반써밋의 브랜드 가치와 품격을 담은 프리미엄 주거 공간.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          교통·교육·생활 인프라와 거모지구의 미래가치를 함께 누려보세요.
        </div>
      </>
    );
  } else if (
    businessTitles.includes(normalizedText) ||
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          시흥 거모 호반써밋의 사업개요와 공급정보를 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          전용 84㎡A·84㎡B, 총 353세대로 조성되는 호반써밋 브랜드 단지.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          분양가부터 잔여세대, 계약안내, 마감재와 타입 구성까지 확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          시흥 거모 호반써밋
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          거모지구의 교통·교육·생활환경을 가까이 누리는 입지 프리미엄.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          신길온천역과 주요 고속도로를 통해 수도권 주요 지역으로 편리하게 이동합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          거모·신길2지구의 개발과 함께 더욱 기대되는 미래가치를 확인하세요.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          총 4개동, 지상 최고 24층으로 조성되는 시흥 거모 호반써밋.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          여유로운 동간거리와 쾌적한 조경, 실용적인 주거 설계를 갖췄습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          스마트 헬스케어와 교육·문화·편의를 담은 특화 커뮤니티를 만나보세요.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          시흥 거모 호반써밋의 분양 소식과 모델하우스 방문예약을 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          관심고객등록을 통해 잔여세대와 공급정보, 상담 안내를 받아보세요.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
      시흥 거모 호반써밋 분양정보와 모델하우스 방문예약 안내를 확인하세요.
    </div>
  );
};
