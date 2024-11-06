// import ApiPost from './pages/Post';
// import Reducer from './pages/Reducer';

import LoginPage from "./pages/account/Login";
import RegisterForm from "./pages/account/Register";
import AddPost from "./pages/AddPost";

// import TodoList from "./pages/TodoList";

const App = () => {
  return (
    <div>
      {/* <Reducer /> */}
      {/* <TodoList/> */}
      {/* <ApiPost /> */}
      <RegisterForm/>
      <LoginPage/>
      <AddPost/>
    </div>
  );
};

export default App;
