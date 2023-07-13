'use client'

import {useState} from "react";
import Box from "@mui/material/Box";
import {Input} from "@mui/material";
import Button from "@mui/material/Button";


const PostSearch = () => {

    const [search, setSearch] = useState('')
    const onButtonClick = () => {
        console.log('search: ', search)
    };


    return (
        <Box sx={{mr: 15}}>
            <Input
                sx={{mr: 5}}
                type='search'
                placeholder='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
            <Button
                sx={{
                    color: 'black',
                    border: '1px solid black'
                }}
                onClick={onButtonClick}
                type={"submit"}>Submit</Button>
        </Box>
    );
};

export default PostSearch;