import { atom } from "recoil";

export const currenTrackState = atom({
    key: 'currentTrackId',
    default: null
})

export const isPlayingState = atom({
    key: 'isPlayingState',
    default: false
})