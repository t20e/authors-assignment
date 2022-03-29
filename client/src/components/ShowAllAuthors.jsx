import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';


const ShowAllAuthors = () => {
    //stor them in a state
    let [authorList, setAuthorList] = useState([])
    let [resetEffect, setResetEffect] = useState(true)
    useEffect( () =>{
        //use axios to get all the authors 
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthorList(res.data.results)
                console.log(authorList);
            })
            .catch(err=>{
                console.log('err loading all authors', err);
            })
    },[resetEffect])

    const deleteAuthor = (author) =>{
        axios.delete(`http://localhost:8000/api/authors/delete/${author._id}`)
            .then(res =>{
                let filterAuthorList = authorList.filter((author) =>{
                    return author._id != author
                })
                resetEffect? setResetEffect(false): setResetEffect(true)
                setAuthorList(filterAuthorList)
            })
            .catch(err =>{
                console.log(err, 'error deleting author _');
            })
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/create'}>Add an Author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {/* //repeat to show all authors  */}
                    {
                        authorList.map( (author, i) =>{
                            return(
                                <tr key={i}>
                                    <td>{author.name}</td>
                                    <td>
                                        <button><Link to={`/edit/${author._id}`}>edit</Link></button>
                                        <button onClick={()=> {deleteAuthor(author)}}>delete</button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};


export default ShowAllAuthors;