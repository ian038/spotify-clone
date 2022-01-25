import { atom } from "recoil";

export const currenTrackIdState = atom({
    key: 'currenTrackIdState',
    default: null
})

export const isPlayingState = atom({
    key: 'isPlayingState',
    default: false
})