import { CiShuffle } from "react-icons/ci";
import { IoPlaySkipBackOutline, IoPlaySkipForwardOutline } from "react-icons/io5";
import { ImPause } from "react-icons/im";
import { IoPlayOutline } from "react-icons/io5";
import { RiRepeat2Line, RiRepeatOneLine } from "react-icons/ri";
import { AiFillSound, AiFillMuted } from "react-icons/ai";

const Playbar = () => {
  return (
    <div className="playbar">
      <div className="playbar__tools">
        <button className="btn"><CiShuffle /></button>
        <button className="btn"><IoPlaySkipBackOutline /></button>
        {/* <button id="musicPause" className="btn"><ImPause /></button> */}
        <button id="musicPlay" className="btn"><IoPlayOutline /></button>
        <button className="btn"><IoPlaySkipForwardOutline /></button>
        <button className="btn"><RiRepeat2Line /></button>
        {/* <button className="btn"><RiRepeatOneLine /></button> */}
      </div>
      <div className="playbar__timeline">
        <p className="playbar__timeline-start">-:--</p>
        <div className="playbar__timeline-bar">
          <div className="current"></div>
        </div>
        <p className="playbar__timeline-end">-:--</p>
      </div>
      <div className="playbar__menu">
        <div className="playbar__menu-sound">
          {/* <button className="btn"><AiFillMuted /></button> */}
          <button className="btn"><AiFillSound /></button>
          <div className="playbar__menu-sound-bar">
            <div className="current"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playbar;