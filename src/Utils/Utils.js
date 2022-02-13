import axios from "axios";

const listCharacters = async () => {
    const resp = await axios.get("https://breakingbadapi.com/api/characters")
    return resp.data
}

export default {listCharacters}