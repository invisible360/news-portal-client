import React from 'react';
import FindUs from './FindUs';
import LoginLink from './LoginLink';
import SlideCouresel from './SlideCouresel';

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