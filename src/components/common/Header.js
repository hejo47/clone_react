import { Link } from "react-router-dom";
import { TbMusicStar } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import Container from "./Container";

const PlayList = [
  {
    title: "오늘 듣는 플레이리스트",
    author: "오늘",
    thumb: ""
  },
  {
    title: "내일 듣는 플레이리스트",
    author: "내일",
    thumb: ""
  },
]

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="header__logo">
          <Link to="#">
            {/* <TbMusicStar /> */}
            <h1>LOGO</h1>
          </Link>
        </div>
        <div className="header__search style__basic style__bubble-basic">
          <form action="">
            <div>
              <CiSearch />
              <input type="text" />
            </div>
          </form>
        </div>
        <div className="playlist style__basic style__bubble-basic">
          <div className="playlist__add">
            <h4>재생목록</h4>
            <button className="btn playlist__btn"><IoAddOutline /></button>
          </div>
          <ul className="playlist__list">
					{
            PlayList.map((item, idx) => (
              <li className="playlist__list-item">
                <Link to="#">
                  <div className="playlist__thumb">{item.thumb}</div>
                  <div className="playlist__desc">
                    <p className="playlist__desc-title">{item.title}</p>
                    <p className="playlist__desc-author">{item.author}</p>
                  </div>
                </Link>
              </li>
            ))
					}
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Header;