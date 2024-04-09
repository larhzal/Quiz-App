//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import Signup from './signup/Signup';
import HomePage from './home/PageHome';
import Admin from './adminscreen/Admin';
import QuizzQuestion from './quizz/QuizzQuestion';
import QuizCategorie from './quizz/QuizCategorie';
import Users from './adminscreen/Users';
import AddQuestion from './adminscreen/AddQuestion';

const router = (
  <Routes>
    <Route key="home" path="/" element={<HomePage />} />
    <Route key="login" path="/login" element={<Login />} />
    <Route key="signup" path="/signup" element={<Signup />} />
    <Route key="amdin" path="/admin" element={<Admin />} />
    <Route path="/questions" element={<QuizzQuestion />} />
    {/* <Route path="/questions/:quizId" element={<QuizzQuestion />} /> */}
    <Route key="quiz" path="/quiz" element={<QuizCategorie />} />
    <Route key="/users" path="/users" element={<Users />} />
    <Route key="/add" path="/add" element={<AddQuestion />} />
  </Routes>
);

export default router;



// const router = () => (
//     <BrowserRouter>
//       <Routes>
//         <Route 
//             path="/login" 
//             element={<Login />} />
//         <Route 
//             path="/signup" 
//             element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );

// export default router;

