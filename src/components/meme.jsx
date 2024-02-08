import React from "react";
import "./meme.css";
import memesdata from "./memesdata";

export default function Memeform(){
    const [memeImage, setMemeImage] = React.useState("");
    function getMemeImage(){
        const memesArray = memesdata.data.memes;
        const randomnum = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomnum].url)
    }
    return(
        <div className="main_container">
            <div class="meme_form">
                <input type="text" class="input_field" placeholder="Top Text" name = "top_text"/>
                <input type="text" class="input_field" placeholder="Bottom Text" name = "bottom_text"/>
                <button type="submit" onClick = { getMemeImage } class="sub_btn">Create Meme!!</button>
            </div>
            <div className="image">
                <img src={ memeImage } alt="" />
            </div>
        </div>
    )
}