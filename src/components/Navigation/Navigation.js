import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav
        style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
        }}
    >
        <Link to="/">Home</Link> |<Link to="/basic">Basic</Link> |<Link to="/queue">Queue</Link> |<Link to="/stack">Stack</Link>
    </nav>
);

export default Navigation;
