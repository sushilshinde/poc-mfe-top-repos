/**
 * Gets Repo List for a particular GitHub User
 *
 * @param {string} username GitHub Username
 * @public
 */
export async function getRepos(username) {
    try {
        const response = await fetch(`${process.env.API_URL}${username}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('user-token')}`
            }
        });
        if(response.status === 401) {
            return { status: 401, message: 'You are not authorized!!!' }
        }
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.log("Error "+error.data.message)
        return error
    }
}