import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";



const projectData = [
  {
    label: "현장명",
    value: "시흥 거모 호반써밋",
  },
  {
    label: "사업명",
    value: "시흥거모 B1블럭 공동주택 신축사업",
  },
  {
    label: "대지위치",
    value: "경기도 시흥시 거모동 1171번지 일원",
  },
  {
    label: "대지면적",
    value: "22,254.00㎡",
  },
  {
    label: "건축면적",
    value: "2,983.1712㎡",
  },
  {
    label: "건폐율 / 용적률",
    value: "13.40% / 179.73%",
  },
  {
    label: "규모",
    value: "지하 2층~지상 24층 / 총 4개동",
  },
  {
    label: "세대수",
    value: "총 353세대",
  },
  {
    label: "주택형",
    value: "84㎡A 265세대 / 84㎡B 88세대",
  },
  {
    label: "주차대수",
    value: "총 533대 (세대당 약 1.5대)",
  },
  {
    label: "용도",
    value: "공동주택(아파트) 및 부대복리시설",
  },
  {
    label: "시공사",
    value: "(주)호반건설",
  },
];


const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />
<div className={styles.textBox}>
  <div>
    경기도 시흥시 거모동 1171번지 일원에 조성되는 총 353세대
  </div>
  <div>
    시흥 거모 호반써밋, 호반건설의 브랜드 프리미엄을 완성합니다.
  </div>
</div>

<img
  className={styles.img3}
  src={page1}
  alt="시흥 거모 호반써밋 사업개요 안내 이미지"
/>

<div className={styles.tableContainer}>
  {!isMobile && (
    <img
      className={styles.tableImg}
      src={tableImage}
      alt="시흥 거모 호반써밋 사업개요 표 이미지"
    />
				)}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
