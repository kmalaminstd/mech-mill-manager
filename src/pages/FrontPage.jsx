import React from 'react'
import ProfileHeader from '../components/layout/shared/ProfileHeader'
import CurrentDateCal from '../components/layout/shared/CurrentDateCal'
import { Link } from 'react-router-dom'
import './style/style.css'

function FrontPage() {
  return (
    <>  
        <div className="mainFrontPage" style={{padding: '8px 10px'}}>
            <ProfileHeader />
            <CurrentDateCal />

            <nav>
                <ul>
                    <li> <Link to="/members">Members</Link> </li>
                    <li> <Link>Add Meal</Link> </li>
                    <li> <Link>Add Purchase</Link> </li>
                    <li> <Link>Monthly Summary</Link> </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default FrontPage