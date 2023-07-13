'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import styles from './TheHeader.module.scss'

interface NavLink {
    label: string,
    href: string
}

interface Props {
    navLinks: NavLink[]
}

const Navigation = ({navLinks}: Props) => {
    const pathName = usePathname()

    return (
        <>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                {navLinks.map((navItem) => {
                        const isActive = pathName === navItem.href
                        return (
                            <Button key={navItem.label} sx={{color: '#fff'}}>
                                <Link
                                    underline="none"
                                    className={isActive ? styles.active : ''}
                                    href={`${navItem.href}`}
                                    style={{textDecoration: 'none', color: '#230b0b'}}

                                >
                                    {navItem.label}
                                </Link>
                            </Button>
                        )

                    }
                )}
            </Box>
        </>
    );
};

export default Navigation;