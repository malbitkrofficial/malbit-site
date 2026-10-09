/* Malbit GitHub Pages — no build tools or external services required. */
(() => {
  'use strict';
  const strings = {
    ko: {
      skip:'본문으로 바로가기',navFeatures:'기능',navWorkflow:'작업 흐름',navPlatform:'플랫폼',navContact:'문의',topContact:'연락하기',
      status:'IN DEVELOPMENT · 개발 중',heroLine1:'흩어진 음성을,',heroLine2:'선명한 기록으로.',heroDesc:'녹음과 변환부터 자막 편집, 요약과 검색까지. 말빛은 소중한 대화를 더 편리하게 정리하는 로컬 AI 중심 작업 공간을 만들고 있습니다.',heroExplore:'말빛 살펴보기',heroContact:'개발자에게 문의',heroPill1:'로컬 처리 중심',heroPill2:'Windows · Android 개발 중',
      appSub:'기록 작업 공간',appWorkspace:'작업 공간',appRecord:'음성 변환',appLibrary:'보관함',appSearch:'검색',appSummary:'AI 요약',appSettings:'설정',appBreadcrumb:'보관함 / 나의 기록',appTitle:'기록 상세 보기',appSaved:'● 로컬 저장',appFile:'새로운 아이디어 회의',appMeta:'음성 기록 · 04:28 · 예시 자료',appTranscript:'자막 편집',speakerA:'화자 1',speakerB:'화자 2',cue1:'오늘 논의한 아이디어를 기록으로 남겨볼게요.',cue2:'좋아요. 중요한 내용을 바로 찾아볼 수 있겠네요.',cue3:'말빛에서 요약까지 한 번에 정리해 봅시다.',appHighlights:'핵심 내용',appSummaryText:'회의의 주요 아이디어를 정리하고, 다음 작업에서 필요한 항목을 확인합니다.',appPoint1:'주요 논의 사항 정리',appPoint2:'후속 작업 확인',appPoint3:'기록으로 다시 검색',appTimeline:'오디오 타임라인',appPlay:'오디오 미리보기',previewNote:'실제 제품의 작업 흐름을 바탕으로 구성한 인터페이스 예시',
      stripTitle:'한 곳에서 이어지는 작업',stripText:'음성 기록 → 텍스트 변환 → 편집 → 요약 → 검색',featuresTag:'WHAT MALBIT DOES',featuresTitle:'기록을 다루는 모든 순간을 위해',featuresLead:'실제 편집 작업을 중심에 두고, 필요한 기능을 차분하게 연결했습니다.',
      f1title:'음성 인식',f1desc:'녹음하거나 가져온 음성을 텍스트 기록으로 변환합니다.',f2title:'자막 · 화자 편집',f2desc:'타임스탬프를 따라 자막을 다듬고 화자별 내용을 확인합니다.',f3title:'요약 · 번역',f3desc:'긴 내용을 핵심 위주로 정리하고 언어 간 이해를 돕습니다.',f4title:'기록 검색',f4desc:'쌓여 있는 기록 속에서 필요한 문장과 순간을 찾습니다.',f5title:'기록 보관함',f5desc:'관련 오디오, 텍스트, 자막, 요약을 함께 관리합니다.',f6title:'로컬 AI 중심',f6desc:'인터넷이 없는 환경에서도 사용할 수 있는 로컬 작업을 지향합니다.',
      workflowTag:'DESIGNED FOR YOUR FLOW',workflowTitle:'파일을 열고, 의미를 남기다.',workflowLead:'여러 도구를 오가지 않아도 기록이 자연스럽게 정리되도록.',step1title:'불러오고 기록하기',step1desc:'음성 파일 또는 녹음에서 시작',step2title:'자막과 화자 다듬기',step2desc:'시간과 내용을 맞춰 편집',step3title:'정리하고 다시 찾기',step3desc:'요약 · 검색 · 결과물 관리',
      platformTag:'BUILT WITH INTENTION',platformTitle:'사용자의 기록은, 사용자의 손에.',platformDesc:'말빛은 로컬 처리를 중심으로 설계 중입니다. Windows 데스크톱에서 시작해 Android까지 작업 경험을 확장하고 있습니다. 일부 연결 및 라이선스 기능에는 네트워크가 필요할 수 있습니다.',platformPill:'Local-first',platformDev:'개발 진행 중',platformCardHead:'당신의 기록을 위한 공간',platformCardTitle:'집중할 수 있도록, 단순하게.',platformCardDesc:'기능보다 작업의 흐름을 먼저 생각합니다.',
      contactTag:'SAY HELLO',contactTitle:'더 좋은 기록의 시작을 함께.',contactDesc:'말빛은 독립 개발자가 만들어가는 프로젝트입니다. 제품이나 협업에 대한 문의를 기다립니다.',footerBrand:'말빛 · 로컬 AI 기반 음성 기록 작업 공간',footerStatus:'독립 개발 프로젝트 · 출시 준비 중'
    },
    en: {
      skip:'Skip to content',navFeatures:'Features',navWorkflow:'Workflow',navPlatform:'Platforms',navContact:'Contact',topContact:'Get in touch',
      status:'IN DEVELOPMENT',heroLine1:'From scattered audio',heroLine2:'to clear records.',heroDesc:'From transcription to subtitle editing, summaries, and search—Malbit is building a thoughtful, local-AI-centered workspace to help you get more from every conversation.',heroExplore:'Explore Malbit',heroContact:'Contact the developer',heroPill1:'Local processing first',heroPill2:'Windows · Android in development',
      appSub:'Recording workspace',appWorkspace:'WORKSPACE',appRecord:'Transcription',appLibrary:'Library',appSearch:'Search',appSummary:'AI summary',appSettings:'Settings',appBreadcrumb:'Library / My records',appTitle:'Record details',appSaved:'● Saved locally',appFile:'Ideas and planning meeting',appMeta:'Audio record · 04:28 · Example',appTranscript:'Subtitle editor',speakerA:'Speaker 1',speakerB:'Speaker 2',cue1:'Let’s keep a record of the ideas we discussed.',cue2:'Great. We can find the important parts later.',cue3:'Let’s put the highlights together in Malbit.',appHighlights:'HIGHLIGHTS',appSummaryText:'Bring the meeting’s ideas together and identify useful next steps.',appPoint1:'Key topics and decisions',appPoint2:'Next steps to review',appPoint3:'Find the moments again',appTimeline:'Audio timeline',appPlay:'Audio preview',previewNote:'Illustrative interface based on Malbit’s intended workflow',
      stripTitle:'One connected workspace',stripText:'Record → Transcribe → Edit → Summarize → Find',featuresTag:'WHAT MALBIT DOES',featuresTitle:'Built for every part of your workflow',featuresLead:'Thoughtful tools centered on the real work of editing and reviewing.',
      f1title:'Speech to text',f1desc:'Turn recordings and imported audio into searchable text.',f2title:'Subtitle and speaker editing',f2desc:'Refine captions with timestamps and speaker context.',f3title:'Summaries and translation',f3desc:'Condense long conversations and work across languages.',f4title:'Record search',f4desc:'Find the sentence or moment you need in your library.',f5title:'Organized library',f5desc:'Keep audio, transcripts, captions, and summaries together.',f6title:'Local AI first',f6desc:'Designing key workflows to run locally, including offline.',
      workflowTag:'DESIGNED FOR YOUR FLOW',workflowTitle:'From audio to something meaningful.',workflowLead:'Keep the process connected instead of switching between tools.',step1title:'Bring in your audio',step1desc:'Start from recordings or files',step2title:'Edit with context',step2desc:'Review subtitles and speakers',step3title:'Organize and rediscover',step3desc:'Summaries, search, and exports',
      platformTag:'BUILT WITH INTENTION',platformTitle:'Your recordings, in your hands.',platformDesc:'Malbit is being designed around local processing. Starting on Windows, we are expanding the experience to Android. Certain connectivity and licensing features may require internet access.',platformPill:'Local-first',platformDev:'In development',platformCardHead:'A home for your recordings',platformCardTitle:'Made for focus, not clutter.',platformCardDesc:'The workflow comes before the features.',
      contactTag:'SAY HELLO',contactTitle:'Better records start here.',contactDesc:'Malbit is an independent software project in development. Questions about the product or potential collaboration are welcome.',footerBrand:'Malbit · Local-first AI transcription workspace',footerStatus:'Independent project · In development'
    }
  };
  const buttons = document.querySelectorAll('[data-lang]');
  function setLang(lang) {
    if (!Object.prototype.hasOwnProperty.call(strings, lang)) return;
    const dict = strings[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict,k)) el.textContent = dict[k];
    });
    buttons.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang)));
    document.title = lang === 'ko' ? '말빛 Malbit — 기록을 더 선명하게' : 'Malbit — Make every word count';
    try { localStorage.setItem('malbit-site-lang',lang); } catch (_) { /* optional */ }
  }
  buttons.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
  let initial = 'ko';
  try { const stored = localStorage.getItem('malbit-site-lang'); if (stored === 'en') initial = 'en'; } catch (_) { /* optional */ }
  setLang(initial);

  // Deterministic decorative waveform: a visual illustration, not live audio data.
  const bars = document.getElementById('wave-bars');
  if (bars) {
    const ns = 'http://www.w3.org/2000/svg';
    for (let i = 0; i < 125; i++) {
      const amplitude = Math.abs(Math.sin(i * 1.93) * Math.cos(i * .37)) * 20 + Math.abs(Math.sin(i * .27)) * 6 + 2;
      const bar = document.createElementNS(ns, 'rect');
      const x = 2 + i * 5.74;
      bar.setAttribute('x', x.toFixed(1));
      bar.setAttribute('y', (31 - amplitude).toFixed(1));
      bar.setAttribute('width', '2.8');
      bar.setAttribute('height', (amplitude * 2).toFixed(1));
      bar.setAttribute('rx', '1.4');
      bar.setAttribute('fill', i < 24 ? '#4e9398' : '#b0c2ba');
      bars.appendChild(bar);
    }
  }
})();
