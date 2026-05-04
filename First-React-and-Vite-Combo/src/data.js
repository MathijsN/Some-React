export async function fetchRepos() {
    const response = await fetch("https://api.github.com/users/mathijsn/repos");
    if (!response.ok) throw new Error("Fetching failed");
    return response.json();
}