import classes from './InfoCard.module.css'
import avatar from '../assets/avatar.png'
import available from '../assets/icon-available.svg'
import busy from '../assets/icon-busy.svg'


export const InfoCard = ({ employee }) => {

    // make phone numbers valid
    // check for valid emails

    return (
        <div className={classes.card}>
            <div className={classes["image-container"]}>
            {employee.image && <img src={employee.image}/>}
            {!employee.image && <img src={avatar}></img>}
            {employee.available && <span><img src ={available}/></span>}
            {!employee.available && <span><img src ={busy}/></span>}
            </div>
                <div className={classes.container}>
                    <h4>{employee.firstName} {employee.lastName}</h4>
                    <p>{employee.location}</p>
                </div>
                <div className={classes["container-hidden"]}>
                    <p>Phone: {employee.phone}</p>
                    <p>Email: {employee.email}</p>
                </div>
        </div>
    )

}
