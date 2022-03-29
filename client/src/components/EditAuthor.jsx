import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';



const EditAuthor = () => {
    let {_id} = useParams()
    let [author, setAuthor] = useState({
        name:''
    })
    let [formErrors, setFormErros] = useState({})
    let redirect = useHistory()
    //use axios get to get all info of author
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res =>{
                setAuthor(res.data.results)
            })
            .catch(err =>{
                console.log('error getting one author');
            })
    }, [_id])
    //use a axios put
    const updateAuthor = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/edit/${_id}`, author)
            .then(res =>{
                if(res.data.error){
                    setFormErros(res.data.error.errors)
                    console.log('error updating author _', formErrors);
                }else{
                    setFormErros({})
                    redirect.push('/')
                }
            })
            .catch(err=>{
                console.log(err, 'error updating');
            })
    }
    //edit inputs
    const editInputs = (e) =>{
        //*** IF U ARE USING A CHECKBOX OR SOMETHING OTHER THEN TEXT OR # USE AN IF STATEMENTS */
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <form onSubmit={updateAuthor}> 
                <h1>update author</h1>
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" name='name' onChange={editInputs} value={author.name}  />
                    <p>{formErrors.name?.message}</p>
                </div>
                <input type="submit" value="Edit Product" />

            </form>
        </div>
    );
};


export default EditAuthor;