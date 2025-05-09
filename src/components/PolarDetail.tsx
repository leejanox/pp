import React from 'react'

const PolarDetail = () => {
    return (
        <div
            style={{
                padding: '1rem',
                lineHeight: 1.6,
                color: '#333',
                maxHeight: '70vh',
                overflowY: 'auto',
                textAlign: 'left',
            }}
        >
        <h2
            style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            textAlign: 'center',
            }}
        >
            POLAR - 프로젝트 상세
        </h2>

        <p style={{ marginBottom: '1rem' }}><strong>👥 팀원:</strong> 김고은, 강규상, 김민찬</p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>📌 프로젝트 소개:</strong><br />
            <span style={{ display: 'block', marginTop: '0.25rem' }}>
            장애인 접근성 정보를 기반으로 관광지, 음식점 등의 <strong>편의시설 정보를 제공하는 웹사이트</strong>를 구축했습니다.<br />
            <strong>챗봇 추천 기능</strong>과 더불어, <strong>데이터베이스 스키마 설계</strong>, <strong>제약 조건 설정</strong>, <strong>동적 쿼리 프로시저 작성</strong>을 담당했습니다.
            </span>
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>🛠 주요 담당 작업:</strong><br />
            DB 설계, 데이터 정합성 제약 조건 설정, 통계 기반 데이터 분석,<br />
            프로젝트 발표용 PPT 제작 및 시각화 자료 구성
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>🌱 서비스 배경 및 목적:</strong><br />
            춘천시는 연간 방문객 수가 높은 관광도시임에도 불구하고, 장애인 관광객을 위한 <strong>정보 접근성</strong>이 부족합니다.<br />
            이에 따라, <strong>장애인 친화적인 관광 정보를 통합 제공</strong>하는 플랫폼을 구축하여 관광 활성화와 접근성 향상이라는 두 가지 목표를 실현하고자 했습니다.
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong style={{ marginBottom: '1rem' }}>✨ 핵심 기능:</strong>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem' , listStyleType:'none'}}>
            <li>장애인 편의시설 정보 제공 (휠체어 접근성, 점자 안내 등)</li>
            <li>챗봇을 통한 맞춤형 관광지 추천</li>
            <li>데이터 기반 검색 및 동적 필터링</li>
            </ul>
        </p>
        {['1.png', '2.png', '3.png', '4.png'].map((img, idx) => (
            <img
                key={idx}
                src={`/assets/polar/${img}`}
                alt={`POLAR UI ${idx + 1}`}
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    margin: '1rem 0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
            />
        ))}
        </div>
    )
}

export default PolarDetail
