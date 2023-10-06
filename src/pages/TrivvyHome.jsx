import "./TrivvyHome.css";
import { NavLink } from "react-router-dom";

function TrivvyHome() {
    return (
        <div className="trivvyHome">
            <h2 className="trivvyIntro">Fun Trivia Games For Children and Adults</h2>
            <h3>Choose Your <span className="tag">TRIVVY!</span></h3>
            <div className="trivvyCategories">
                <NavLink to="/music"><div className="trivvyCategory music">
                    <i className="trivvyIconHome fa-solid fa-music" title="Music"></i>
                    <h3>MUSIC TRIVVY!</h3>
                </div></NavLink>
                <NavLink to="/game"><div className="trivvyCategory videoGame">
                    <i className="trivvyIconHome fa-solid fa-gamepad" title="Game"></i>
                    <h3>GAME TRIVVY!</h3>
                </div></NavLink>
                <NavLink to="/film"><div className="trivvyCategory film">
                    <i className="trivvyIconHome fa-solid fa-film" title="Film"></i>
                    <h3>FILM TRIVVY!</h3>
                </div></NavLink>
                <NavLink to="/television"><div className="trivvyCategory tv">
                    <i className="trivvyIconHome fa-solid fa-tv" title="TV"></i>
                    <h3>TV TRIVVY!</h3>
                </div></NavLink>
                <NavLink to="/animal"><div className="trivvyCategory animal">
                    <i className="trivvyIconHome fa-solid fa-cat" title="Animal"></i>
                    <h3>ANIMAL TRIVVY!</h3>
                </div></NavLink>
            </div>
        </div>
    )
}

export default TrivvyHome;