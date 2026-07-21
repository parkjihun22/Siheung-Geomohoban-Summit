const reservationData = {
  eyebrow: "RESERVATION",
  title: "모델하우스 방문예약",

  description:
    "시흥 거모 호반써밋 방문예약을 남겨주시면 담당 상담원이 순차적으로 연락드려 모델하우스 위치와 방문 가능 시간, 관람 및 상담 절차를 안내해 드립니다.",

  notice:
    "방문 전 관심 타입과 상담 희망 내용을 남겨주시면 전용 84㎡A·84㎡B 평면, 분양가, 잔여세대와 현재 적용되는 계약조건을 더욱 정확하게 안내해 드릴 수 있습니다.",

  formAction: "https://formspree.io/f/xaqrbynq",

  points: [
    {
      id: "address",
      label: "ADDRESS SMS",
      title: "모델하우스 주소 안내",
      text:
        "예약 등록 후 상담 절차에 따라 모델하우스 위치와 방문 가능 시간, 찾아오시는 길을 안내해 드립니다.",
    },
    {
      id: "unit",
      label: "UNIT CHECK",
      title: "84㎡A·84㎡B 타입 상담",
      text:
        "84㎡A와 84㎡B 타입별 평면 구성, 공간 활용과 생활 동선을 비교해 안내해 드립니다.",
    },
    {
      id: "sales",
      label: "SALES GUIDE",
      title: "분양 및 잔여세대 안내",
      text:
        "현재 확인할 수 있는 잔여세대와 동·호수, 분양가 및 적용 가능한 계약조건을 상담해 드립니다.",
    },
  ],

  fields: [
    {
      id: "name",
      name: "name",
      label: "고객명",
      type: "text",
      placeholder: "고객명을 입력해 주세요",
      required: true,
      autoComplete: "name",
    },
    {
      id: "phone",
      name: "phone",
      label: "연락처",
      type: "tel",
      placeholder: "010-0000-0000",
      required: true,
      inputMode: "tel",
      autoComplete: "tel",
      pattern: "^01[0-9][-\\s]?[0-9]{3,4}[-\\s]?[0-9]{4}$",
      title: "예: 01012345678 또는 010-1234-5678",
    },
  ],

  messageField: {
    id: "message",
    name: "message",
    label: "문의 내용",
    placeholder:
      "관심 타입, 방문 희망일과 상담받고 싶은 내용을 남겨주세요",
    rows: 5,
  },

  submitLabel: "방문예약 등록",
};

export default reservationData;
