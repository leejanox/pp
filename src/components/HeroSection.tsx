
import { Link } from 'react-router-dom'
import '../styles/HeroSection.scss'

const HeroSection = () => {
    return (
        <section className="hero">
            <header className="hero__header">
                <h1 className="hero__logo">Kim goeun</h1>
                <nav className="hero__nav">
                <a href="#">Work</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                </nav>
            </header>

            <div className="hero__intro">

                <p className="hero__sub">(web developer)</p>
                <h2>
                <span className="bold">INTERACTIVE</span> <span className="italic">designer</span><br />
                <span className="bold">WEB </span> <span className="italic">developer</span>
                </h2>
                <p className="hero__desc">
                    GLSL 셰이더를 활용한 시각적 연출 중심의 웹 구현을 Three.js와 React로 공부하고 있으며,<br />
                    셰이더 표현에 강한 개발자 되는 것을 목표로 하고 있습니다.
                </p>
                <button className="hero__btn"><Link to={'https://github.com/leejanox'}>Visit my GitHub →</Link></button>
            </div>
        </section>
    )
}

export default HeroSection
