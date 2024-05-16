import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { GrShare } from "react-icons/gr";

const InnerHeader = () => {
  return (
    <div className="inner-header style__basic">
      <div className="inner-header__top">
        <div className="inner-header__move">
          <button className="btn inner-header__btn"><IoIosArrowBack /></button>
          <button className="btn inner-header__btn"><IoIosArrowForward /></button>
        </div>
        <div className="inner-header__tools">
          <button className="btn inner-header__btn"><FaRegBell /></button>
          <div className="btn inner-header__btn inner-header__profile">
            <img src="" alt="" />
            <ul className="inner-header__tools-menu">
              <li><Link to="#">계정<GrShare /></Link></li>
              <li><Link to="#">프로필</Link></li>
              <li><Link to="#">Primium으로 업그레이드 하기<GrShare /></Link></li>
              <li><Link to="#">설정</Link></li>
              <li><Link to="#">로그아웃</Link></li>
            </ul>
          </div>
        </div>

      </div>
      <div className="inner-header__bottom">
        <div className="inner-header__type">
          <ul>
            <li><Link to="#">모두</Link></li>
            <li><Link to="#">음악</Link></li>
            <li><Link to="#">팟캐스트</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default InnerHeader;