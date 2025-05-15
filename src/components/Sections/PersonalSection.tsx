import '@styles/PersonalSection.scss'
import PersonalCard from '@components/Cards/personal-card'
import AudioShaderDetail from '@components/Detailes/AudioShaderDetail'
import ExpandingParticleDetail from '@components/Detailes/ExpandingParticleDetail'
import MovingCarDetail from '@components/Detailes/MovingCarDetail'

const PersonalSection = () => {
  return (
    <section className="personal">
      <h1 className='title'>PERSONAL WORKS</h1>
      <p className='description'>개인적으로 공부중인 작업물입니다.</p>
      <div className="card-container">
        <PersonalCard
          title="GLSL 점 기반 인터랙션 구체"
          description="마우스 위치 기반 거리 계산으로 반응하는 GLSL 쉐이더 구체. 이후 마이크 오디오 연동을 통한 자동 반응 기능으로 확장 예정."
          image="/assets/asPreview.png"
          link="https://github.com/leejanox"
          demoLink="/demo1"
          tags={["Three.js", "GLSL", "Shader", "Interactive"]}
          modalContent={<AudioShaderDetail />}
        />
        <PersonalCard
          title="GLSL 텍스처 기반 확산 파티클"
          description="이미지 텍스처를 기반으로 구성된 파티클이 시간과 왜곡값에 따라 유기적으로 퍼져나가는 Three.js 기반 애니메이션입니다. Bloom 이펙트를 적용해 빛의 확산도 함께 표현됩니다."
          image="/assets/particles.png"
          link="https://github.com/leejanox/leejanox/blob/main/apps/app1/src/pages/Demo1.tsx"
          demoLink="/demo2"
          tags={["Three.js", "GLSL", "Shader", "Bloom", "Particle"]}
          modalContent={<ExpandingParticleDetail />}
        />
        <PersonalCard
          title="3D 차량 애니메이션 & 카메라 트래킹"
          description="Bezier 커브를 따라 자동차가 자연스럽게 이동하며, 카메라가 따라붙는 시네마틱한 줌 아웃 트래킹 효과도 구현된 3D 인터랙션 프로젝트입니다."
          image="/assets/mCar.png"
          link="https://github.com/leejanox/leejanox/tree/main/packages/lib2/src/components/scenes"
          demoLink="/demo3"
          tags={["Three.js", "BezierCurve", "Camera Tracking", "GLTF", "GSAP"]}
          modalContent={<MovingCarDetail />}
        />
      </div>
    </section>
  )
}

export default PersonalSection
