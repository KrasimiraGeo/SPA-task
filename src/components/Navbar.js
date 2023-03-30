import classes from './Navbar.module.css'
import search from '../assets/icon-search.svg'

export const Navbar = ({searchQuery, setSearchQuery}) => {

    //lifting the state and the search query to the app component
    //filter the results and pass them down to the gallery component

    //set the search input and lift it up to the App comp
    const searchInputHandler= (event) => {
        setSearchQuery(event.target.value)
    };

    return (
        <nav className={classes.navbar}>
            <div className={classes["navbar-brand"]}>Support Desk</div>
            <div className={classes["search-bar"]}>
                <input 
                type="text" 
                className={classes["search-input"]} 
                placeholder="Search..."
                value={searchQuery}
                onChange={searchInputHandler}
                />
                    <button className={classes["search-button"]}>
                        <img src={search}></img>
                    </button>
            </div>
        </nav>
    )
}