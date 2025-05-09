import '../styles/AboutMeSection.scss'
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap } from 'react-icons/fa'


const AboutMeSection = () => {
    return (
        <section id='about'className="about-me">
            <h2>&lt;About Me /&gt;</h2>           
            <div className="content-wrapper">
                <div className="me">
                    <img src='/assets/goeun.jpg' alt='goeun' className='me__img' />
                </div>
                <div className="about-grid">
                    <div className="item">
                        <FaUser className="icon" />
                        <div>
                            <h4>이름</h4>
                            <p>김고은</p>
                        </div>
                    </div>
                    <div className="item">
                        <FaCalendarAlt className="icon" />
                        <div>
                            <h4>생년월일</h4>
                            <p>1999.02.03</p>
                        </div>
                    </div>
                    <div className="item">
                        <FaMapMarkerAlt className="icon" />
                        <div>
                            <h4>주소지</h4>
                            <p>강원도 춘천시 백령로 215 110동 606호</p>
                        </div>
                    </div>
                    <div className="item">
                        <FaPhone className="icon" />
                        <div>
                            <h4>연락처</h4>
                            <p>010-9087-0084</p>
                        </div>
                    </div>
                    <div className="item">
                        <FaEnvelope className="icon" />
                        <div>
                            <h4>이메일</h4>
                            <p>rhdms6748@gmail.com</p>
                        </div>
                    </div>
                    <div className="item">
                        <FaGraduationCap className="icon" />
                        <div>
                            <h4>학력</h4>
                            <p>봉의고등학교 2014.03 ~ 2017.02</p>
                            <p>강원대학교 의생명융합공학과 <br/>
                                시스템면역과학전공 중퇴<br/>
                                 2017.03 ~ 2019.10</p>
                            <p>폴리텍대학 춘천캠퍼스 인공지능SW융합과 <br/>
                             2024.03 ~ 재학중</p>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default AboutMeSection
