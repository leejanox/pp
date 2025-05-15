
const AudioShaderDetail = () => {
    return (
        <div style={{
            color: '#fff',
            lineHeight: 1.7,
            fontSize: '1rem',
            paddingBottom: '1rem',
            }}
        >
            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' , textAlign: 'center'}}>
                마우스 인터랙션 기반 GLSL 쉐이더 점 구체
            </h2>

            <img
                src="/assets/asPreview.png"
                alt="GLSL Sphere"
                style={{
                    width: '100%',
                    //maxWidth: '500px',
                    margin: '1rem 0',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    display: 'block'
                }}
            />

            <p style={{ marginTop: '1rem' }}>
                <strong>GLSL과 Three.js</strong>를 활용해 만든 점 기반 구체입니다.<br />
                현재는 <strong>마우스 위치와 구체 표면의 거리</strong>를 계산해서 반응하는 방식으로 구현했으며,
                추후에는 <strong>오디오 입력(마이크)</strong>을 받아 자동으로 움직이도록 확장할 계획입니다.
            </p>

            <p style={{ marginTop: '1rem' }}>
                공부하면서 쉐이더 구조와 마우스 벡터 계산 방식, 시간 기반 애니메이션 처리 방식 등을 차근차근 익히고 있습니다.
            </p>

            <h4 style={{ marginTop: '1.5rem' }}>📁 주요 파일</h4>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem' , listStyleType:'none'}}>
                <li><code>Ball.tsx</code> — IcosahedronGeometry + ShaderMaterial 적용</li>
                <li><code>Scene.tsx</code> — useFrame으로 마우스/시간 유니폼 업데이트</li>
                <li><code>updownVert.glsl</code> — 마우스 거리 기반 vertex displacement</li>
                <li><code>updownFrag.glsl</code> — 반투명 점 렌더링</li>
            </ul>

            <h4 style={{ marginTop: '1rem' }}>🧩 중요 코드 스니펫</h4>

            <pre style={{
                background: '#222',
                color: '#0ff',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
                overflowX: 'auto'
            }}>
                <code>{
                        `// Scene.tsx
                            useFrame((state) => {
                            const time = state.clock.getElapsedTime();
                            const ball = ballRef.current.material as THREE.ShaderMaterial;
                            ball.uniforms.uTime.value = time;
                            ball.uniforms.uMouse.value.x = pointer.x;
                            ball.uniforms.uMouse.value.y = pointer.y;
                            });
                        `
                    }
                </code>
            </pre>

            <pre style={{
                background: '#222',
                color: '#9f9',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
                overflowX: 'auto'
            }}>
                <code>{
                    `// updownVert.glsl
                        float dist = distance(vUv, uMouse.xy);
                        float offset = sin(uTime + dist * 10.0) * 0.1;
                        vec3 newPosition = position + normal * offset;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);`
                        }
                </code>
            </pre>
        </div>
    )
}

export default AudioShaderDetail
