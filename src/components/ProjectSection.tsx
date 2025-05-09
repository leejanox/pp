import '../styles/ProjectSection.scss'
import ProjectCard from './project-card'

const ProjectSection = () => {
  return (
    <section className="project">
        <h1 className='title'>SCHOOL PROJECTS</h1>
        <div className='card-container'>
            <ProjectCard
                title="POLAR - 장애인 관광 정보 통합 웹페이지"
                description="춘천 관광지의 장애인 접근성 정보를 제공하는 웹페이지. 챗봇 및 맞춤 추천 기능 포함."
                image="src/assets/polar.png"
                link="https://github.com/leejanox"
                tags={["MySQL", "DB 설계", "데이터 시각화"]}
                modalContent={
                    <div>
                        <h2>POLAR - 프로젝트 상세</h2>
                         <p>팀원: 김고은, 강규상, 김민찬</p>
                        <p>장애인 접근성 정보를 기반으로 관광지, 음식점 등의 편의시설 정보를 제공하는 웹사이트를 구축하였습니다. 챗봇 추천 기능이 포함되어 있으며, 데이터베이스 스키마 설계 및 제약 조건 설정, 동적 쿼리 프로시저 작성 등을 맡았습니다.</p>
                        <p>주요 작업: DB 설계, 조건 설정, 데이터 분석, 발표용 PPT 제작</p>
                    </div>
                }
            />
            <ProjectCard
                title="AVERAGE 23 - 전력 사용량 예측 AI 플랫폼"
                description="AI 모델을 통한 전력 사용량 예측 시각화 웹 플랫폼."
                image="src/assets/average.png"
                link="https://github.com/leejanox/average23"
                tags={["React", "AI", "MySQL", "Express"]}
                modalContent={
                    <div>
                        <h2>AVERAGE 23 - 프로젝트 상세</h2>
                        <p>팀원: 김고은, 김민찬</p>
                        <p>기온 데이터를 기반으로 전력 사용량을 예측하는 AI 모델을 웹에서 시각적으로 체험할 수 있도록 구현한 플랫폼입니다. 프론트엔드, 백엔드, DB까지 아우르는 전체 아키텍처를 설계 및 구현하였으며, UI/UX 디자인과 기능 구현을 담당하였습니다.</p>
                        <p>사용 기술: React, TypeScript, TailwindCSS, Express, MySQL, Python</p>
                    </div>
                }
            />
            <ProjectCard
                title="악성 URL 탐지 및 피싱 사이트 식별 서비스"
                description="화이트리스트·SSL·WHOIS 분석을 통한 피싱 사이트 탐지 웹 서비스."
                image="src/assets/koshing_desktop_main.png"
                link="https://github.com/leejanox"
                tags={["Security", "SSL", "Domain Analysis", "Web Service"]}
                modalContent={
                    <div>
                    <h2>프로젝트 상세</h2>
                    <p>공모전 참가를 목표로 기획한 웹 서비스로, 사용자 입력 URL을 기반으로 피싱 위험 여부를 실시간으로 분석하고 차단할 수 있는 보안 시스템을 개발하였습니다. SSL 인증서, WHOIS 정보, IP 위치 등을 종합 분석하여 사용자에게 직관적인 판단 결과를 제공합니다.</p>
                    <p><strong>주요 기능:</strong></p>
                    <ul>
                        <li>화이트리스트 기반 URL 판별</li>
                        <li>SSL 인증서 및 WHOIS 정보 조회</li>
                        <li>피싱 의심 사이트 실시간 차단 경고</li>
                        <li>피해 신고 및 사용자 피드백 반영 기능</li>
                        <li>웹 및 모바일 환경 모두 대응</li>
                    </ul>
                    <p><strong>참여 목적:</strong> 2025년 ICT 한이음 드림업 공모전 제출 / 기획 및 UI·UX 설계 주도</p>
                    </div>
                }
            />
            <ProjectCard
                title="무한의 계단 (Unity 2D 미니게임)"
                description="입력에 따라 반응하는 무한 계단 오르기 Unity 기반 게임."
                image="src/assets/unity.png"
                link="https://github.com/leejanox/unity"
                tags={["Unity", "C#", "Object Pooling"]}
                modalContent={
                    <div>
                    <h2>무한의 계단 - 프로젝트 상세</h2>
                    <p>팀원: 김고은, 강규상</p>
                    <p>사용자 입력에 따라 캐릭터가 계단을 정확히 타고 오르며 반응속도와 방향 전환을 테스트할 수 있는 2D 액션 미니게임입니다. 실시간 무한 계단 생성, 캐릭터 이동, 충돌 처리, 오브젝트 재사용 등의 기능을 구현했습니다.</p>
                    <p>주요 기술: Unity, C#, Object Pooling</p>
                    </div>
                }
            />
            <ProjectCard
                title="카페 게시글 자동 수집 시스템"
                description="Python 기반 데이터 크롤링 자동화"
                image="src/assets/python.png"
                link="https://github.com/leejanox/AI_python"
                tags={["Python", "Thread", "Excel"]}
                modalContent={
                    <div>
                    <h2>카페 게시글 자동 수집 시스템 - 상세 내용</h2>
                    <p>네이버 맘카페의 게시글 데이터를 자동으로 수집, 필터링, 정제하여 Excel 파일로 실시간 저장하는 시스템을 구축하였습니다. 게시글의 조회수/댓글수를 기반으로 트렌드를 분석하거나 마케팅 키워드 도출을 위한 데이터 확보에 활용할 수 있는 개인 프로젝트입니다.</p>
                    <h3>주요 기능 및 구조</h3>
                    <ul>
                        <li>Thread 기반 수집 파이프라인 구현</li>
                        <li>Iframe 구조 내 크롤링 처리</li>
                        <li>Thread + Queue 병렬 구조로 충돌 방지</li>
                        <li>자동 로그인 처리</li>
                        <li>시간 단위 Excel 저장 구조</li>
                        <li>데이터 유효성 검사 기능 포함</li>
                    </ul>
                    </div>
                }
            />
        </div>
    </section>
  )
}

export default ProjectSection