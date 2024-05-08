import Container from "../common/Container.js";
import { IoInformationCircleOutline } from "react-icons/io5";
const Writers = () => {
  return (
    <section className="writers">
      <Container>
        <div className="writers__title">
          <h4>Top Writers</h4>
          <IoInformationCircleOutline />
          <div className="writers__notice">
           이 랭킹은 <span>최근 3일동안</span> 해당 카테고리에서 획득한 <span>활동점수</span>를 기준으로 만들어집니다.
          </div>
        </div>
      </Container>

    </section>
  )
}

export default Writers;