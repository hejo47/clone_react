import { Link } from "react-router-dom";

const TitleWrap = (props) => {
  return (
    <div className="title__wrap">
      <h2 className="title-lg">{props.content}</h2>
      <Link to="#"></Link>
    </div>
  )
}

export default TitleWrap;