import classes from './InfoCard.module.css'
import avatar from '../assets/avatar.png'
import available from '../assets/icon-available.svg'
import busy from '../assets/icon-busy.svg'


export const InfoCard = ({ employee }) => {

    // parse phone numbers to a unified format
    const regexp = new RegExp(/^(\d{3})(\d{3})(\d{4})$/)
    const phone = employee.phone.replace(/\D/g, '')  // digits only
    const formattedPhone = phone.replace(regexp, "+($1) $2 $3")

    return (
        <div className={classes.card}>
            <div className={classes["image-container"]}>
                {employee.image && <img src={employee.image} />}
                {!employee.image && <img src={avatar}></img>}
                {employee.available && <span><img src={available} /></span>}
                {!employee.available && <span><img src={busy} /></span>}
            </div>
            <div className={classes.container}>
                <h4>{employee.firstName} {employee.lastName}</h4>
                <p>{employee.location}</p>
            </div>
            <div className={classes["container-hidden"]}>
                <p>Phone: {formattedPhone}</p>
                <p>Email: {employee.email}</p>
            </div>
        </div>
    )

}
