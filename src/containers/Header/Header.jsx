import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import { TitleHeader } from './style.';

import IconButton from '@mui/material/IconButton';
import AddCardIcon from '@mui/icons-material/AddCard';

const Header = () => {
    return (
        <div className='Comp-Header'>
            <div className='Header'>
                {/* <div style={{
                width: '100%', display: 'flex', alignItems: 'center', padding: '3px',
                borderbottom: '5px groove rgba(23, 107, 53, 0.836)',
                backgroundColor: '#bfdbf7'
            }}> */}
                <TitleHeader>Calendário Pepeu</TitleHeader>
                <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    // to={`/invoices/0`}
                    to={'/compromissos/-1'}
                >
                    <IconButton style={{ width: "20px" }}>
                        <AddCardIcon style={{ color: "black" }} />
                    </IconButton>
                </Link>
            </div>
        </div >
    );
}
export default Header;