export const profile = {
  name: '이종학',
  school: '아주대학교 소프트웨어학과',
  graduation: '2027년 2월 졸업 예정',
  gpa: '4.23 / 4.50',
  majorGpa: '4.35 / 4.50',
  educationPeriod: '2020.03 - 2027.02 졸업 예정',
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
    title: '말벗 - ROS2 반려로봇',
    shortTitle: '말벗',
    period: '2026.05 - 2026.11',
    context: 'AI·SW마에스트로 · 3인 팀',
    summary: '음성 대화, 자율주행, 홈 모니터링을 지원하는 ROS2 반려로봇',
    role: '통합 실행 구조 구축, 통합 모니터링 도구 개발, 단일 보드 통합 및 안정화, 사람 추적',
    contributions: [
      '상태 머신과 YAML 기능 명세를 도입해 추적, 순찰, 낙상 대응 등 15개 기능의 실행·취소·선점 정책 통합',
      'CPU 사용률, 토픽 수신율, Action 상태를 같은 시간축에 기록하는 도구 개발.',
      '단일 Jetson 보드에서 구독 방식과 Fast DDS 설정을 조정해 대기 중 CPU 사용률과 RGB-D 수신율을 개선.',
      'RGB-D와 2D LiDAR로 사람의 위치를 추정하고 Nav2와 연동해 추종 주행 구현',
    ],
    technologies: ['ROS2', 'Python', 'C++', 'Nav2', 'Fast DDS', 'Gazebo'],
    repository: 'https://github.com/SWM-malbut/malbut',
  },
  {
    slug: 'raspberry-pi',
    title: 'Galagon - Raspberry Pi 대전 슈팅게임',
    shortTitle: 'Galagon',
    period: '2024.11',
    context: '시스템프로그래밍 · 4인 팀',
    summary: 'Raspberry Pi 4대를 TCP로 연결한 2인 대전 슈팅게임',
    role: '게임 로직 구현, Object Pool과 고정 타임스텝 최적화, LED 화면 규격 공동 설계',
    contributions: [
      'C++로 게임 서버의 입력 처리, 이동과 충돌 판정, 게임 객체의 상태와 생명주기 관리 구현',
      'Object Pool로 탄환과 이펙트를 재사용하고, 1 ms 고정 타임스텝을 적용해 게임 갱신과 화면 송신 주기를 분리',
      'LED 담당자와 64 × 32 화면 배열 및 색상 코드 규격을 합의하고, 이전 프레임과 달라진 픽셀만 갱신하도록 공동 설계',
    ],
    technologies: ['C++', 'TCP Socket', 'Raspberry Pi', 'GPIO'],
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
  { title: '충남대학교 SW-IT Contest', result: '동상', period: '2026.10', note: '팀 대회' },
  { title: '동아리·소학회·진로 콘테스트', result: '금상', period: '2025.05', note: 'ANSI 단체 수상' },
  { title: '제10회 경인지역 대학 연합 프로그래밍 경시대회 shake!', result: '장려상 · 7위', period: '2025.01', note: 'shake! 2024 · 개인전' },
  { title: '아주대학교 프로그래밍 경시대회 APC', result: '대상 · 1위', period: '2024.06', note: 'Div.1 · 개인전' },
  { title: '잡다 개발자 경진대회 디챔스', result: '3위', period: '2023.10' },
];

export interface Activity {
  title: string;
  role?: string;
  period?: string;
  url?: string;
  profiles?: { platform: string; result?: string; handle: string; url: string; color: 'orange' | 'cyan' }[];
  events?: { title: string; period: string; role?: string }[];
}

export const activities: Activity[] = [
  {
    title: '대회 운영',
    events: [
      { title: '아주대학교 프로그래밍 경시대회 APC', role: '총괄', period: '2025 · 2026' },
      { title: '경인지역 대학 연합 프로그래밍 경시대회 shake!', role: '총괄', period: '2025 - 2026.01' },
      { title: '전국 대학생 프로그래밍 대회 동아리 연합 UCPC', role: '운영진', period: '2025.03 - 2026.08' },
    ],
  },
  {
    title: '알고리즘 동아리 ANSI',
    period: '2024.03 - 현재',
    events: [
      { title: '기초, 심화 알고리즘 스터디 운영 및 강의', period: '2025.03 - 2026.06' },
    ],
  },
  {
    title: '아주대학교 네트워크 시스템 연구실 학부연구 스터디',
    role: '네트워크 시스템 논문 분석 및 발표, Linux 커널 패킷 수신 코드에서 GRO 처리 흐름 추적',
    period: '2025.07 - 2025.09',
  },
  {
    title: 'NYPC 전략 프로그래밍',
    role: '예선 12위 / 832팀',
    period: '2026.07',
  },
  {
    title: '국제 대학생 프로그래밍 경시대회 ICPC',
    period: '2024 - 2026',
    events: [
      { title: '2026 ICPC Asia Seoul Regional Contest, 31위', period: '2026.11' },
      { title: '2025 ICPC Asia Seoul Regional Contest', period: '2025.11' },
      { title: '2024 ICPC Asia Seoul Regional Contest', period: '2024.11' },
    ],
  },
  {
    title: '온라인 프로그래밍 대회',
    period: '2023.03 - 현재',
    profiles: [
      { platform: 'Codeforces', result: 'Master, 2116', handle: 'doraji_muchim', url: 'https://codeforces.com/profile/doraji_muchim', color: 'orange' },
      { platform: 'AtCoder', handle: 'ricenice', url: 'https://atcoder.jp/users/ricenice', color: 'cyan' },
    ],
  },
];

export const education: Activity[] = [
  {
    title: 'AI·SW마에스트로 17기',
    role: '연수생',
    period: '2026.05 - 2026.11',
  },
  {
    title: '삼성전자 DX부문 동계 SW 역량 강화 특강',
    role: '수료',
    period: '2022.01 - 2022.02',
  },
];
