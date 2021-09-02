import React from 'react'

const Link = ({className, href, children}) => {
    const onClick = (event) => {
        //this specific if statement is to open a new tab on the link
        //when a user clicks it on the link with ctrl+click
        if(event.metaKey || event.ctrlKey) {
            return
        }

        event.preventDefault();
        window.history.pushState({},'',href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return (
        <a onClick = {onClick} className={className} href={href}>      
            {children}
        </a>
    )
}

export default Link;