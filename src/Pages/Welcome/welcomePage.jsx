import style from './welcome.module.css'
import LightLogo from '../../assets/BackLight.png'
import DarkLogo from '../../assets/DarkLogo.png'
import FootLogo from '../../assets/footLogo.png'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext.jsx'

export default function WelcomePage(){
    const { theme } = useTheme();
    const bgLogo = theme === 'dark' ? DarkLogo : LightLogo;

    return (
        <div className={style.welcomePage}>
            <div className={style.welcomeInfo}>
                <div className={style.contentInfo}>
                    <div className={style.part1}>
                        <p className={style.heading}>Welcome to Sonola</p>
                        <p>With Sonola, making stand-out marketing content 
                            is as easy as a few clicks. Let’s get started!
                        </p>
                    </div>
                    <div className={style.part2}>
                        <div className={style.stat}>
                            <p>63% of marketers say creating engaging 
                                content consistently is their biggest challenge.
                            </p>
                            <span>Content Marketing Institute, 2022</span>
                        </div>
                        <div className={style.progress}>
                            <ul>
                                <li className={style.list1}></li>
                                <li className={style.list2}></li>
                                <li className={style.list3}></li>
                                <li className={style.list4}></li>
                                <li className={style.list5}></li>
                                <li className={style.list6}></li>
                            </ul>
                            <Link to='/home'>
                                <button>Next</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.contentImg}>
                    <img src={bgLogo} alt="" />
                </div>
            </div>
            <img className={style.footLogo} src={FootLogo} alt="" />
        </div>
    )
}