import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import '@styles/HeroSection.scss'

const HeroSection = () => {
  const h2Ref = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(() => {
    const chars = h2Ref.current?.querySelectorAll('.char')
    if (chars && chars.length > 0) {
        gsap.fromTo(chars,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.05,
              ease: 'power2.out',
              duration: 0.5,
            }
          )
    }
  }, [])

  const wrapChars = (text: string) =>
    text.split('').map((char, i) => (
      <span key={i} className="char" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))

  return (
    <section className="hero">
      <header className="hero__header">
        <h1 className="hero__logo">Kim goeun</h1>
        <nav className="hero__nav">
          <a href="#project">Work</a>
          <a href="#about">About</a>
          <a href="https://github.com/leejanox">Contact</a>
        </nav>
      </header>

      <div className="hero__intro">
        <p className="hero__sub">(web developer)</p>

        <h2 ref={h2Ref}>
          {wrapChars('INTERACTIVE')} <span className="italic">{wrapChars('designer')}</span><br />
          {wrapChars('WEB')} <span className="italic">{wrapChars('developer')}</span>
        </h2>

        <p className="hero__desc">
          GLSL 셰이더를 활용한 시각적 연출 중심의 웹 구현을 Three.js와 React로 공부하고 있으며,<br />
          셰이더 표현에 강한 개발자 되는 것을 목표로 하고 있습니다.
        </p>

        <button className="hero__btn">
          <Link to={'https://github.com/leejanox'}>Visit my GitHub →</Link>
        </button>

        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <span className="arrow">↓</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
