import styles from "./style.module.scss";
import Profile from "./components/myprofile/index"
import ChatBox from "./components/chatBody";

function App() {
  return (
    <div className={styles.cont}>
      <div className={styles.main}>
        <Profile/>
        <ChatBox/>
      </div>
    </div>
  );
}

export default App;
