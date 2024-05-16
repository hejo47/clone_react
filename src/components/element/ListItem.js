import { Link } from "react-router-dom";

const ListItem = () => {
  return (
    <li className="list__item">
      <Link to="#">
        <div className="list__item-img">
          <img src="" alt="이미지" />
        </div>
        <div className="list__item-txt">
          <p className="title">title</p>
          <p className="desc">desc desc desc desc desc desc desc desc desc desc desc desc desc desc</p>
        </div>
      </Link>
    </li>
  )
}

export default ListItem;