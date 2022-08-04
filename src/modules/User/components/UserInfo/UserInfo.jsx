import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faEnvelope, faLocationDot, faPerson, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";

const UserInfo = ({...user}) => {
    return (
        <div>
            <div className='user-details__item'>
                <FontAwesomeIcon icon={faUser} size="xl" className='user-details__icon'/>
                <span className='user-details__info'>{user.username}</span>
            </div>
            <div className='user-details__item'>
                <FontAwesomeIcon icon={faPerson} size="xl" className='user-details__icon'/>
                <span className='user-details__info'>{user.name}</span>
            </div>
            <div className='user-details__item'>
                <FontAwesomeIcon icon={faEnvelope} size="xl" className='user-details__icon'/>
                <span className='user-details__info'>{user.email}</span>
            </div>
            <div className='user-details__item'>
                <FontAwesomeIcon icon={faPhone} size="xl" className='user-details__icon'/>
                <span className='user-details__info'>{user.phone?.split(" ")[0]}</span>
            </div>
            <div className='user-details__item'>
                <FontAwesomeIcon icon={faLocationDot} size="xl" className='user-details__icon'/>
                <span
                    className='user-details__info'>{user.address?.city}, {user.address?.street}, {user.address?.suite}, {user.address?.zipcode}</span>
            </div>
            <div className='user-details__item'>
                <FontAwesomeIcon icon={faCamera} size="xl" className='user-details__icon'/>
                <span
                    className='user-details__info'>{user.website}</span>
            </div>
        </div>
    );
};

export default UserInfo;