import { useEffect, useState } from "react";
import { fetchRepos } from "../data.js";

export default function RepoList() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetchRepos().then(setRepos).catch(console.error);
    }, []);

    return (
        <>
            <ul className="repo-list">
                {repos.map((repo) => (
                    <li><a href={repo.html_url} key={repo.id} target="_blank">{repo.name}</a></li>
                ))}
            </ul>
        </>
    );
}