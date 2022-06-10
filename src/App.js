
import { Box } from '@mui/system';
import './App.css';
import CardList from './component/CardList';
import Form from './component/Form/index';
import Header from './component/Header/index';
import{Routes, Route} from 'react-router-dom';
import Login from './component/Login/index';
import { useState } from 'react';
import AddArticles from './component/AddArticles/index';
import Articles from './component/Articles/index';

function App() {
  const [token,setToken]= useState("")
  const [article,setArticle] = useState([])

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <Routes>
        <Route path="/" element={<CardList token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/add-articles"
          element={<AddArticles article={article} setArticle={setArticle} />}
        />
        <Route
          path="/articles"
          element={<Articles article={article}  />}
        />
      </Routes>
    </Box>
  );
}

export default App;
