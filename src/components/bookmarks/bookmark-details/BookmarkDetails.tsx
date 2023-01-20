import ApiResponse from "../../../models/ApiResponse"

type BookmarkDetailsProps = {
    dataFetched: ApiResponse,
}

export default function BookmarkDetails({dataFetched}: BookmarkDetailsProps){
    function renderIframe() {
        return {__html: dataFetched.html};
      }

    return(
        <div>
             <div dangerouslySetInnerHTML={renderIframe()} />
             <ul>
                <li>Titre: {dataFetched.title}</li>
                <li>Auteur: {dataFetched.author_name}</li>
                <li>Date de publication: {dataFetched.upload_date}</li>
                { dataFetched.type === "video" && (<>
                <li>Durée: {dataFetched.duration/60} minutes</li>
                </>)}
                { dataFetched.type === "photo" && (<>
                <li>Longueur x Largeur : {dataFetched.height} x {dataFetched.width}</li>
                </>)}
             </ul>
        </div>
    )
}