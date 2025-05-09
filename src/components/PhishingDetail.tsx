import React from 'react'

const PhishingDetail = () => {
    return (
        <div
            style={{
                padding: '1rem',
                color: '#333',
                maxHeight: '70vh',
                overflowY: 'auto',
                textAlign: 'left',
                lineHeight: 1.6,
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
            피싱 방지 웹 서비스 - 프로젝트 상세
        </h2>

        <p style={{ marginBottom: '1rem' }}>
            <strong>📌 프로젝트 개요:</strong><br />
            공모전 제출을 목표로 기획한 웹 서비스입니다. 사용자가 입력한 <strong>URL을 분석하여 피싱 위험 여부를 판단</strong>하고,
            <strong>SSL 인증서, WHOIS 정보, IP 위치</strong> 등을 종합적으로 평가한 결과를 시각적으로 제공합니다.
            <br />
            위험성이 감지되면 실시간으로 차단 경고를 띄워 사용자 피해를 예방합니다.
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>🛠 주요 기능:</strong>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', listStyleType: 'none' }}>
            <li>✔️ 화이트리스트 기반 URL 판별</li>
            <li>✔️ SSL 인증서 및 WHOIS 정보 조회</li>
            <li>✔️ 피싱 의심 사이트 실시간 차단 경고</li>
            <li>✔️ 사용자 피해 신고 및 피드백 수렴 시스템</li>
            <li>✔️ 반응형 웹 구현 (웹 + 모바일 대응)</li>
            </ul>
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>🎯 참여 목적:</strong><br />
            <em>2025년 ICT 한이음 드림업 공모전</em> 제출을 위한 실전 프로젝트로,<br />
            <strong>기획, UI/UX 설계 및 시각 정보 전달 방식</strong>을 주도적으로 설계하였습니다.
        </p>

        <img
            src="src/assets/koshing_desktop_main.png"
            alt="Phishing Service Preview"
            style={{
                width: '100%',
                maxWidth: '500px',
                margin: '1.5rem auto',
                display: 'block',
                borderRadius: '10px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
            }}
        />
        </div>
    )
}

export default PhishingDetail
