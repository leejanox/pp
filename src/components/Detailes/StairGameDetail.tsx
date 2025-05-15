import React from 'react'

const StairGameDetail = () => {
    return (
        <div
            style={{
                padding: '1rem',
                color: '#fff',
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
            무한의 계단 - 프로젝트 상세
        </h2>

        <p style={{ marginBottom: '1rem' }}>
            <strong>👥 팀원:</strong> 김고은, 강규상
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>🎮 프로젝트 개요:</strong><br />
            사용자 입력에 따라 캐릭터가 계단을 정확히 타고 올라가는 <strong>2D 액션 미니게임</strong>입니다.<br />
            <strong>반응속도와 방향 전환</strong>을 테스트하며 게임성과 집중력을 동시에 자극하는 구조로,
            실시간 계단 생성과 <strong>오브젝트 풀링</strong>을 활용한 퍼포먼스 최적화도 함께 구현했습니다.
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>🛠 구현 기능:</strong>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem' , listStyleType: 'none' }}>
            <li>✔️ 실시간 무한 계단 생성</li>
            <li>✔️ 캐릭터 이동 및 반응 입력 처리</li>
            <li>✔️ 충돌 감지 및 방향 전환</li>
            <li>✔️ Object Pooling을 통한 최적화</li>
            </ul>
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>🧪 주요 기술:</strong> Unity, C#, Object Pooling
        </p>
        <img
            src="/assets/unity.png"
            alt="무한의 계단 게임 미리보기"
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

export default StairGameDetail
