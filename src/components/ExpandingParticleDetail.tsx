const ExpandingParticleDetail = () => {
    return (
        <div style={{
                color: '#fff',
                lineHeight: 1.7,
                fontSize: '1rem',
                paddingBottom: '1rem',
            }}
        >
        <h2 style={{
            fontSize: '1.4rem',
            marginBottom: '0.75rem',
            textAlign: 'center'
        }}>
            텍스처 기반 GLSL 확산 파티클 애니메이션
        </h2>

        <img
            src="/assets/particles.png"
            alt="Expanding Particle Shader"
            style={{
                width: '100%',
                margin: '1rem 0',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                display: 'block'
            }}
        />

        <p>
            <strong>GLSL과 Three.js</strong>를 활용해 만든 이미지 기반 점 확산 애니메이션입니다.<br />
            특정 텍스처 이미지를 기반으로 파티클을 배치하고, <strong>시간값과 왜곡 값(distortion)</strong>을 활용해 점들이 퍼지듯 확산되는 효과를 구현했습니다.
        </p>

        <p style={{ marginTop: '1rem' }}>
            여기에 <strong>Bloom postprocessing 이펙트</strong>를 적용하여, 확산 중심부에서 <span style={{ color: '#ffd700' }}>빛이 퍼지는 듯한 시각적 강조</span>도 함께 표현했습니다.
            전반적으로 조용히 퍼지는 듯한 유기적 연출을 목표로 했습니다.
        </p>

        <p style={{ marginTop: '1rem' }}>
            현재는 <strong>타임라인 기반 애니메이션</strong>이지만, 
            추후에는 <strong>오디오 입력(마이크)</strong>이나 특정 사용자 인터랙션을 통해 파티클 확산 강도나 타이밍을 조절할 수 있도록 확장할 계획입니다.
        </p>

        <p style={{ marginTop: '1rem' }}>
            또한 최종 목표는 <strong>"이미지 → 점 확산 → 다른 이미지"</strong>처럼 
            여러 이미지를 연결해가며 동적인 비주얼 전환이 가능한 파티클 시퀀스 효과를 구현하는 것입니다.
        </p>

        <h4 style={{ marginTop: '1.5rem' }}>📁 주요 파일</h4>
        <ul style={{
            paddingLeft: '1.2rem',
            marginBottom: '1rem',
            listStyleType: 'none'
        }}>
            <li><code>ExpandingParticle.tsx</code> — PlaneGeometry 기반 파티클 + ShaderMaterial 적용</li>
            <li><code>ExpandingParticleVertex.glsl</code> — 시간에 따라 vertex 확산 위치 조정</li>
            <li><code>ExpandingParticleFrag.glsl</code> — 텍스처 색상 추출 및 alpha discard</li>
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
                <code>{`// ExpandingParticle.tsx (useFrame)
                            useFrame((state) => {
                            const time = state.clock.getElapsedTime();
                            matRef.current.uniforms.uTime.value = time;
                            matRef.current.uniforms.uTexture.value = texture;
                            if (levaUniforms?.uAlpha !== undefined)
                                matRef.current.uniforms.uAlpha.value = levaUniforms.uAlpha;
                            if (levaUniforms?.uDistortion !== undefined)
                                matRef.current.uniforms.uDistortion.value = levaUniforms.uDistortion;
                            });`
                        }   
                </code>
            </pre>

            <pre style={{
                background: '#222',
                color: '#ff9',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
                overflowX: 'auto'
            }}>
                <code>
                    {
                    `// ExpandingParticleVertex.glsl
                        float dist = length(position.xy);
                        vec3 displaced = position + normal * sin(uTime + dist * 10.0) * uDistortion;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);`
                    }
                </code>
            </pre>
        </div>
    )
}

export default ExpandingParticleDetail
