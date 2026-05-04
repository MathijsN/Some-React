import { useEffect, useState } from "react";
import { fetchRepos } from "../data.js";

export default function Header() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetchRepos().then(setRepos).catch(console.error);
    }, []);

    return (
        <>
            {repos.map((repo) => (
                <a href={repo.html_url} key={repo.node_id}>{repo.name}</a>
            ))}
        </>
    );
}