import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?'':'small-sidebar'}`}>

      <div className="shortcut-links">

        <div className= {`side-link ${category===0 ? 'active':''}`} onClick={()=>setCategory(0)}>
          <img src={home} alt="" /><p>HOME</p>
        </div>
        <div className={`side-link ${category===20? 'active':''}`} onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="" /><p>GAME</p>
        </div>
        <div className={`side-link ${category===2? 'active':''}`} onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="" /><p>AUTOMOBILES</p>
        </div>
        <div className={`side-link ${category===17? 'active':''}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="" /><p>SPORTS</p>
        </div>
        <div className={`side-link ${category===24? 'active':''}`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="" /><p>ENTERTAINMENT</p>
        </div>
        <div className={`side-link ${category===28? 'active':''}`} onClick={()=>setCategory(28)}>
          <img src={tech} alt="" /><p>TECHNOLOGY</p>
        </div>
        <div className={`side-link ${category===10? 'active':''}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="" /><p>MUSIC</p>
        </div>
        <div className={`side-link ${category===22? 'active':''}`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="" /><p>BLOGS</p>
        </div>
        <div className={`side-link ${category===25? 'active':''}`} onClick={()=>setCategory(25)}>
          <img src={news} alt="" /><p>NEWS</p>
        </div>
        <hr/>
      </div>
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <div className="side-link" onClick={()=>setCategory(0)}>
          <img src={jack} alt="" />
          <p>JACK</p>
        </div>
        <div className="side-link" onClick={()=>setCategory(0)}>
          <img src={simon} alt="" />
          <p>SIMON</p>
        </div>
        <div className="side-link" onClick={()=>setCategory(0)}>
          <img src={tom} alt="" />
          <p>TOM</p>
        </div>
        <div className="side-link" onClick={()=>setCategory(0)}>
          <img src={megan} alt="" />
          <p>MEGAN</p>
        </div>
        <div className="side-link" onClick={()=>setCategory(0)}>
          <img src={cameron} alt="" />
          <p>ISABELLA</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar