import styles from "./styles.module.scss"
import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp} from '@fortawesome/free-solid-svg-icons'
import { faSortDown} from '@fortawesome/free-solid-svg-icons'
function UserProfile( ){
    const [showPincom, setShowPincom] = useState(true)
    const [icon, setIcon] = useState(faSortDown)
     const showPinned = ()=>{
         setIcon((curr)=>{
          if(curr===faSortUp){
              return faSortDown;
          }
          else{
              return faSortUp
          }})
         return setShowPincom(!showPincom)
         
         
     }
    return(
        <>
        <div className={styles.pinmes}>
            <span>
            <img src={"https://cdn-icons-png.flaticon.com/512/7205/7205317.png"} alt="" />
            <p>Pinned Message</p>
            <FontAwesomeIcon className={styles.icon }  icon={icon} onClick={showPinned} />
            </span>
         
        <div className={styles.threedot}>...</div>
        </div>
        {showPincom && <div className={styles.userpro}>
          <div className={styles.info}>
          <img className={styles.hero} src={"https://randomuser.me/api/portraits/med/men/27.jpg"} alt="" />
            <span>
                <p>James Aoron</p>
                <h3>Lorem ipsum  lit. Similique.</h3>
            </span>
          </div>
          <div className={styles.time}>
              10.45pm
          </div>
        </div>}
        
        </>
    )
}

function GroupedMes(){
    const [showPincom, setShowPincom] = useState(true)
    const [icon, setIcon] = useState(faSortDown)
     const showPinned = ()=>{
        setIcon((curr)=>{
            if(curr===faSortUp){
                return faSortDown;
            }
            else{
                return faSortUp
            }})
         return setShowPincom(!showPincom)
         
         
     }
    return (
        <>
          <div className={styles.groupmes}>
          <span>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZLAul_hGXxo56DKS7z1ZnriRu9MSXLTwUQ&usqp=CAU"} alt="" />
            <p>Grouped Message</p>
            <FontAwesomeIcon className={styles.icon } icon={icon }  onClick={showPinned} />
            </span>
         
        <div className={styles.threedot}>...</div>
          </div>
          {showPincom && <div className={styles.userpro}>
          <div className={styles.info}>
          <img className={styles.hero} src={"https://randomuser.me/api/portraits/med/women/25.jpg"} alt="" />
            <span>
                <p>James Aoron</p>
                <h3>Lorem ipsum  lit. Similique.</h3>
            </span>
          </div>
          <div className={styles.time}>
              10.45pm
          </div>
        </div>}
  
        </>
    )
}

function AllMes(){
    const [showPincom, setShowPincom] = useState(true)
    const [icon, setIcon] = useState(faSortDown)
     const showPinned = ()=>{
        setIcon((curr)=>{
            if(curr===faSortUp){
                return faSortDown;
            }
            else{
                return faSortUp
            }})
         return setShowPincom(!showPincom)
         
         
     }
    return (
        <>
          <div className={styles.groupmes}>
          <span>
            <img src={"https://www.vhv.rs/dpng/d/447-4472507_user-groups-filled-icon-group-icon-png-transparent.png"} alt="" />
            <p>All Message</p>
            <FontAwesomeIcon className={styles.icon } icon={icon }  onClick={showPinned} />
            </span>
         
        <div className={styles.threedot}>...</div>
          </div>
          {showPincom && <div className={styles.userpro}>
          <div className={styles.info}>
          <img className={styles.hero} src={"https://randomuser.me/api/portraits/med/men/8.jpg"} alt="" />
            <span>
                <p>James Aoron</p>
                <h3>Lorem ipsum  lit. Similique.</h3>
            </span>
          </div>
          <div className={styles.time}>
              10.45pm
          </div>
        </div>}
  
        </>
    )
}

function Profile(){
   
    return(<>
    <div className={styles.myprof}>
        <div className={styles.top}>
        <div className={styles.info}>
            <img className={styles.hero} src={"https://randomuser.me/api/portraits/med/women/2.jpg"} alt="" />
            <span>
                <p>Good morning</p>
                <h3>Michele Bot</h3>
            </span>
        </div>
        <div className={styles.btns}>
            <button className={styles.plus}>+</button>
            <img src="https://thumbs.dreamstime.com/b/notification-bell-icon-red-mark-vector-symbol-outline-style-eps-173584177.jpg" alt="" />
            <img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-1.png" alt="" />
        </div>
        </div>


        
     <UserProfile/>
   

     <GroupedMes/>
  
     <AllMes/>
    </div>
    </>)
}

export default Profile