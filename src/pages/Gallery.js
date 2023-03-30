import { Fragment, useEffect, useState } from "react"
import { InfoCard } from "../components/InfoCard";

import data from '../assets/api.json'
import classes from './Gallery.module.css'

export const Gallery = () => {
// store data in a state
    const [employees, setEmployees] = useState(data)

    
    // map the state data
    //filter the state data based on search input

    return (
        <Fragment>
            <div className={classes["card-container"]}>
                {employees.map((employee) => (
                    <InfoCard key={employee.email} employee={employee} />
                ))}
            </div>
        </Fragment>
    )


}
