import styles from "./styles.module.scss"

function ChatBody(){
    return(
        <div className={styles.body}>
            <Messages/>
           <div className={styles.footer}>
               <img src="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-happy-emoticon-icon-png-image_757244.jpg" alt="" className={styles.emote} />
               <input type="text" placeholder="Text Your Message Here.." />
               <img src="https://thumbs.dreamstime.com/b/airplane-icon-isolated-blue-circle-send-message-paper-150512628.jpg" alt=""  className={styles.send}/>
           </div>
        </div>
    )
}

function Messages(){
    return(<>
    <div className={styles.left}>
      <div className={styles.leftuser}>
            <img className={styles.hero} src={"https://randomuser.me/api/portraits/med/men/27.jpg"} alt="" />
            <span>
                <h2>Candy Bosley</h2>
                <p>08:00 AM</p>
            </span>
            </div>
            <div className={styles.leftmes}>
            Hi , this is process update for this week's
           </div>
        </div>
        
        
        <div className={styles.right}>
      <div className={styles.rightuser}>
           
            <span>
                <h2>Candy Bosley</h2>
                <p>08:00 AM</p>
            </span>
            <img className={styles.hero} src={"https://randomuser.me/api/portraits/med/men/27.jpg"} alt="" />
            </div>
            <div className={styles.rightmes}>
            Hi , this is process update for this week's
           </div>
        </div>
        
       
        
        </>
      

    )
}




function ChatBox() {
  return (
    <div className={styles.chatBox}>
        <div className={styles.topsec}>
            <div className={styles.leftinfo}>
            <img className={styles.hero} src={"https://randomuser.me/api/portraits/med/men/27.jpg"} alt="" />
            <span>
                <h2>Candy Bosley</h2>
                <p>Last seen Yesterday 02:30 PM</p>
            </span>
            </div>
            <div className={styles.rightinfo}>
                  <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png" alt="" className={styles.btn} />
                  <img src="https://cdn0.iconfinder.com/data/icons/ios-edge-line-1/25/Add-Call-512.png" alt="" className={styles.btn} />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ic_more_vert_48px.svg/800px-Ic_more_vert_48px.svg.png" alt="" className={styles.btn} />
            </div>
        </div>
        <ChatBody/>
    </div>
  )
}

export default ChatBox