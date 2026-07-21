import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",
  title: "품격 있는 일상을 완성하는 단지 설계",
  description:
    "시흥 거모 호반써밋은 지하 2층부터 지상 24층, 4개동, 총 353세대 규모로 조성되며 쾌적한 단지 배치와 조경, 스마트 커뮤니티를 통해 일상과 휴식, 건강과 편의가 조화롭게 이어지는 주거 공간을 제안합니다.",
  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "시흥 거모 호반써밋 단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",
      title: "쾌적한 생활을 고려한 단지 배치",
      description:
        "시흥 거모 호반써밋은 13.40%의 낮은 건폐율을 바탕으로 채광과 통풍, 동간거리와 입주민의 보행 동선을 고려한 쾌적한 단지 환경을 계획하였습니다.",
      image: layoutImage,
      alt: "시흥 거모 호반써밋 단지 배치도",
    },
    {
      id: "complex-design",
      label: "호수 배치도",
      title: "호반써밋 브랜드 특화설계",
      description:
        "조경과 휴게 공간, 보행 동선을 유기적으로 연결하고 총 533대, 세대당 약 1.5대의 주차공간을 확보해 입주민의 편안한 생활을 고려했습니다.",
      image: designImage,
      alt: "시흥 거모 호반써밋 단지 특화설계",
    },
    {
      id: "community-space",
      label: "스마트 커뮤니티",
      title: "건강·교육·문화·편의를 담은 커뮤니티",
      description:
        "헬스케어 스마트미러와 스마트 원격 건강관리, 전자도서관, 무인 로봇카페, 스마트 플레이존 등 입주민의 건강과 여가, 교육을 고려한 특화 커뮤니티가 마련됩니다.",
      image: communityImage,
      alt: "시흥 거모 호반써밋 스마트 커뮤니티 시설",
    },
  ],
};