import { SET_BERITA } from './actionTypes'

export const setBerita = (data) => {
    return {
        type : SET_BERITA,
        payload : data
    }
}
