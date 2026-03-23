(function () {
  const langToggle = document.querySelector('[data-lang-toggle]');
  const savedLang = localStorage.getItem('portfolio-lang') || 'ko';

  function applyLanguage(lang) {
    const dict = window.I18N?.[lang];
    if (!dict) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    if (langToggle) langToggle.textContent = lang === 'ko' ? 'KR / EN' : 'EN / KR';
    localStorage.setItem('portfolio-lang', lang);
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const next = (document.documentElement.lang || savedLang) === 'ko' ? 'en' : 'ko';
      applyLanguage(next);
    });
  }

  applyLanguage(savedLang);

  const projectData = {
    voda: {
      image: 'assets/images/voda.gif',
      title: 'VODA',
      subtitle: {
        ko: '시각장애인을 위한 접근성 중심 영상통화 서비스',
        en: 'A video communication service designed for visually impaired users'
      },
      meta: {
        ko: ['2023.07 - 2023.08', '기획 및 1인 Front-End', 'React · TypeScript · OpenVidu'],
        en: ['2023.07 - 2023.08', 'Planning & Solo Frontend', 'React · TypeScript · OpenVidu']
      },
      overview: {
        ko: '빠른 디지털 전환 속에서 소외될 수 있는 시각장애인을 위해, 접근성과 실사용성을 모두 고려한 영상통화 서비스를 기획했습니다.',
        en: 'Planned a video communication service focused on both accessibility and real usability for visually impaired users in rapid digital transformation.'
      },
      role: {
        ko: ['서비스 기획 및 전체 UI/UX 설계', '비장애인/시각장애인 분리 화면 설계', '스크린리더 대응을 위한 접근성 구현'],
        en: ['Service planning and full UI/UX design', 'Separated interfaces for sighted and visually impaired users', 'Implemented accessibility for screen readers']
      },
      tech: ['React', 'TypeScript', 'Redux', 'OpenVidu(WebRTC)', 'face-api.js', 'OpenCV', 'YOLOv5'],
      problem: {
        ko: '복지관 방문과 프로토타입 테스트를 통해 피드백을 반영했고, TabIndex와 Aria-Label을 적용해 NVDA 스크린리더 환경에서도 자연스럽게 탐색할 수 있도록 설계했습니다.',
        en: 'Integrated feedback from welfare-center visits and prototype tests, and applied TabIndex and Aria-Label so the service could be navigated naturally in NVDA screen-reader environments.'
      },
      features: {
        ko: ['접근성 UI와 고대비 색상 설계', '영상통화 연결 및 알림 경험 구현', '사용자 피드백 수렴을 위한 고객의 소리함'],
        en: ['Accessible UI and high-contrast color design', 'Video-call flow and notification experience', 'Voice-of-customer page for collecting feedback']
      },
      outcome: {
        ko: ['사용자 중심 설계의 중요성을 체감한 대표 프로젝트', 'SSAFY 공통 프로젝트 우수상, 특화 프로젝트 베스트 멤버, 최우수 UCC 수상'],
        en: ['Representative project that deepened my understanding of user-centered design', 'Received multiple SSAFY awards including excellence and best member recognition']
      }
    },
    haruman: {
      image: 'assets/images/haruman.png',
      title: 'HARUMAN',
      subtitle: {
        ko: '하루 소비 패턴 분석과 절약 습관 형성을 위한 금융 서비스',
        en: 'A finance service for daily spending analysis and saving habits'
      },
      meta: {
        ko: ['2023.08 - 2023.10', '기획 및 Front-End', 'React · PWA · D3 · Chart.js'],
        en: ['2023.08 - 2023.10', 'Planning & Frontend', 'React · PWA · D3 · Chart.js']
      },
      overview: {
        ko: '가계부 형태의 기록과 시각화를 결합해, 사용자가 자신의 소비를 인식하고 절약 습관을 형성하도록 돕는 서비스를 구현했습니다.',
        en: 'Implemented a service combining household-book style records and visualization so users could understand their spending and build saving habits.'
      },
      role: {
        ko: ['UI/UX 설계 및 주요 화면 구현', 'PWA 기반 모바일형 웹 설계', '차트 및 추천 기능 화면 구현'],
        en: ['UI/UX design and main-screen implementation', 'Mobile-first web structure based on PWA', 'Implemented charts and recommendation screens']
      },
      tech: ['React', 'TypeScript', 'Redux', 'PWA', 'Chart.js', 'D3', 'OpenAI API'],
      problem: {
        ko: '짧은 개발 기간 안에서 앱 같은 사용성을 구현하기 위해 PWA를 선택했고, 새 기술 도입 내용을 팀 내에 공유하며 시행착오를 줄였습니다.',
        en: 'Chose PWA to achieve app-like usability within a short timeline, and reduced trial-and-error by sharing new technical findings across the team.'
      },
      features: {
        ko: ['하루 소비 입력과 카테고리 분석', '월별 기록과 버블 차트 시각화', '절약 금액 기반 적금 추천'],
        en: ['Daily spending input and category analysis', 'Monthly history and bubble-chart visualization', 'Savings-product recommendation based on saved amount']
      },
      outcome: {
        ko: ['데이터 시각화와 서비스 기획을 함께 다룬 프로젝트', 'SSAFY 특화 프로젝트 베스트 멤버 선정'],
        en: ['Project combining data visualization and service planning', 'Selected as best member in SSAFY specialization project']
      }
    },
    od: {
      image: 'assets/images/od.jpg',
      title: 'Open The Door',
      subtitle: {
        ko: '방탈출 카페 정보 탐색과 예약을 연결한 모바일 플랫폼',
        en: 'A mobile platform combining escape-room discovery and booking'
      },
      meta: {
        ko: ['2023.10 - 2023.11', '기획 및 Front-End', 'React Native · Recoil · Google Maps', 'Oauth 2.0', 'Chat GPT API'],
        en: ['2023.10 - 2023.11', 'Planning & Frontend', 'React Native · Recoil · Google Maps']
      },
      overview: {
        ko: '정보 탐색과 예약이 분리되어 있던 불편을 해결하기 위해, 방탈출 카페 정보 제공과 예약 흐름을 한 서비스로 통합했습니다.',
        en: 'Integrated discovery and booking into one service to solve the inconvenience of escape-room information and booking being separated.'
      },
      role: {
        ko: ['UI/UX 설계와 공통 컴포넌트 구조화', '검색, 상세, 예약 핵심 화면 구현', '백엔드와 동시 개발을 위한 화면 명세 정리'],
        en: ['UI/UX design and shared component structuring', 'Implemented search, detail, and booking screens', 'Prepared screen specs for parallel frontend/backend work']
      },
      tech: ['React Native', 'TypeScript', 'Recoil', 'Styled-Components', 'Google Maps'],
      problem: {
        ko: 'Atomic Design과 CDD, MVVM 패턴을 도입해 반복 작업을 줄이고 병렬 개발 효율을 높였습니다. PDF 기준 약 50%의 개발 시간 단축 효과를 정리해두었습니다.',
        en: 'Introduced Atomic Design, CDD, and MVVM to reduce repetitive work and improve parallel development efficiency. The original portfolio reports roughly 50% time savings.'
      },
      features: {
        ko: ['인기 테마, 검색, 지도 기반 탐색', '테마 상세 및 예약 UX', 'Skeleton UI와 FlatList 기반 성능 고려'],
        en: ['Popular themes, search, and map-based exploration', 'Theme detail and booking UX', 'Performance-aware UI with Skeleton loading and FlatList']
      },
      outcome: {
        ko: ['구조화와 성능 최적화를 함께 고민한 프로젝트', 'SSAFY 자율 프로젝트 우수 프로젝트 선정'],
        en: ['Project focused on both structure and performance optimization', 'Selected as an excellent autonomous SSAFY project']
      }
    },
    rebin: {
      image: 'assets/images/5.jpg',
      title: 'ReBin',
      subtitle: {
        ko: '아두이노 기반 자동 분리수거 쓰레기통',
        en: 'An Arduino-based automatic recycling bin'
      },
      meta: {
        ko: ['대학교 프로젝트', '하드웨어 기반 문제 해결', 'Arduino'],
        en: ['University project', 'Hardware-driven problem solving', 'Arduino']
      },
      overview: {
        ko: '대학교 시절 진행한 초기 프로젝트로, 자동 분리수거 아이디어를 실제 동작 가능한 형태로 구현해본 경험입니다.',
        en: 'An early university project where I turned the concept of automatic recycling into a working hardware prototype.'
      },
      role: {
        ko: ['아이디어 구상 및 구현 참여', '센서 기반 동작 흐름 설계', '하드웨어 제어 경험 축적'],
        en: ['Participated in ideation and implementation', 'Designed sensor-based interaction flow', 'Built hands-on hardware control experience']
      },
      tech: ['Arduino Uno', 'Sensor Module', 'Ultrasonic sensor', 'Servo Motor', 'Metal Detector', 'Lightning Sensor', 'Embedded Prototype', 'etc...'],
      problem: {
        ko: '자료는 많지 않지만, 단순 아이디어에 그치지 않고 실제로 작동하는 형태를 만들며 문제 해결의 출발점을 다진 프로젝트입니다.',
        en: 'Although visual materials are limited, this project mattered because it moved beyond an idea and into a working prototype, building my foundation in problem solving.'
      },
      features: {
        ko: ['자동 분리수거 동작 구현', '센서 입력 기반 제어', '하드웨어 제작 경험'],
        en: ['Automatic recycling behavior', 'Sensor-input driven control', 'Hands-on hardware making experience']
      },
      outcome: {
        ko: ['현재 포트폴리오의 출발점이 된 문제 해결형 프로젝트', '임베디드와 서비스 개발을 모두 이해하는 시각의 기반'],
        en: ['A problem-solving project that became the starting point of this portfolio', 'A foundation for understanding both embedded systems and service development']
      }
    }
  };

  const projectRoot = document.querySelector('[data-project-root]');
  if (projectRoot) {
    const tabs = [...document.querySelectorAll('[data-project-tab]')];
    const imageWrap = document.querySelector('[data-project-image]');
    const titleEl = document.querySelector('[data-project-title]');
    const subtitleEl = document.querySelector('[data-project-subtitle]');
    const metaEl = document.querySelector('[data-project-meta]');
    const overviewEl = document.querySelector('[data-project-overview]');
    const roleEl = document.querySelector('[data-project-role]');
    const techEl = document.querySelector('[data-project-tech]');
    const problemEl = document.querySelector('[data-project-problem]');
    const featuresEl = document.querySelector('[data-project-features]');
    const outcomeEl = document.querySelector('[data-project-outcome]');

    function renderList(target, items) {
      target.innerHTML = '';
      items.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        target.appendChild(li);
      });
    }

    function renderProject(key) {
      const lang = document.documentElement.lang || 'ko';
      const data = projectData[key];
      if (!data) return;
      tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.projectTab === key));
      titleEl.textContent = data.title;
      subtitleEl.textContent = data.subtitle[lang];
      metaEl.innerHTML = '';
      data.meta[lang].forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        metaEl.appendChild(li);
      });
      if (data.image) {
        imageWrap.innerHTML = `<img src="${data.image}" alt="${data.title} preview">`;
      } else {
        imageWrap.innerHTML = `<div style="height:100%;display:grid;place-items:center;color:#64748b;font-weight:700;letter-spacing:.04em;">IMAGE PREVIEW UNAVAILABLE</div>`;
      }
      overviewEl.textContent = data.overview[lang];
      renderList(roleEl, data.role[lang]);
      renderList(techEl, data.tech);
      problemEl.textContent = data.problem[lang];
      renderList(featuresEl, data.features[lang]);
      renderList(outcomeEl, data.outcome[lang]);
    }

    tabs.forEach((tab) => tab.addEventListener('click', () => renderProject(tab.dataset.projectTab)));
    renderProject('voda');
    const observer = new MutationObserver(() => {
      const active = document.querySelector('[data-project-tab].active')?.dataset.projectTab || 'voda';
      renderProject(active);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }
})();
