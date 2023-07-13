import React from 'react';

interface Props {
    params: {
        id: string
    }
}

interface IPostBody {
    userId: number
    id: number
    title: string
    body: string
}

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json()
}



export const generateMetadata =  ({params: {id}}: Props) => {
    return {
        title: id
    }
}

const BlogID = async ({params: {id}}: Props) => {


    const postBody:IPostBody = await getData(id)

    return (
        <div>
            id: {postBody.id}
            <br/>
            Title: {postBody.title}
        </div>
    );
};

export default BlogID;