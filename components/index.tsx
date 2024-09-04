import axios from 'axios'
export * from './characterlist'

export const CharacterList = () => {
    const getCharacter = async () => {
        try {
        let {data} = await axios.get('hhtps://api.api-onepiece.com/v2/character/en')
        return data;
     }catch(error){
        console.log(error)
     }
    }
}