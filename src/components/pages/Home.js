import Container from "../common/Container";
import TitleWrap from "../element/TitleWrap";
import ListItem from "../element/ListItem";
import { Link } from "react-router-dom";

const Array = [
  {
    src: "",
    title: "이름",
    desc: "설명"
  },
  {
    src: "",
    title: "이름",
    desc: "설명"
  },
  {
    src: "",
    title: "이름",
    desc: "설명"
  },
  {
    src: "",
    title: "이름",
    desc: "설명"
  },
  {
    src: "",
    title: "이름",
    desc: "설명"
  },
  {
    src: "",
    title: "이름",
    desc: "설명"
  },
  {
    src: "",
    title: "이름",
    desc: "설명"
  },
]

const Home = () => {
  return (
    <Container>
      <TitleWrap content="둘러보기" />
      <ul className="list list-md">
        <ListItem list={Array}/>
      </ul>
    </Container>
  )
}

export default Home;