# Chapter 1: 개발을 위한 Git과 Github

## Git : 파일에서 변경되는 사항을 저장하고 버전을 체계적으로 관리하는 시스템

### Git의 저장공간

- Working Directory : 내가 현재 작업하고 있는 공간 (컴퓨터 폴더)
- Staging Area : 커밋을 위한 준비 단계 (폴더의 변경 사항을 로컬 레포지토리에 반영하기 전 보관하는 단계)
  - git add 명령어로 Working Directory -> Staging Area
- Local Repository : Staging Area의 변경 사항을 반영하여 기록하는 공간
  - git commit 명령어로 Staging Area -> Local Repository

- Remote Repository : 내 컴퓨터가 아닌 깃허브에 올라가있는 변경사항
  - git push 명령어로 Local Repository -> Remote Repository
  - git clone 명령어로 Remote Repository와 Local Repository 연결

### .gitignore

- 워킹 디렉토리에서 추적되지 않아야 하는 파일 목록을 지정하는 파일
  - .env 같은 환경변수나 API 키 파일 등 보안 위험이 있는 파일들을 주로 포함

### git 명령어

- git add . : 모든 파일 staged
- git add (특정파일) : 특정 파일 staged

---

- git commit -m "커밋 메시지" : staged 된 파일들을 로컬 레포에 반영

---

- git push origin (브랜치이름) : 로컬 레포에 반영된 내용을 원격 레포로 보냄
  - origin : 원격 레포의 url을 생략할 수 있게 해주는 키워드

---

- git status : 현재 staged 상태인 파일들을 보여주는 명령어

## 브랜치(branch)란?

### 내가 작업하는 독립적인 영역

- 개발자들의 작업이 서로에게 영향을 끼치지 않기 위해 사용함.

### 브랜치 명령어

- git branch (브랜치 이름) : 브랜치 생성

---

- git checkout (브랜치 이름) : 브랜치 전환(변경 사항 포함)
- git switch (브랜치 이름) : 브랜치 전환(변경 사항 미포함)
  - git restore : 파일의 수정 내용 복원
  - 충돌이 일어날 것이라고 판단할 때는 브랜치 간 전환이 불가능하기 때문에 반드시 작업 내용을 커밋한 후 switch

---

- git merge (병합할 브랜치) : 다른 브랜치의 변경사항을 현재 브랜치에 적용하는 명령어
  - 보통 merge 명령어를 사용하지 않고 Pull Request 활용

---

- git log : 커밋 기록 조회 명령어

## Issue 와 PR

- Issue : 프로젝트의 작업 진행 현황과 기능 구현, 버그 수정, 리팩토링등의 단계를 공유하기 위해 생성함.

- PR(Pull Request) : 작업이 끝난 브랜치의 내용을 메인 브랜치로 반영하기 위해 팀원들에게 보내는 요청
