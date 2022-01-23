import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { LOGIN_URL } from "../../../lib/spotify"

export default NextAuth({
    providers: [
        Providers.Spotify({
            clientId: process.env.SPOTIFY_ID,
            clientSecret: process.env.SPOTIFY_SECRET,
            authorization: LOGIN_URL
        })
    ]
})