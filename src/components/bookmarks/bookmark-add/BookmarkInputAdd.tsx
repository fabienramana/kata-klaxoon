import React, { useState } from "react";

type BookmarkInputAddProps = {
    addBookmark: (str: string) => void
}

export default function BookmarkInputAdd({ addBookmark } : BookmarkInputAddProps){
    
    const [inputContent, setInputContent] = useState("")
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setInputContent(e.target.value)
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>){
        const normalizedInput = inputContent.trim();
        if(e.key === 'Enter' && normalizedInput !== ""){
            addBookmark(normalizedInput);
            setInputContent("")
          }
    }

    function handleClick(e: React.MouseEvent<HTMLInputElement>){
        const normalizedInput = inputContent.trim();
        if(normalizedInput !== ""){
            addBookmark(normalizedInput);
            setInputContent("")
          }
    }


    return (
        <>
            <input className="new-bookmark"
            type="text"
            value={inputContent}
            placeholder="What needs to be done?"
            onChange={handleChange} 
            onKeyDown={handleKeyPress}/>

            <input type="button" onClick={(e) => handleClick(e)} value="Save"/>
         </>
    )
}