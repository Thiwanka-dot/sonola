import NavBar from "../../Components/Nav/navBar";
import style from './home.module.css';
import LightLego from '../../assets/footLogo.png'
import DarkLego from '../../assets/footLogo2.png'
import Gemini from '../../assets/Gemini.png'
import Banner from '../../assets/Banner.png'
import Star from '../../assets/Star.png'
import RightArrow from '../../assets/RightArrow.png'
import Image1 from '../../assets/Image1.png'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.png'
import Image4 from '../../assets/Image4.png'
import Clock from '../../assets/Clock.png'
import Dots from '../../assets/Dots.png'
import Website from '../../assets/Website.png'
import Website2 from '../../assets/Website2.png'
import Document from '../../assets/Document.png'
import Thumbnail from '../../assets/Thumbnail.png'
import Docs from '../../assets/Docs.png'
import TopRight from '../../assets/TopRight.png'
import Pending from '../../assets/Pending.png'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useTheme } from '../../context/ThemeContext.jsx'

export default function HomePage(){

    const { theme } = useTheme();
    const headerLogo = theme === 'dark' ? DarkLego : LightLego;

    return(
        <div className={style.homePage}>
            <NavBar/>
            <div className={style.dashboard}>
                <div className={style.header}>
                    <Link to='/'>
                        <img src={headerLogo} alt="Logo" />
                    </Link>
                    <div className={style.searchBar}>
                        <FontAwesomeIcon icon={faSearch} className={style.icon} title="Settings" />
                        <input type="search" placeholder="Search projects and experiences" />
                    </div>                    
                    <button>
                        <p>Try Pro</p>
                        <img src={Gemini} alt="upgrade" />
                    </button>
                </div>
                <div className={style.content}>
                    <div className={style.highlight}>
                        <img src={Banner} alt="highlight banner" />
                    </div>
                    <div className={style.recommend}>
                        <div className={style.rec1}>
                            <div className={style.part}>
                                <img src={Star} alt="star" />
                                <p>For you</p>
                            </div>
                            <div className={style.part}>
                                <p>View all templates</p>
                                <img src={RightArrow} alt="Right Arrow" />
                            </div>
                        </div>
                        <div className={style.rec2}>
                            <div className={style.option}>
                                <div className={style.mainImage}>
                                    <img src={Image1} alt="Image" />
                                </div>
                                <div className={style.optionDetails}>
                                    <span>Web Pages</span>
                                    <div className={style.active}>
                                        <p>Good products deserves good websites.</p>
                                        <div className={style.imageCon}>
                                            <img src={RightArrow} alt="Right Arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.option}>
                                <div className={style.mainImage}>
                                    <img src={Image2} alt="Image" />
                                </div>
                                <div className={style.optionDetails}>
                                    <span>Presentation</span>
                                    <div className={style.active}>
                                        <p>Easily edit our animated templates.</p>
                                        <div className={style.imageCon}>
                                            <img src={RightArrow} alt="Right Arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.option}>
                                <div className={style.mainImage}>
                                    <img src={Image3} alt="Image" />
                                </div>
                                <div className={style.optionDetails}>
                                    <span>Social Media</span>
                                    <div className={style.active}>
                                        <p>Everything you need for socials.</p>
                                        <div className={style.imageCon}>
                                            <img src={RightArrow} alt="Right Arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.option}>
                                <div className={style.mainImage}>
                                    <img src={Image4} alt="Image" />
                                </div>
                                <div className={style.optionDetails}>
                                    <span>Sales Pitch</span>
                                    <div className={style.active}>
                                        <p>Turn your dreams into reality.</p>
                                        <div className={style.imageCon}>
                                            <img src={RightArrow} alt="Right Arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className={style.recommend}>
                        <div className={style.rec1}>
                            <div className={style.part}>
                                <img src={Clock} alt="Clock" />
                                <p>Recents</p>
                            </div>
                            <div className={style.part}>
                                <p>See in projects</p>
                                <img src={RightArrow} alt="Right Arrow" />
                            </div>
                        </div>
                        <div className={style.rec2}>
                            <div className={style.option}>
                                <div className={style.mainImage3}>
                                    <img src={Document} alt="Image" />
                                    <div className={style.subClass}>
                                        <img src={Docs} alt="Docs" />
                                        <p>Open in</p>
                                        <img src={TopRight} alt="Top Right" />
                                    </div>
                                </div>
                                <div className={style.optionDetails}>
                                    <span>Document</span>
                                    <div className={style.active}>
                                        <p>Mark · May 14, 2025</p>
                                        <div className={style.imageCon2}>
                                            <img src={Dots} alt="Three Dots" />                                            
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                            <div className={style.option}>
                                <div className={style.mainImage3}>
                                    <img src={Website} alt="Image" />
                                    <div className={style.subClass2}>
                                        <p>Updating...</p>
                                    </div>
                                </div>
                                <div className={style.optionDetails}>
                                    <span>Web Pages</span>
                                    <div className={style.active}>
                                        <p>Mark · May 14, 2025</p>
                                        <div className={style.imageCon2}>
                                            <img src={Dots} alt="Three Dots" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.option}>
                                <div className={style.mainImage2}>
                                    <img src={Thumbnail} alt="Image" />
                                </div>
                                <div className={style.optionDetails}>
                                    <span>60 Second Cut</span>
                                    <div className={style.active}>
                                        <p>Caroline · May 14, 2025</p>
                                        <div className={style.imageCon2}>
                                            <img src={Dots} alt="Three Dots" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.option}>
                                <div className={style.mainImage3}>
                                    <img src={Website2} alt="Image" />
                                    <div className={style.subClass3}>
                                        <img src={Pending} alt="Pending" />
                                        <p>Needs Review</p>
                                    </div>
                                    <div className={style.subClass4}>
                                        <p>Live</p>
                                    </div>
                                </div>
                                <div className={style.optionDetails}>
                                    <span>Web Pages</span>
                                    <div className={style.active}>
                                        <p>Mark · May 14, 2025</p>
                                        <div className={style.imageCon2}>
                                            <img src={Dots} alt="Three Dots" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}