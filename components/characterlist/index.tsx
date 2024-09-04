"use client"
import axios from 'axios'
import { useEffect } from 'react'

export const CharacterList = () => {
    const [characters, setCharacter] = useEffect([])
    const getCharacter = async () => {

    }
    useEffect(() => {
        getCharacter()
    })
    return <div>

    </div>
}