export const profile = {
  name: '이종학',
  focus: '알고리즘 문제 해결',
  school: '아주대학교 소프트웨어학과',
  graduation: '2027년 2월 졸업 예정',
  gpa: '4.23 / 4.50',
  majorGpa: '4.35 / 4.50',
  educationPeriod: '2020.03 — 2027.02 졸업 예정',
  github: 'https://github.com/joonghak',
  githubHandle: 'joonghak',
  email: 'jonghak9028@gmail.com',
};

export const skills = [
  { label: '언어', values: ['C++', 'Python'] },
  { label: '프레임워크', values: ['ROS2'] },
  { label: '개발 도구', values: ['Linux', 'Git', 'Jira'] },
];

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  period: string;
  context: string;
  summary: string;
  role: string;
  contributions: string[];
  technologies: string[];
  repository: string;
}

export const projects: Project[] = [
  {
    slug: 'malbut',
    title: '말벗 — ROS2 반려로봇',
    shortTitle: '말벗',
    period: '2026.05 — 진행 중',
    context: '소프트웨어마에스트로 · 3인 팀',
    summary: '음성 대화, 자율주행, 홈 모니터링을 지원하는 ROS2 반려로봇',
    role: '로봇 런타임, 사람 추적, 실기기 통합, 시뮬레이션과 측정 도구',
    contributions: [
      '팀 협의로 기능별 책임과 공통 인터페이스를 정리하고 미션 실행과 취소, 자원 중재 구현',
      'RGB-D와 LiDAR 관측을 연결한 사람 추적, 기능별 Launch와 실기기 Bringup 구성',
      'Fast DDS 정지 문제 해결, SHM 설정 변경 후 실기기 RGB 영상 평균 약 10 Hz 수신 확인',
    ],
    technologies: ['ROS2', 'Python', 'C++', 'Nav2', 'Fast DDS', 'Gazebo'],
    repository: 'https://github.com/SWM-malbut/malbut',
  },
  {
    slug: 'raspberry-pi',
    title: 'Raspberry Pi 대전 슈팅게임',
    shortTitle: 'Raspberry Pi 대전 슈팅게임',
    period: '2024.11',
    context: '시스템프로그래밍 · 4인 팀',
    summary: 'Raspberry Pi 4대와 LED 패널을 연결한 2인 대전 게임',
    role: '주요 게임 로직, 장치 연동, 팀원들과 통합 디버깅',
    contributions: [
      '게임 객체의 상태와 생명주기 관리, Object Pool로 객체 생성과 메모리 할당 비용 절감',
      '게임 루프와 화면 전송 주기를 나눠 구현하고 컨트롤러와 LED 출력 장치 연동',
      '프레임 경계 처리 누락을 확인하고 송신 주기 조정으로 LED 좌표 밀림 증상 완화',
    ],
    technologies: ['C++', 'TCP Socket', 'pthread', 'Raspberry Pi', 'GPIO'],
    repository: 'https://github.com/joonghak/cpp-garaga',
  },
];

export interface Award {
  title: string;
  result: string;
  period: string;
  note?: string;
}

export const awards: Award[] = [
  { title: '대학생 프로그래밍 경시대회 ICPC 예선', result: '교내 대상 · 1위', period: '2025.10', note: '아주대학교 · 3인 팀' },
  { title: '동아리·소학회·진로 콘테스트', result: '금상', period: '2025.05', note: 'ANSI 단체 수상' },
  { title: '제10회 경인지역 대학 연합 프로그래밍 경시대회 shake!', result: '장려상 · 7위', period: '2025.01', note: 'shake! 2024 · 개인전' },
  { title: '대학생 프로그래밍 경시대회 ICPC 예선', result: '교내 대상 · 1위', period: '2024.10', note: '아주대학교 · 3인 팀' },
  { title: '아주대학교 프로그래밍 경시대회 APC', result: '대상 · 1위', period: '2024.06', note: 'Div.1 · 개인전' },
  { title: '잡다 개발자 경진대회 디챔스', result: '3위', period: '2023.10' },
];

export interface Activity {
  title: string;
  role?: string;
  period: string;
  url?: string;
  profiles?: { platform: string; handle: string; url: string; color: 'orange' | 'cyan' }[];
  events?: { title: string; period: string }[];
}

export const activities: Activity[] = [
  {
    title: '아주대학교 프로그래밍 경시대회 APC',
    role: '총괄',
    period: '2025 · 2026',
  },
  {
    title: '경인지역 대학 연합 프로그래밍 경시대회 shake!',
    role: '총괄',
    period: '2025 — 2026.01',
    url: 'https://shake.codes/',
  },
  {
    title: '전국 대학생 프로그래밍 대회 동아리 연합 UCPC',
    role: '운영진',
    period: '2025.03 — 2026.08',
  },
  {
    title: '알고리즘 동아리 ANSI',
    role: '부회장 2025–2026',
    period: '2024.03 — 현재',
    url: 'https://ansi.ajou.club/',
  },
  {
    title: '아주대학교 네트워크 시스템 연구실',
    role: '학부연구 스터디',
    period: '2025.07 — 2025.09',
  },
  {
    title: 'NYPC 전략 프로그래밍',
    role: '예선 12위 / 832팀',
    period: '2026.07',
  },
  {
    title: '삼성 대학생 프로그래밍 경진대회 SCPC',
    period: '2025 · 2026',
  },
  {
    title: '국제 대학생 프로그래밍 경시대회 ICPC',
    period: '2024 — 2025',
    events: [
      { title: '2025 ICPC Asia Yokohama Regional Contest', period: '2025.12' },
      { title: '2025 ICPC Asia Seoul Regional Contest', period: '2025.11' },
      { title: '2024 ICPC Asia Jakarta Onsite Regional Contest', period: '2024.12' },
      { title: '2024 ICPC Asia Seoul Regional Contest', period: '2024.11' },
    ],
  },
  {
    title: '온라인 프로그래밍 대회',
    period: '2023.03 — 현재',
    profiles: [
      { platform: 'Codeforces', handle: 'doraji_muchim', url: 'https://codeforces.com/profile/doraji_muchim', color: 'orange' },
      { platform: 'AtCoder', handle: 'ricenice', url: 'https://atcoder.jp/users/ricenice', color: 'cyan' },
    ],
  },
];

export const education: Activity[] = [
  {
    title: '소프트웨어마에스트로 17기',
    role: '연수생',
    period: '2026 — 현재',
  },
  {
    title: '삼성전자 DX부문 동계 SW 역량 강화 특강',
    role: '수료',
    period: '2022.01 — 2022.02',
  },
];
