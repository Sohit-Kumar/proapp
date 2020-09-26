import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Final = () =>{
    const history = useHistory();
    return(
        <>
            <Button color='secondary' variant='contained' onClick={()=> history.push('/')}>Click</Button>
        </>
    );
}

export default Final;