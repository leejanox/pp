import '@styles/ProjectSection.scss'
import AverageDetail from '@components/Detailes/AverageDetail'
import CrawlerDetail from '@components/Detailes/CrawlerDetail'
import PhishingDetail from '@components/Detailes/PhishingDetail'
import PolarDetail from '@components/Detailes/PolarDetail'
import ProjectCard from '@components/Cards/project-card'
import StairGameDetail from '@components/Detailes/StairGameDetail'

const ProjectSection = () => {
  return (
    <section id='project' className="project">
        <h1 className='title'>SCHOOL PROJECTS</h1>
        <div className='card-container'>
            <ProjectCard
                title="POLAR - 장애인 관광 정보 통합 웹페이지"
                description="춘천 관광지의 장애인 접근성 정보를 제공하는 웹페이지. 챗봇 및 맞춤 추천 기능 포함."
                image="/assets/polar.png"
                link="https://github.com/leejanox"
                tags={["MySQL", "DB 설계", "데이터 시각화"]}
                modalContent={
                    <PolarDetail/>
                }
            />
            <ProjectCard
                title="AVERAGE 23 - 전력 사용량 예측 AI 플랫폼"
                description="AI 모델을 통한 전력 사용량 예측 시각화 웹 플랫폼."
                image="/assets/average.png"
                link="https://github.com/leejanox/average23"
                tags={["React", "AI", "MySQL", "Express"]}
                modalContent={
                    <AverageDetail/>
                }
            />
            <ProjectCard
                title="악성 URL 탐지 및 피싱 사이트 식별 서비스"
                description="화이트리스트·SSL·WHOIS 분석을 통한 피싱 사이트 탐지 웹 서비스."
                image="/assets/koshing_desktop_main.png"
                link="https://github.com/leejanox"
                tags={["Security", "SSL", "Domain Analysis", "Web Service"]}
                modalContent={
                    <PhishingDetail/>
                }
            />
            <ProjectCard
                title="무한의 계단 (Unity 2D 미니게임)"
                description="입력에 따라 반응하는 무한 계단 오르기 Unity 기반 게임."
                image="/assets/unity.png"
                link="https://github.com/leejanox/unity"
                tags={["Unity", "C#", "Object Pooling"]}
                modalContent={
                    <StairGameDetail/>
                }
            />
            <ProjectCard
                title="카페 게시글 자동 수집 시스템"
                description="Python 기반 데이터 크롤링 자동화"
                image="/assets/python.png"
                link="https://github.com/leejanox/AI_python"
                tags={["Python", "Thread", "Excel"]}
                modalContent={
                    <CrawlerDetail/>
                }
            />
        </div>
    </section>
  )
}

export default ProjectSection