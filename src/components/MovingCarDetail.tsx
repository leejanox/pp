import React from 'react'

const MovingCarDetail = () => {
    return (
        <div style={{
            color: '#fff',
            lineHeight: 1.7,
            fontSize: '1rem',
            paddingBottom: '1rem',
        }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', textAlign: 'center' }}>
                카메라 트래킹 + 차량 애니메이션 (Three.js)
            </h2>

            <img
                src="/assets/mCar.png"
                alt="Moving Car Scene"
                style={{
                    width: '100%',
                    margin: '1rem 0',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    display: 'block'
                }}
            />

            <p>
                <strong>Three.js + @react-three/fiber</strong>로 구현한 차량 이동 시뮬레이션입니다.<br />
                <strong>CubicBezierCurve3</strong>를 기반으로 자동차가 경로를 따라 자연스럽게 이동하고, 
                <strong>카메라는 차가 이동하는 애니메이션이 종료되면 자연스럽에 이동하는</strong> 효과를 구현했습니다.
            </p>

            <p style={{ marginTop: '1rem' }}>
                경로가 끝에 가까워지면 <strong>차량 스케일을 확대</strong>하고, 
                카메라는 차량의 진행 방향으로 시야를 확장합니다.  
                최종적으로 카드 UI가 등장하며, 인터랙션 가능한 포털처럼 표현됩니다.
            </p>

            <h4 style={{ marginTop: '1.5rem' }}>📁 주요 파일</h4>
            <ul style={{ paddingLeft: '1.2rem', listStyleType: 'none', marginBottom: '1rem' }}>
                <li><code>Car.tsx</code> — GLTF 자동차 모델 불러오기 및 ref 제어</li>
                <li><code>Track.tsx</code> — 반사 재질 바닥 + 곡선 트랙 시각화</li>
                <li><code>MovingCar.tsx</code> — 차량 이동, lookAt(), 카메라 연동, 카드 노출</li>
                <li><code>Card.tsx</code> — MeshPortalMaterial을 이용한 카드 인터랙션 처리</li>
            </ul>

            <p style={{ marginTop: '1rem' }}>
                향후에는 <strong>카드 클릭 시 다음 씬 전환</strong> 기능을 추가할 계획입니다.
            </p>

            <h4 style={{ marginTop: '2rem' }}>🧩 중요 코드 스니펫</h4>
            <pre style={{
                background: '#222',
                color: '#0ff',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
                overflowX: 'auto'
            }}>
                <code>{`// MovingCar.tsx (카메라 추적 및 차량 위치 보간)
        useFrame(({ clock }) => {
        const t = Math.min(clock.getElapsedTime() / 5, 1); // 5초 동안 진행
        const point = curve.getPoint(t);
        const tangent = curve.getTangent(t);

        carRef.current.position.copy(point);
        carRef.current.lookAt(point.clone().add(tangent));

        cameraRef.current.position.lerp(new Vector3(point.x, point.y + 2, point.z + 5), 0.05);
        cameraRef.current.lookAt(carRef.current.position);
        });`}
                </code>
            </pre>
        </div>
    )
}

export default MovingCarDetail
