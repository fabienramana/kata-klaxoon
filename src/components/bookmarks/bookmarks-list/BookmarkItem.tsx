
type BookmarkItemProps = {
    url: string,
    displayDetails: boolean,
    removeBookmark: () => void,
    setDisplayDetails: (url: string, status: boolean) => void
}

export default function BookmarkItem({url, displayDetails, removeBookmark, setDisplayDetails}: BookmarkItemProps){


    const handleDeleteClick = () => {
        removeBookmark()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayDetails(url, e.target.checked)
    }

    const handleUpdateClick = () => {
        setDisplayDetails(url, !displayDetails)
    }

    return (
        <>
            <label onClick={handleUpdateClick}>{url}  </label>
            <input type="button" onClick={()=> handleDeleteClick()} value="Delete"/>
            <input type="checkbox" onChange={handleChange} checked={displayDetails}/>
        </>
    )
}