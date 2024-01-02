import React from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Trending from './Pages/Trending'
import Categories from './Pages/Categories'
import Languages from './Pages/Languages'
import Saved from './Pages/Saved'
import Music from './Pages/Music'
import AddVideos from './Pages/AddVideos'
import Help from './Pages/Help'
import Feedback from './Pages/Feedback'
import Settings from './Pages/Settings'
import Profile from './Pages/Profile'
import LogIn from './Pages/LogIn'
import Resgister from './Pages/Resgister'
import Video from './Pages/Video'
import Art from './components/categories/Art'
import Comedy from './components/categories/Comedy'
import Cooking from './components/categories/Cooking'
import Edu from './components/categories/Edu'
import Fitness from './components/categories/Fitness'
import Gaming from './components/categories/Gaming'
import Life from './components/categories/Life'
import News from './components/categories/News'
import Science from './components/categories/Science'
import Tech from './components/categories/Tech'
import Travel from './components/categories/Travel'
import English from './components/languages/English'
import Arabic from './components/languages/Arabic'
import Hindi from './components/languages/Hindi'
import Kannada from './components/languages/Kannada'
import Korian from './components/languages/Korian'
import Malayalam from './components/languages/Malayalam'
import Panjabi from './components/languages/Panjabi'
import Spanish from './components/languages/Spanish'
import Tamil from './components/languages/Tamil'
import Tel from './components/languages/Tel'
import Vlog from './components/categories/Vlog'



function App() {
  return (
    <div className='App'>
      
      <Header/>

      <SideBar/>

      <Routes>
      <Route path='/'element={<Home/>}/>

      <Route path='/login'element={<LogIn/>}/>
      <Route path='/play'element={<Video/>}/>
      <Route path='/register'element={<Resgister/>}/>
      <Route path='/trending'element={<Trending/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/language'element={<Languages/>}/>
      <Route path='/saved'element={<Saved/>}/>
      <Route path='/music'element={<Music/>}/>
      <Route path='/addvideos'element={<AddVideos/>}/>
      <Route path='/help'element={<Help/>}/>
      <Route path='/feedback'element={<Feedback/>}/>
      <Route path='/settings'element={<Settings/>}/>
      <Route path='/profile'element={<Profile/>}/>
      <Route path='/art'element={<Art/>}/>
      <Route path='/comedy'element={<Comedy/>}/>
      <Route path='/coocking'element={<Cooking/>}/>
      <Route path='/edu'element={<Edu/>}/>
      <Route path='/fitness'element={<Fitness/>}/>
      <Route path='/gaming'element={<Gaming/>}/>
      <Route path='/life'element={<Life/>}/>
      <Route path='/vlogs'element={<Vlog/>}/>
      <Route path='/news'element={<News/>}/>
      <Route path='/science'element={<Science/>}/>
      <Route path='/tech'element={<Tech/>}/>
      <Route path='/travel'element={<Travel/>}/>
      <Route path='/eng'element={<English/>}/>
      <Route path='/ara'element={<Arabic/>}/>
      <Route path='/hin'element={<Hindi/>}/>
      <Route path='/kan'element={<Kannada/>}/>
      <Route path='/kor'element={<Korian/>}/>
      <Route path='/mal'element={<Malayalam/>}/>
      <Route path='/pan'element={<Panjabi/>}/>
      <Route path='/spa'element={<Spanish/>}/>
      <Route path='/tam'element={<Tamil/>}/>
      <Route path='/tel'element={<Tel/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}


export default App