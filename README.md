# javascript(ECMAScript)
* 자바스크립트는 절차적 언어, 객체지향언어이다.
## 자바스크립트 작성위치
* `<head>`, `<body>` 내에 `<script>` 작성 가능
* 내부스크립트 `<script>...</script>`
* 외부스크립트 `<script src="url"></script>`
* 자바스크립트 성능 향상 추가 옵션 `defer`, `async`
## 자바스크립트 변수
* `변수생성키워드 생성변수명 대입연산자 대입값;`
### 변수생성 키워드 종류
1. `var` : 중복선언 거르지 못 함. ECMA Script 구버전의 오래된 변수 선언문
2. `let` : 중복선언 불가능하고 대입된 값을 언제든 변경할 수 있다.
3. `const` : 상수(변하지 않는 값), 선언과 동시에 대입이 이루어져야 한다.
### 기초 연산자
1. `=` : 대입연산자 `let x = data`
2. `+` : 연결연산자 `x + '1'`
3. `+=` : 복합대입연산자 `x += y` -> `x = x+y`
-------------------------------------------------------------