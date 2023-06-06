import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
// import { icon } from '@fortawesome/fontawesome-svg-core'
import './styles.css'

function ProfileHeader() {
  return (
    <>
        <div className="mainHeader">
            <div className="leftHeader">
                <div className="avater">
                    <img src="images/alamin.jpg" alt="" />
                </div>
                <div className="userNames">
                    <p>K.M. AL-AMIN</p>
                    <p>01308490202</p>
                </div>
            </div>
            <div className="rightHeader">
                <FontAwesomeIcon  icon={faGear} />
                <FontAwesomeIcon style={{marginLeft: "10px"}} icon={faArrowUpFromBracket} />
            </div>
        </div>
    </>
  )
}

export default ProfileHeader