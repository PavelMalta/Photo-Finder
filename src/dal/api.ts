import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=true&api_key=88511e631d64958716f46a5c31c01824&per_page=20'
})

export const imageAPI = {
    getImage(imageQueryParams: ImageQueryParamsType) {
        return instance.get('',{params:imageQueryParams})
    }
}

//Types
export type ImageQueryParamsType = {
    page: number
    text: string
}