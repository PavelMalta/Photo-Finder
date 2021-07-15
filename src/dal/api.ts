import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=true&api_key=0ec80156bc9022b05d6f61d04f799f84'
})

export const imageAPI = {
    getImage(imageQueryParams: ImageQueryParamsType) {
        return instance.get<ImageResponseType, AxiosResponse<ImageResponseType>>('',{params:imageQueryParams})
    }
}

//Types
export type ImageQueryParamsType = {
    per_page?: number
    page?: number
    text?: string
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