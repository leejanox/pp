import React from 'react'

const CrawlerDetail = () => {
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
            카페 게시글 자동 수집 시스템 - 상세 내용
        </h2>

        <p style={{ marginBottom: '1rem' }}>
            <strong>📌 프로젝트 개요:</strong><br />
            네이버 맘카페 게시글 데이터를 자동으로 수집하고, 필터링/정제 후 <strong>Excel 파일로 저장</strong>하는 개인 프로젝트입니다.<br />
            실시간 트렌드 분석, 마케팅 키워드 발굴 등 데이터 기반 전략 수립에 활용 가능한 수집 시스템입니다.
        </p>

        <p style={{ marginBottom: '1rem' }}>
            <strong>🛠 주요 기능 및 구조:</strong>
            <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem' , listStyleType: 'none' }}>
                <li>✔️ Thread 기반 수집 파이프라인</li>
                <li>✔️ Iframe 내 크롤링 로직 대응</li>
                <li>✔️ Thread + Queue 병렬 구조로 충돌 방지</li>
                <li>✔️ 자동 로그인 처리</li>
                <li>✔️ 시간 단위 Excel 저장</li>
                <li>✔️ 게시글 유효성 필터링 및 중복 제거</li>
            </ul>
        </p>

        <img
            src="/assets/python.png"
            alt="카페 수집 시스템 미리보기"
            style={{
                width: '100%',
                maxWidth: '500px',
                margin: '1.5rem auto',
                display: 'block',
                borderRadius: '10px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
            }}
        />

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a
                href="/downloads/crawler.py"
                download
                style={{
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#222',
                    color: '#fff',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                }}
            >
            코드 파일 다운로드 ⬇
            </a>
        </div>
        </div>
    )
}

export default CrawlerDetail
