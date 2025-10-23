import { useState } from 'react';
import style from './nav.module.css';
import { Link } from 'react-router-dom';
import Home from '../../assets/Home.png';
import Projects from '../../assets/Projects.png';
import Projects2 from '../../assets/Projects2.png';
import Templates from '../../assets/Templates.png';
import Templates2 from '../../assets/Templates2.png';
import Uploads from '../../assets/Uploads.png';
import Uploads2 from '../../assets/Uploads2.png';
import More from '../../assets/More.png';
import More2 from '../../assets/More2.png';
import Help from '../../assets/Help.png';
import Help2 from '../../assets/Help2.png';
import Setting from '../../assets/Setting.png';
import Setting2 from '../../assets/Setting2.png';
import Profile from '../../assets/Profile.png';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function NavBar() {
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const handleSettingsClick = () => {
        setShowSettingsMenu(!showSettingsMenu);
    };

    const Project = theme === 'dark' ?  Projects2 : Projects;
    const Template = theme === 'dark' ? Templates2 : Templates;
    const Upload = theme === 'dark' ? Uploads2 : Uploads;
    const MoreIcon = theme === 'dark' ? More2 : More;
    const HelpIcon = theme === 'dark' ? Help2 : Help;
    const SettingIcon = theme === 'dark' ? Setting2 : Setting;

    return (
        <nav>
            <ul>
                <li className={style.activePage}>
                    <div className={style.Img}>
                        <img src={Home} alt="Home" />
                    </div>
                    <span>Home</span>
                </li>
                <li>
                    <div className={style.Img}>
                        <img src={Project} alt="Projects" />
                    </div>
                    <span>Projects</span>
                </li>
                <li>
                    <div className={style.Img}>
                        <img src={Template} alt="Templates" />
                    </div>
                    <span>Templates</span>
                </li>
                <li>
                    <div className={style.Img}>
                        <img src={Upload} alt="Uploads" />
                    </div>
                    <span>Uploads</span>
                </li>
                <li className={style.More}>
                    <div className={style.Img}>
                        <img src={MoreIcon} alt="More" />
                    </div>
                    <span>More</span>
                </li>
            </ul>

            {/* Account Section */}
            <div className={style.accountDetails}>
                <div className={style.accountCon}>
                    <Link to='#'><img src={HelpIcon} alt="Help" /></Link>
                    <div className={style.settingWrapper}>
                        <img
                            src={SettingIcon}
                            alt="Settings"
                            onClick={handleSettingsClick}
                            className={style.settingIcon}
                        />
                        {showSettingsMenu && (
                            <div className={style.settingsMenu}>
                            <p>Go to Profile Settings</p>
                            <button onClick={toggleTheme}>
                                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                            </button>
                            </div>
                        )}
                    </div>
                </div>
                <Link to='#'><img src={Profile} alt="Profile" /></Link>
            </div>
        </nav>
    );
}
