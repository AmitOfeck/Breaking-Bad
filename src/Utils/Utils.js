import axios from "axios";

const listCharacters = async () => {
    const resp = await axios.get("https://breakingbadapi.com/api/characters")
    return resp.data
}

const getCharacterById = async (id) => {
    const resp = await axios.get("https://breakingbadapi.com/api/characters/" + id)
    return resp.data
}

export default { listCharacters, getCharacterById }