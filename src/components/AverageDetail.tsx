import React from 'react'

const AverageDetail = () => {
    return (
        <div
            style={{
                padding: '1rem',
                lineHeight: 1.6,
                color: '#fff',
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
            AVERAGE23 - 프로젝트 상세
        </h2>

        <p style={{ marginBottom: '1rem' }}><strong>👥 팀원:</strong> 김고은, 김민찬</p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>📌 프로젝트 소개:</strong><br />
            <span style={{ display: 'block', marginTop: '0.25rem' }}>
            <strong>기온에 따른 전력 소모량 예측 AI 모델 웹사이트</strong>입니다.<br />
            React, Express, MySQL 기반으로 사용자 인증 및 파일 다운로드 기능을 제공하며,<br />
            AI 예측 모델 체험, PPT 캐러셀 뷰어, 데이터 필터링 기능 등을 구현했습니다.
            </span>
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>🛠 주요 담당 작업 (김고은):</strong><br />
            클라이언트 UI/UX 설계, PPT 캐러셀 컴포넌트 제작, 머신러닝 체험 페이지 구성,<br />
            Figma UI 설계, Tailwind 및 Framer Motion 활용, 페이지 애니메이션 처리
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>🌐 기술 스택 및 라이브러리:</strong><br />
            React, Express, MySQL2, JWT, Axios, Tailwind CSS, React Router, Framer Motion, Three.js
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>🔐 주요 기능:</strong>
            <ul style={{ paddingLeft: '1.2rem', listStyleType: 'none', marginTop: '0.25rem' }}>
            <li>✔️ JWT 기반 로그인/회원가입/비밀번호 재설정</li>
            <li>✔️ 사용자 전용 파일 다운로드 및 즐겨찾기</li>
            <li>✔️ AI 모델 예측 결과 시각화 (차트 및 표 기반)</li>
            <li>✔️ PPT 슬라이드 캐러셀 및 애니메이션 전환</li>
            </ul>
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>📁 데이터베이스 설계:</strong><br />
            사용자(user), 파일(file), 즐겨찾기(favorite) 테이블 분리 설계,<br />
            관계형 DB 구조로 무결성 유지 및 확장 고려
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>🎯 프로젝트 목표:</strong><br />
            실제 데이터를 기반으로 AI 예측 모델을 웹에서 체험하고,<br />
            사용자와 상호작용하며 시각적으로 결과를 확인할 수 있는 <strong>실용적 웹 플랫폼</strong> 구현
        </p>

        {['avg1.png', 'avg2.png', 'avg3.png', 'avg4.png'].map((img, idx) => (
            <img
                key={idx}
                src={`/assets/average/${img}`}
                alt={`AVERAGE23 UI ${idx + 1}`}
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

export default AverageDetail
