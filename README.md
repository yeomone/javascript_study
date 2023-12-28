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
### 데이터 타입 연산자
* typeof 데이터; or typeof(데이터);로 작성
* 2개 이상의 데이터를 쓸 땐 괄호에 묶어준다
* `ex) console.log(typeof (a+b));`
* 묶지 않을 시 앞에 있는 데이터의 타입만 나온다
* 숫자+문자 = 문자, 문자가 하나라도 들어가면 문자가 된다
* `ex) console.log(typeof (1+'1'));`
* null = 존재하는 변수 값을 제거해야할 때 사용한다
* 데이터 = 0;은 숫자를 초기화 할 때 사용한다
------------------------------------------------
### 배열
* 2개 이상의 데이터를 변수에 저장하는 방법
* 배열 생성과 호출
* 1. `let 변수명 = [배열, 배열, 배열 ...]`
* 2. `let 변수명 = [new Array(배열, 배열, 배열 ...)]`
* 3. `변수명 = new Array(n)` 
* 출력 : `console.log(${변수명[n]})`
* 배열 값 추가, 삭제 메서드
* `console.push, console.unshift` = 추가
* `console.pop, console.shift` = 제거
* length를 제한해서 추가
* `const 변수명 = new Array(length값)`
* `변수명[index] = '대입값';`
* length 없이 추가
* `const 변수명 = new Array();`
* `변수명.push('대입값');`
### 객체
* 특정 값에 해당되는 속성을 추가해서 데이터 관리를 용이함
* `const 변수명 = {속성: 값, 속성: 값, 속성: 값 ...}`
* 객체 속성 제거 `delete 변수명.속성;`
* 객체 속성 추가 `변수명.속성 = 값;`
-------------------------------------------
### BOM
* 
### DOM
* dom 트리를 구성하는 객체 → 노드(Node)
* HTML 요소를 가리키는 객체 → HTML 요소 노드
* 텍스트를 가리키는 객체 → 텍스트 노드
* 탭, 공백, 줄바꿈 → 공백 노드
* getElementsByTagName → 지정된 태그 이름을가진 모든 HTML 요소를 찾아 HTML 노드로 반환합니다
* `ex) const h1Tag = document.getElementsByTagName('h1')`
* HTML에 TagNode가 2개 이상일 때 그 중 1개만 동적인 기능이 적용되어 DOM으로 등록이 필요한 거라면 변수 지정 시 [index]설정하고 대입하기
* `ex) const ulTag = document.getElementsByTagName('ul')[0]`
* HTML에 TagNode가 2개 이상일 때 그 중 여러 개에 동적인 기능이 적용되어 DOM이 된다면 변수 지정시에는 [index]없이 대입하고 해당 DOM 변수 호출 시 필요한 경우 [index] 사용하기
* `ex) const liTag = ulTag.getElementsByTagName('li')`
* `console.log(liTag[0]);`
* `console.log(liTag[1]);`
* `console.log(liTag[2]);`
* DOM Node 변수 지정 시
* HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용
* DOM Node 변수를 이용한 동적인 결과를 만들어야 할 때는 직접적인 접근으로 대상을 하나씩 개별인식하게 만들어야한다. [index]
* getElementsByClassName → 지정된 클래스 이름을 가진 모든 HTML 요소를 찾아 HTML 노드로 반환합니다
* `ex) const titleCls = document.getElementsByClassName('title')`
* 부모 태그를 지정해준 후에 자식 태그 지정
* `const ulTag = document.getElementsByTagName('ul')[0]`
* `const liListCls = ulTag.getElementsByClassName('list')`
* getElementById → 지정된 아이디 이름을 가진 모든 HTML 요소를 찾아 HTML 노드로 반환합니다
* Element 뒤에 s 붙이지 않기
* `ex) const main_title = document.getElementById('main_title')`
* 명시적 형변환 (개발자가 직접 데이터 타입을 결정)
* `ex) let a = 10; -> console.log(typeof a) = number`
* `a = '10'; -> console.log(typeof a) = string`
* 암시적 형변환 (자바스크립트가 동의없이 자동으로 형변환)
* `console.log(Number(age))`
----------------------------
## value
* form 태그에 삽입되는 값 속성(input, option, select, button, textarea)
* form 태그 내에 작성했을 땐 미리 입력된 값 표현 가능
* javascript의 DOM.속성 `ex) DOM.value` 로 처리했을 떈 해당 DOM의 미리 입력된 값부터 사용자가 입력하는 신규 값까지 모두 인식할 수 있다.
1. 쇼핑몰의 상품 수량
2. 쇼핑몰의 총 주문 가격
3. 예약페이지의 여행 인원 수 등등...
* 주의사항 -> value속성은 form 전용이므로 다른 태그일 때 해당 값을 알고 싶다면 다른 속성 및 메서드를 사용해야 한다.
* 주의사항 -> `DOM.value`로 값 처리 시 숫자를 쓰더라도 문자열(string)으로 인식하기 때문에 필요한 경우`Number()` 메서드를 활용해 (Number)데이터 타입으로 변환해야 한다. ex `Number(객체.value())`