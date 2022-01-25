import { useSession } from 'next-auth/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { currenTrackIdState, isPlayingState } from '../atoms/songAtom';
import useSpotify from '../hooks/useSpotify';

export default function Player() {
    const spotifyApi = useSpotify()
    const { data: session, status } = useSession
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currenTrackIdState)
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
    const [volume, setVolume] = useState(25)

    return (
        <div>
            <div>
                <img src='' alt='' />
            </div>
        </div>
    )
}
