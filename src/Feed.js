import React, { useEffect, useState, } from 'react'
import "./Feed.css"
import InputOption from "./InputOption"
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';


function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => (
            setPosts(
                snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                ))
            )
        )            
        );
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'md.nasmus shahadat',
            description: 'public',
            message: input,
            photoUrl:'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        })
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e =>setInput(e.target.value)} type="text"/>                       
                        <button onClick={sendPost} type="submit">send</button>
                    </form>
                </div>
                <div className="feed__inputOption">
                    {/* input option */}
                    <InputOption Icon={ImageIcon} title="Photo" color ="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color ="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color ="#COCBCD" />
                    <InputOption Icon={ViewDayIcon} title="Write article" color ="#7FC15E" />
                </div>   
                                            
            </div>
            {/* Posts */}

            {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}

            
                    


                     {/** 
                     <Post
                        name="md.Tanvir hasan ratul" 
                        description='Public'
                        message='this is a message'
                     />
                     <Post
                        name="Mahabubul Alom Pranto" 
                        description='Public'
                        message='this is a message'
                     />
                     <Post
                        name="Sabbir prio" 
                        description='Public'
                        message='this is a message'
                     />
                     <Post
                        name="Silshad shuvo" 
                        description='Public'
                        message='this is a message'
                     />
                     <Post
                        name="Ali akbor" 
                        description='Public'
                        message='this is a message'
                     />
                     <Post
                        name="AshiAshiqur rahman" 
                        description='Public'
                        message='this is a message'
                     />
                     */}

            
            
        </div>
    )
}

export default Feed
