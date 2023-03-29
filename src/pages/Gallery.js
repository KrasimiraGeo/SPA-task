import { Fragment, useEffect, useState } from "react"
import { InfoCard } from "../components/InfoCard";

import employees from '../assets/api.json'
import classes from './Gallery.module.css'

export const Gallery = () => {
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
