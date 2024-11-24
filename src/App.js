import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostsList from "./components/PostsList/index";
import Modal from "./components/Modal";

function App() {
  let [showModal, setShowModal] = useState(true);
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First post",
    },
    {
      id: 2,
      title: "Second post",
    },
    {
      id: 3,
      title: "Third post",
    },
  ]);

  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <PostsList posts={posts} />
      {/* <Modal>
        <h1>Zoom class is avaliable now.</h1>
        <p>
          free feel to <a href="">join</a> here.
        </p>
      </Modal> */}
      {showModal && (
        <Modal>
          <h1>Terms and Conditions</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button onClick={() => setShowModal(false)}>close</button>
        </Modal>
      )}
    </>
  );
}

export default App;
