import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Navigation from "@/components/Navigation";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import PostSearch from "@/components/PostSearch";


const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Blog', href: '/blog'},
    {label: 'About', href: '/about'},
    {label: 'Test', href: '/about'}
];

export default function DrawerAppBar() {


    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        <Link  style={{textDecoration: 'none', color: '#230b0b'}} href={'/'}>MUI</Link>
                    </Typography>
                    <PostSearch />
                    <Navigation navLinks={navItems}/>
                </Toolbar>
            </AppBar>
            <Box component="main" sx={{p: 5}}>
            </Box>
        </Box>
    );
}
