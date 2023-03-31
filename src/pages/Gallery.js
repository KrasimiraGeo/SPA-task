import classes from './Gallery.module.css'
import { Fragment } from "react"
import { InfoCard } from "../components/InfoCard"


export const Gallery = ({ employees }) => {

    // employees are passed from the App component
    // mapping the state data and rendering each employee inside a card

    return (
        <Fragment>
            {employees.length > 0 &&
                <div className={classes['card-container']}>
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
