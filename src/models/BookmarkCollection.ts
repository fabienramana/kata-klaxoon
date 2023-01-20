import ApiResponse from "./ApiResponse"

export default interface BookmarkCollection  {
    url: string,
    dataFetched: ApiResponse,
    displayDetails: boolean
}