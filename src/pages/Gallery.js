import { Fragment} from "react"
import { InfoCard } from "../components/InfoCard"
import classes from './Gallery.module.css'

export const Gallery = ({employees}) => {

    //employees are passed from the App component
    // map the state data and render each employee inside a card

    return (
        <Fragment>
            <div className={classes.wrapper}>
            <div className={classes["card-container"]}>
                {employees.map((employee) => (
                    <InfoCard key={employee.email} employee={employee} />
                ))}
            </div>
            </div>
        </Fragment>
    )


}
