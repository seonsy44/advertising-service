# advertising-service
원티드 프리온보딩 과제: 광고 현황 대시보드 및 광고 관리 서비스<br/>
[📎 배포링크 바로가기](https://advertising-service.vercel.app/dashboard)

<br/>

# 데모
[Figma](https://www.figma.com/file/xKX8f8BAdw13BCSoxt8sRq/advertising-service?t=bv2K0hAZuRdF1vQp-0)
<details>
<summary>대시보드</summary>
<img src="https://user-images.githubusercontent.com/76088728/205863739-2db9030e-88fe-4b6c-964a-2f6ce7a8bc2e.gif" />
</details>

<details>
<summary>광고관리</summary>
<img src="https://user-images.githubusercontent.com/76088728/205863831-55e73482-62ee-46a4-879e-3f103b7260fb.gif" />
</details>

<br/>

# 실행 방법
### 1. repository clone
```
$ git clone https://github.com/seonsy44/advertising-service.git
```

### 2. 의존성 설치 및 실행
```
npm install
npm start
```

<br/>

# 기술스택
- React
- TypeScript
- Styled-Components
- Axios

<br/>

# 폴더구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜PageTitle.tsx
 ┃ ┃ ┣ 📜SideBar.tsx
 ┃ ┃ ┣ 📜SideBarMenu.tsx
 ┃ ┃ ┣ 📜TopBar.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜Container.tsx
 ┃ ┣ 📜DatePicker.tsx
 ┃ ┣ 📜DropdownDouble.tsx
 ┃ ┣ 📜DropdownLarge.tsx
 ┃ ┣ 📜DropdownSmall.tsx
 ┃ ┣ 📜OptionLarge.tsx
 ┃ ┣ 📜OptionSmall.tsx
 ┃ ┗ 📜OptionsRaw.tsx
 ┣ 📂context
 ┃ ┣ 📜AdsContext.tsx
 ┃ ┗ 📜TrendContext.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAdCard.ts
 ┃ ┣ 📜useChart.ts
 ┃ ┣ 📜useDatePicker.ts
 ┃ ┣ 📜useDropdown.ts
 ┃ ┣ 📜useDropdownDouble.ts
 ┃ ┗ 📜usePageTitle.ts
 ┣ 📂http
 ┃ ┗ 📜httpClient.ts
 ┣ 📂pages
 ┃ ┣ 📂AdManagement
 ┃ ┃ ┣ 📜AdCard.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂Dashboard
 ┃ ┃ ┣ 📜PerformaceSummary.tsx
 ┃ ┃ ┣ 📜PerformanceCard.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂service
 ┃ ┣ 📜AdsService.ts
 ┃ ┗ 📜TrendService.ts
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┣ 📜mixin.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┣ 📜conts.ts
 ┃ ┗ 📜utils.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx
 ```
