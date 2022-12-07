/**
 * Gets Repo List for a particular GitHub User
 *
 * @param {string} username GitHub Username
 * @public
 */
export async function getRepos(username) {
    try {
        const response = await fetch(`${process.env.API_URL}${username}`);
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.log(error.data.message)
        // return error
    }
}