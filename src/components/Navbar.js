import classes from './Navbar.module.css'
import search from '../assets/icon-search.svg'

export const Navbar = () => {

    return (
        <nav className={classes.navbar}>
            <div className={classes["navbar-brand"]}>Support Desk</div>
            <div className={classes["search-bar"]}>
                <input type="text" className={classes["search-input"]} placeholder="Search..."/>
                    <button className={classes["search-button"]}>
                        <img src={search}></img>
                    </button>
            </div>
        </nav>
    )
}