import { Fragment} from "react"
import { InfoCard } from "../components/InfoCard"
import classes from './Gallery.module.css'

export const Gallery = ({employees}) => {

    //employees are passed from the App component
    // map the state data and render each employee inside a card

    const containerClass = employees.length < 4 ? classes['card-container-dynamic'] : classes['card-container']

    return (
        <Fragment>
           {employees.length > 0 && 
            <div className={containerClass}>
                {employees.map((employee) => (
                    <InfoCard key={employee.email} employee={employee} />
                ))}
            </div>
            }
            {employees.length === 0 && 
            <div className={classes.message}>
            <h3>Sorry! We could not find a match.</h3>
            </div>}
            
        </Fragment>
    )


}
