import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import React from 'react';

const UserAccountDetailsPage = () => {
    return (
        <div>
            <div className="absolute top-4 left-4">
                <GoToHomePage message={"My profile"} />
            </div>
        </div>
    )
}

export default UserAccountDetailsPage;