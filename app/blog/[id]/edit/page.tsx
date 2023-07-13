import React from 'react';

interface Props {
    params: {
        id: string
    }
}


const EditPageWithID = ({params: {id}}: Props) => {
    return (
        <div>
                Here we will edit page with id: {id}
        </div>
    );
};

export default EditPageWithID;