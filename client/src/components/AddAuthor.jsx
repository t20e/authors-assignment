import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';

const AddAuthor = () => {
    //useState vars
    let [formErrors, setFormErrors] = useState({})
    let[formInfo, setFormInfo] = useState({
        name: ''
    })
    const redirect = useHistory();

    const createAuthor = (e) =>{
        e.preventDefault()
        //axios to post author
        axios.post('http://localhost:8000/api/authors/create', formInfo)
            .then(res =>{
                if(res.data.error){
                    setFormErrors(res.data.error.errors)
                    console.log('error adding author', formErrors);
                }else{
                    setFormInfo({
                        name:""
                    })
                    setFormErrors({})
                    redirect.push('/')
                }
            })
            .catch(err=>{
                console.log(err);
            })
    }
    const changeInput = (e) =>{
        e.preventDefault()
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })

    }


    return (
        <div>
            <h1>Add Author</h1>
            <Link to={"/"}>Home Page</Link>
             <form onSubmit={createAuthor} > 
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={changeInput} name='name'  />
                    <p>{formErrors.name?.message}</p>
                </div>
                <input type="submit" value="add author" />
             </form> 
        </div>
    );
};


export default AddAuthor;