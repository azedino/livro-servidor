import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Header';
import LivroDados from './LivroDados';
import LivroLista from './LivroLista';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LivroLista from './LivroLista';
// import LivroDados from './LivroDados';

// const App: React.FC = () => {
//   return (
//     <Router>
//       {/* Menu de navegação */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">Catálogo de Livros</Link>
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                     Listar Livros
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/dados">Cadastrar Livro</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <Routes>
//           <Route path="/" element={<LivroLista />} />
//           <Route path="/dados" element={<LivroDados />} />
//       </Routes>
//     </Router>
//   );
// };
// export default App;