import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=true&api_key=88511e631d64958716f46a5c31c01824&per_page=20'
})

export const imageAPI = {
    getImage(imageQueryParams: ImageQueryParamsType) {
        return instance.get<ImageResponseType, AxiosResponse<ImageResponseType>>('',{params:imageQueryParams})
    }
}

//Types
export type ImageQueryParamsType = {
    page: number
    text: string
}

export type ImageResponseType = {
    photos: PhotosType
    stat: string
}

export type PhotosType = {
    page: number
    pages: number
    perpage: number
    total: number
    photo: Array<PhotoType>
}

export type PhotoType = {
    id: string
    owner: string
    secret: string
    server: string
    farm: number
    title: string
    ispublic: number
    isfriend: number
    isfamily: number
}