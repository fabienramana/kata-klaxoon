import { useState } from "react"
import ApiResponse from "../../models/ApiResponse"
import BookmarkCollection from "../../models/BookmarkCollection"

export default function useInitBookmarks(){


    const [bookmarks, setBookmarks] = useState<BookmarkCollection[]>([])


    const api_noembed_domain = "http://noembed.com/embed?url="
    
    const addBookmark = (url: string) => {
        let toPing = `${api_noembed_domain}${url}`
        
        fetch(toPing, {method: 'GET'})
        .then((response) => response.json())
        .then((data) => {
            const dataF : ApiResponse = data
            const bookmarkCollectionItem: BookmarkCollection = {
                url,
                dataFetched: dataF,
                displayDetails: false
            }
            setBookmarks([...bookmarks, bookmarkCollectionItem]);
        })
    }

    const removeBookmark = (bookmark_url: string) => {
        const newBookmarks = bookmarks.filter((bookmark) => bookmark.url !== bookmark_url)
        setBookmarks(newBookmarks)
    }

    const setDisplayDetails = (bookmark_url: string, status: boolean) => {
        const modifiedBookmarks = bookmarks.map((bookmark) => {
            if(bookmark.url === bookmark_url){
                bookmark.displayDetails = status
            }
            return bookmark
        })
        console.log(modifiedBookmarks)
        setBookmarks(modifiedBookmarks);
    }

    return {
        bookmarks,
        addBookmark,
        removeBookmark,
        setDisplayDetails,
    }
}