# 오늘 뭐 먹지? 🍽️

위치 기반 "오늘 뭐 먹지" 앱. 현재 위치 주변 식당을 룰렛으로 추천해줍니다.

## 특징
- 단일 `index.html` (React + Tailwind CDN, 빌드 불필요)
- 카카오맵 장소검색으로 반경 내 식당을 가까운 순으로 표시
- ⭐ 찜은 브라우저(localStorage)에 저장 — 백엔드 없음

## 실행
카카오 **JavaScript 앱 키**가 필요합니다.
1. [developers.kakao.com](https://developers.kakao.com) → 앱 생성 → JavaScript 키 복사
2. 제품 설정 → 카카오맵 **ON**
3. 앱 설정 → 플랫폼 → Web → 사이트 도메인에 배포 주소 등록
4. 앱 첫 화면에서 키 입력

정적 파일이라 Vercel / Netlify 등에 그대로 배포됩니다.
