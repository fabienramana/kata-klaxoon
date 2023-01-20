import BookmarkItem from "./BookmarkItem";
import BookmarkDetails from "../bookmark-details/BookmarkDetails";
import BookmarkCollection from "../../../models/BookmarkCollection";

type BookmarksListProps = {
    bookmarks: BookmarkCollection[],
    removeBookmark: (bookmark: string) => void,
    setDisplayDetails: (url: string, status: boolean) => void
}

export default function BookmarksList({ bookmarks, removeBookmark, setDisplayDetails }: BookmarksListProps){


    return(		
            <ul className="bookmark-list">
                {bookmarks.map((bookmark, i) => {
                    return(
                        <li key={i}>
                            <div>
                            <BookmarkItem 
                                    url={bookmark.url}
                                    displayDetails={bookmark.displayDetails}
                                    removeBookmark={() => removeBookmark(bookmark.url)}
                                    setDisplayDetails={setDisplayDetails}
                                    />
                            </div>
                            { bookmark.displayDetails && (<>
                            <BookmarkDetails
                                dataFetched={bookmark.dataFetched}/>
                            </>)}
                        </li>
                        )
                })}
            </ul>
    )
}