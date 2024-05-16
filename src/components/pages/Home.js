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
      <div className="list__container">
        <div className="list__wrap">
          <TitleWrap content="둘러보기" />
          <ul className="list list-sm">
            {
              Array.slice(0, 5).map((item, idx) => (
                <ListItem id={idx} src={item.src} title={item.title} desc={item.desc} />
              ))
            }
          </ul>
        </div>
        <div className="list__wrap">
          <TitleWrap content="추천 차트" />
          <ul className="list list-md">
            {
              Array.slice(0, 7).map((item, idx) => (
                <ListItem id={idx} src={item.src} title={item.title} desc={item.desc} />
              ))
            }
          </ul>
        </div>
        <div className="list__wrap">
          <TitleWrap content="인기 신곡" />
          <ul className="list list-hr">
            {
              Array.map((item, idx) => (
                <ListItem id={idx} src={item.src} title={item.title} desc={item.desc} />
              ))
            }
          </ul>
        </div>
        <div className="list__wrap">
          <TitleWrap content="취향에 맞는" />
          <ul className="list list-lg">
            {
              Array.slice(0, 4).map((item, idx) => (
                <ListItem id={idx} src={item.src} title={item.title} desc={item.desc} />
              ))
            }
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Home;