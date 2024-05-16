import { Link } from "react-router-dom";

const ListItem = (props) => {
  return (
    <li className="list__item">
      <Link to="#">
        <div className="list__item-img">
          <img src={props.src} alt="이미지" />
        </div>
        <div className="list__item-txt">
          <p className="title">{props.title}</p>
          <p className="desc">{props.desc}</p>
        </div>
      </Link>
    </li>
  )
}

export default ListItem;