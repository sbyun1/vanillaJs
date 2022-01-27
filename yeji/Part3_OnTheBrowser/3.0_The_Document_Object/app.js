// HTML : glue 역할 (CSS와 JS를 가져오는 역할) == HTML의 Elements들을 JS를 통해 변경하고, 읽을 수 있다는 것

/* 
 console 창 -> document 작성 -> 내가 작성해둔 html 코드 출력
   - document : 우리가 접근할 수 있는 HTML을 가리키는 객체

 console 창 -> console.DIR(document) 작성 -> document의 내용 출력 (이 때, document는 그저 object 라는 걸 알 수 있음)
   - 출력된 document의 내용 중, 작성한 html 파일의 <title></title>의 내용 Momentum이 들어가있는 것을 볼 수 있다.
   ☆★ JS에서 HTML document 객체로부터 title을 가지고 올 수 있다는 것 중요 ★☆
   console 창 -> document.title 작성 -> HTML 파일의 title 출력

  여기서 봤듯이, JS는 HTML에 접근하고, 읽을 수 있게 설정되어 있다. (JS reading HTML)
  JS는 HTML을 읽어올 뿐만 아니라, update할 수도 있다.
  */
document.title = "Hello! From JS!"; 
// JS로 HTML을 변경할 수 있다.


/* 정 리 */

// JS already connected HTML
// JS already access and read HTML
// 그리고 모든 것은 document로 시작한다. (document : 모든 것들의 시작점 ∴document는 우리의 web site를 의미)

// JS에서 HTML의 항목들을 읽어올 수 있다는 것 == HTML에 항목들을 추가할 수 있다는 것