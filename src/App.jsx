

import MainPage from './assets/pages/MainPage/MainPage'
import style from './global.module.css'
import Playbar from './components/Playbar/Playbar'


const App = () => (
    <div className={style.wrapper}>

        <MainPage/>

        <Playbar />
    </div>
);

export default App
