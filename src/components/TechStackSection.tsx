import React from 'react'
import '../styles/TechStackSection.scss'

const stackData = [
  {
    category: 'Languages',
    tags: ['JavaScript', 'TypeScript', 'GLSL', 'Python'],
    description:
      'JS/TS 기반 프로젝트와 GLSL 셰이더 구현을 중심으로 공부 중이며, Python은 자동화 작업에 간단히 활용하고 있어요.',
  },
  {
    category: 'Frontend',
    tags: ['React', 'Three.js'],
    description:
      'React와 R3F를 기반으로 3D 웹 구현을 공부하고 있으며, Three.js로 장면 연출이 가능해요.',
  },
  {
    category: 'Style',
    tags: ['Scss', 'Tailwind', 'Styled-components'],
    description:
      '현재는 scss를 주로 사용하고 있으며, Tailwind도 다룰 수 있습니다. styled-components는 익숙해지는 중입니다.',
  },
  {
    category: 'Database',
    tags: ['MySQL'],
    description:
      'MySQL을 사용한 프로젝트를 진행해봤으며, 기본적인 쿼리 작성과 데이터 조작이 가능합니다.',
  },
  {
    category: 'Tools',
    tags: ['Git', 'Vite', 'Storybook'],
    description:
      'Git을 통한 버전 관리와 Vite 환경에서 Storybook으로 컴포넌트 테스트를 하며 공부 중입니다.',
  },
]

const TechStackSection = () => {
  return (
    <section className="tech-stack-section">
      <h2 className="title">Tech Stack</h2>
      <div className="stack-grid">
        {stackData.map(({ category, tags, description }) => (
          <div className="stack-card" key={category}>
            <h3>{category}</h3>
            <div className="tags">
              {tags.map(tag => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStackSection
