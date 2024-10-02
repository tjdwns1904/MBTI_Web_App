# MBTI WEB APPLICATION

MBTI 검사 웹사이트입니다.

## 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [기술 스택](#기술-스택)
3. [설치 방법](#설치-방법)
4. [프로젝트 실행](#프로젝트-실행)
5. [애플리케이션 실행](#애플리케이션-실행)

## 프로젝트 소개

MBTI 검사를 진행할 수 있는 웹사이트로 사용자는 테스트 진행 및 결과 확인을 할 수 있습니다.  
또한, 다른 성격 유형들과 그 특징들을 살펴볼 수 있습니다.   
베트남어와 한국어 지원으로 한국인과 베트남인 모두 사용 가능합니다.

## 기술 스택

- React
- Node.js
- NPM

## 설치 방법

1. 먼저 프로젝트를 클론합니다:

```bash
git clone https://github.com/tjdwns1904/mbti-web-app.git
```

2. 프로젝트 디렉토리로 이동합니다:

```bash
cd mbti-web-app
```

3. 필요한 패키지를 설치합니다:

Yarn 사용 시:

```bash
yarn install
```

NPM 사용 시:

```bash
npm install
```

## 프로젝트 실행

로컬 서버에서 프로젝트를 실행하려면 다음 명령어를 사용합니다:

Yarn 사용 시:

```bash
yarn start
```

NPM 사용 시:

```bash
npm start
```

실행 완료 후, 브라우저에서 http://localhost:3000 을 열어 애플리케이션을 확인할 수 있습니다.

## 애플리케이션 실행

애플리케이션 실행 후, 페이지 우측 상단에서 언어를 설정할 수 있습니다(베트남어/한국어).    
![언어](https://github.com/tjdwns1904/mbti-web-app/blob/master/screenshots/lang.png)

메인 페이지 하단의 '검사 시작' 버튼을 누르면 검사를 시작할 수 있습니다.  
![검사 시작](https://github.com/tjdwns1904/mbti-web-app/blob/master/screenshots/start.png)

해당 문항들에 대한 답변을 선택할 시, 다음 문항으로 넘어가게 됩니다. 이후에도, 문항들에 대한 답변 수정 가능합니다.  문항들은 상단의 V자 버튼으로 다시 살펴보실 수 있습니다.    
![문항](https://github.com/tjdwns1904/mbti-web-app/blob/master/screenshots/test.png)

좌측 상단의 로고를 클릭하시면, 메인 페이지로 돌아가시게 됩니다.    
![메인으로 돌아가기](https://github.com/tjdwns1904/mbti-web-app/blob/master/screenshots/toMain.png)

모든 문항들에 답변을 끝내면, 그에 맞는 결과를 보실 수 있습니다.    
![결과](https://github.com/tjdwns1904/mbti-web-app/blob/master/screenshots/result.png)

메인 페이지 하단의 '성격 유형 알아보기' 버튼을 누르면, 다른 성격 유형들을 보실 수 있습니다.    
![유형 둘러보기](https://github.com/tjdwns1904/mbti-web-app/blob/master/screenshots/types.png)

상단의 V자 버튼으로 각 유형들과 그 특징들을 보실 수 있습니다.    
![유형](https://github.com/tjdwns1904/mbti-web-app/blob/master/screenshots/viewTypes.png)
