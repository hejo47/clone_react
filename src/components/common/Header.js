import { Link } from "react-router-dom";
import Container from "./Container.js";
import { AiFillSun } from "react-icons/ai";
import { IoMdMoon } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__wrap">
          <div className="header__left">
            <h1 className="header__logo"><Link to="/"><img src="https://okky.kr/okky-munchkin-logo.svg" alt="" /></Link></h1>
            <ul className="header__gnb">
              <li><Link to="#">Q&A</Link></li>
              <li><Link to="#">지식</Link></li>
              <li><Link to="#">커뮤니티</Link></li>
              <li><Link to="#">이벤트</Link></li>
              <li><Link to="#"><span><img src="https://okky.kr/new-badge.svg" alt="" />jobs</span></Link></li>
              <li><Link to="#">공지사항</Link></li>
            </ul>
          </div>
          <div className="header__right">
            <div className="header__search">
              <form action="">
                <input type="text" name="" id="" placeholder="검색" />
              </form>
              <button className="header__search-btn"><RiSearchLine /></button>
            </div>
            <div className="header__mode">
              <div className="header__mode-btn"></div>
              <IoMdMoon />
              <AiFillSun />
            </div>
            <div className="header__btn-wrap">
              <Link to="#" className="btn light">로그인</Link>
              <Link to="#" className="btn theme">회원가입</Link>
            </div>
          </div>

        </div>
      </Container>
    </header>
  )
}

export default Header;