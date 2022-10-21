import React from 'react';
import FindUs from '../LeftSideNav/FindUs';
import LoginLink from '../LeftSideNav/LoginLink';
import SlideCouresel from '../LeftSideNav/SlideCouresel';

const RightSideNav = () => {
    return (
        <div>
            <LoginLink></LoginLink>
            <FindUs></FindUs>
            <SlideCouresel></SlideCouresel>
        </div>
    );
};

export default RightSideNav;