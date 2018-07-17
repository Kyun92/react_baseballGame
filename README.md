# Baseball Game 
#### [Demo](https://kyun92.github.io/react_baseballGame/)
---
## Goal
#### 흔하디 흔한 숫자야구를 리액트로 구현하는 연습을 하고 있다.
#### 정말 흔한 기초 알고리즘이지만,
#### 리액트로 구현된 예제 코드가 없기에 스스로가 새로운 것을 만들어본다는 즐거움을 느낄 수 있을 것 같아 이 주제를 선정하였다.

---
## Todo
- 리액트스럽게 탬플릿을 적용하기
- input 값엔 중복, 4자리 이하 허용 X,
- ? 버튼을 누를때마다 ResultList 하위의 Result 컴포넌트를 이용해서 결과창 보여주기
- 자신에 입맛에 맞게 스타일링 하기 (중요 x)
- 시작버튼을 통해 number 을 받아와도 되고 처음 화면이 시작할때 받아와도 됩니다. ( 선택 )
---
## State 
```
state = {
    number: Arr,            // 맞춰야할 숫자 배열
    value: Str,             // input value
    input: [
      {
        value: Str,         // 입력된 값
        strike: Num,        // strike 개수
        ball: Num,          // ball 개수
        count: Num,         // 진행 카운트
        finish: Bool,       // strike로 판별, 4개면 true
      },
    ],  
    overlap : Bool,         // value값 중복 여부 확인
    checkHomerun : Bool,    // finish 여부 확인
  };
```
---
## function
```css
startGame()       // number 생성,

handleChange()    // input 입력 값 set, 중복 여부 체크

handleCreate()    // input 배열 생성, 4자리가 아니며, 중복숫자 존재하면 return, 

checkInputData()  // value값 체크하여 input 객체 생성

handleKeyPress()  // 엔터키 눌렀을때 실행, !4자리, 중복 허용 X

checkOverlap()    // value 중복 여부 확인

resetState()      // state 초기화

dotCount()        // props로 받은 strike, ball의 개수 만큼 ' ● ' 리턴 
```
---
## Component 
### `<App />`
> 부모 컴포넌트, state와 함수들을 정의하고 자식들에게 전달
### `<BaseballTemplate />`
>  틀, dump Component로 다른 컴포넌트들을 화면에 뿌려주는 역할, 조건부 렌더링
### `<Form />`
> input 가지고 value값 컨트롤
### `<ResultList />`
> Result 컴포넌트가 담길 틀, input 배열을 기반으로 Result 렌더링, Result생성시 스크롤 하단 고정
### `<Result />`
> input값을 시각화
### `<Homerun />`
> checkHomerun 값에 따라 `<Form />` 대신 렌더링 
---
## 느낀점
리액트를 배우고 처음 진행해본 프로젝트(?)라 처음엔 걱정 반이었지만, 느낀점은 결국 리액트도 자바스크립트의 라이브러리일뿐, 익숙해지기만 하면 생각보다 쉽게 진행 할 수 있었다. state에 따라 UI를 컨트롤 할 수 있다는 점이 특히 인상적이었다.

### 배운것
- 리액트에서 함수 다루기
> 사실 이점이 리액트를 처음 입문했을때 가장 어려운 점이었다. 익숙하지 않은 문법을 만나(es6, JSX, ...) 처음엔 막연한 어려움이였지만 결국 자바스크립트라는 점. 사용법만 알면 일반 함수 다루기와 별반 다를바 없었다.
- state 값에 따른 렌더링
> 삼항연산자로 쉽게 조건부 렌더링을 할 수 있다는 점은 제이쿼리로 노가다로 하던 것에 비하면 정말 편했다.
- 잊고 있던 css
> 최근 css를 다룰 기회가 별로 없었기에 잊고 있었다가 진행하면서 다시 상기되었다.
- react projeck bulid, Github Page에 배포
> 처음 리액트 프로젝트를 빌드, 배포
- 마크다운
> READEME 를 작성하기 위해 써보고 있는데 생각보다 편리하다. 맞게 쓰고 있는진 모르겠지만.

### 궁금증
- 부모 컴포넌트에 함수를 다 넣어버리고 자식들에게 뿌려주는게 맞을까?
> 정말 작디 작은 프로젝트였지만, 그럼에도 점점 불어나는 App컴포넌트를 보면서 규모가 큰 프로젝트에서는 어떻게 함수와 state를 관리 하는지 궁금해졌다.
- 어떤 값을 state로 넣어야 하는가
> ~~state.start 경우 처음 스타트 버튼 클릭시에만 사용된다. 하지만 리액트가 state와 props가 변경시에만 리렌더링이 되는 것으로 알고 있어서 state 안에 넣어 놨지만, 다른 방법이 있지 않을까?~~  
> props가 변경되어도 렌더링이 된다. 이것을 이용해서 start를 state 밖에 정의해 props로 넘겨주니 기존과 같이 동일하게 동작한다. (180713)
- 컴포넌트 생성시 css transition을 주려면 어떻게 해야할까?
> 아마 ' Sass '나 ' styled-components '를 사용하면 될거 같긴 한데 처음 개발할때 고려하지 않은 점이 아쉽다.

---
## NEXT
### 1. Sass, styled-components 등 css 모듈 이용해보기
### 2. API 다뤄보기
### 3. 조금 더 큰 규모의 프로젝트 

---
## 도움받은 곳


#### [숫자야구 소스코드 - zerocho 블로그](https://www.zerocho.com/category/JavaScript/post/573469602f5a261700434e03)
#### [리액트 - Velopert](https://velopert.com/reactjs-tutorials)
#### [React projeck build, gh-pages](https://github.com/gitname/react-gh-pages)