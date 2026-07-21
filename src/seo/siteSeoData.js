const SITE_URL = "https://cheongju-hanyanglips.com";

export const siteSeo = {
  siteName: "시흥 거모 호반써밋",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",

  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultDescription:
    "시흥 거모 호반써밋 분양안내입니다. 경기도 시흥시 거모동 1171번지 일원 시흥거모 B1블럭에 조성되는 총 353세대, 전용 84㎡A·84㎡B, 모델하우스, 분양가, 잔여세대, 공급정보와 방문예약을 확인하세요.",

  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "시흥시",
    streetAddress: "거모동 1171번지 일원 시흥거모 B1블럭",

    brands: [
      "시흥 거모 호반써밋",
      "시흥거모 호반써밋",
      "호반써밋 시흥거모 B1",
      "호반써밋",
      "호반건설",
    ],

    navigationSchemaName: "시흥 거모 호반써밋 주요 메뉴",
  },

  keywords: [
    "시흥 거모 호반써밋",
    "시흥거모 호반써밋",
    "호반써밋 시흥거모 B1",
    "시흥거모 B1블럭",
    "시흥 거모지구 호반써밋",
    "시흥 거모지구 아파트",
    "시흥 거모동 신축아파트",
    "시흥 거모 호반써밋 353세대",
    "시흥 거모 호반써밋 84A",
    "시흥 거모 호반써밋 84B",
    "시흥 거모 호반써밋 모델하우스",
    "시흥 거모 호반써밋 견본주택",
    "시흥 거모 호반써밋 분양가",
    "시흥 거모 호반써밋 잔여세대",
    "시흥 거모 호반써밋 공급정보",
    "시흥 거모 호반써밋 방문예약",
    "시흥 아파트 분양",
    "호반써밋",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      {
        name: "브랜드소개",
        path: "/Brand/intro",
      },
      {
        name: "홍보영상",
        path: "/Brand/video",
      },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      {
        name: "사업안내",
        path: "/BusinessGuide/intro",
      },
      {
        name: "분양일정",
        path: "/BusinessGuide/plan",
      },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      {
        name: "입지안내",
        path: "/LocationEnvironment/intro",
      },
      {
        name: "프리미엄",
        path: "/LocationEnvironment/primium",
      },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      {
        name: "단지배치도",
        path: "/ComplexGuide/intro",
      },
      {
        name: "호수배치도",
        path: "/ComplexGuide/detailintro",
      },
      {
        name: "커뮤니티",
        path: "/ComplexGuide/community",
      },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      {
        name: "공급안내",
        path: "/BusinessGuide/documents",
      },
      {
        name: "입주자 모집공고",
        path: "/SalesInfo/announcement",
      },
      {
        name: "인지세 납부안내",
        path: "/SalesInfo/StampTax",
      },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      {
        name: "84㎡A",
        path: "/FloorPlan/59A",
      },
      {
        name: "84㎡B",
        path: "/FloorPlan/59B",
      },
      {
        name: "E-모델하우스",
        path: "/FloorPlan/Emodel",
      },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [
      {
        name: "관심고객등록",
        path: "/Promotion/Customer",
      },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "시흥 거모 호반써밋",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 브랜드소개입니다. 호반써밋의 주거 철학과 브랜드 가치, 시흥거모 B1블럭에서 선보이는 프리미엄 주거공간을 확인하세요.",
    menu: "브랜드소개",
  }),

  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 홍보영상입니다. 호반써밋 시흥거모 B1의 단지와 입지환경, 브랜드 프리미엄 및 주거 가치를 영상으로 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 사업안내입니다. 경기도 시흥시 거모동 1171번지 일원, 지하 2층~지상 24층, 4개동, 총 353세대의 사업개요를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 분양일정 안내입니다. 특별공급과 일반공급, 당첨자 발표, 서류접수 및 정당계약 등 주요 분양일정을 확인하세요.",
    menu: "사업안내",
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 공급안내입니다. 총 353세대 중 민간분양 310세대의 공급 규모와 84㎡A·84㎡B 타입, 분양가 및 공급정보를 확인하세요.",
    menu: "분양안내",
    priority: 0.9,
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title: "입주자 모집공고 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 입주자모집공고입니다. 공급 대상과 공급금액, 84㎡A·84㎡B 타입, 청약자격, 분양일정과 계약조건을 확인하세요.",
    menu: "분양안내",
    priority: 0.9,
  }),

  stampTax: page({
    path: "/SalesInfo/StampTax",
    title: "인지세 납부안내 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 인지세 납부안내입니다. 아파트 공급계약 체결에 필요한 인지세 금액과 납부방법, 준비사항 및 유의사항을 확인하세요.",
    menu: "분양안내",
    priority: 0.7,
    changefreq: "monthly",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 입지환경입니다. 신길온천역과 평택시흥고속도로, 영동고속도로, 거모지구 생활·교육 인프라 및 주변 개발계획을 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 프리미엄입니다. 분양가상한제와 공공택지 민간분양의 희소성, 광역교통망, 생활환경, 교육환경과 호반써밋 브랜드 가치를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 단지배치도입니다. 지하 2층~지상 24층, 총 4개동으로 조성되는 단지의 동 배치와 조경, 보행동선을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 호수배치도입니다. 단지 내 동·호수 구성과 84㎡A·84㎡B 타입별 세대 위치 및 배치정보를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 커뮤니티 안내입니다. 헬스케어 스마트미러, 스마트 원격 건강관리, 전자도서관, 무인 로봇카페와 스마트 플레이존을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan84A: page({
    path: "/FloorPlan/59A",
    title: "84㎡A 평면도 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 84㎡A 평면도입니다. 총 265세대로 구성되는 84㎡A 타입의 평면구조와 공간 활용, 수납계획 및 생활동선을 확인하세요.",
    menu: "타입안내",
    priority: 0.9,
  }),

  floorPlan84B: page({
    path: "/FloorPlan/59B",
    title: "84㎡B 평면도 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 84㎡B 평면도입니다. 총 88세대로 구성되는 84㎡B 타입의 평면구조와 공간 활용, 수납계획 및 생활동선을 확인하세요.",
    menu: "타입안내",
    priority: 0.9,
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 E-모델하우스입니다. 전용 84㎡A·84㎡B 타입의 실내구조와 공간 구성, 수납계획 및 주거동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "모델하우스 방문예약 | 시흥 거모 호반써밋",
    description:
      "시흥 거모 호반써밋 관심고객등록 및 모델하우스 방문예약 페이지입니다. 분양가와 잔여세대, 동·호수, 현재 계약조건과 방문상담을 안내받으세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 시흥 거모 호반써밋",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 시흥 거모 호반써밋의 사업안내, 입지환경, 단지안내, 84㎡A·84㎡B 타입과 모델하우스 방문예약 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    value.path.toLowerCase(),
    key,
  ])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;

  return `${siteSeo.siteUrl}${path}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/customer")) {
    return seoPages.customer;
  }

  return seoPages.notFound;
};