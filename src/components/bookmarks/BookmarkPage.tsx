import BookmarkInputAdd from "./bookmark-add/BookmarkInputAdd"
import useInitBookmarks from "./../../hooks/bookmarks/useBookmarksHook"
import BookmarksList from "./bookmarks-list/BookmarksList"

export default function BookmarkPage(){

    const {
        bookmarks,
        addBookmark,
        removeBookmark,
        setDisplayDetails
    } = useInitBookmarks()

    return(
        <>
            <BookmarkInputAdd
                addBookmark={addBookmark}/>
            <BookmarksList 
                bookmarks={bookmarks}
                removeBookmark={removeBookmark}
                setDisplayDetails={setDisplayDetails}/>
        </>
    )
}