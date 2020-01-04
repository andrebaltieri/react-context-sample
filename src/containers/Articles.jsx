import React, {
    useContext
} from "react";

import { ArticleContext } from "../contexts/ArticleContext";
import Article from "../components/Article";

const Articles = () => {
    const { articles } = useContext(ArticleContext);
    return (
        <div>
            {articles.map(a => (
                <Article key={a.id} article={a}></Article>
            ))}
        </div>
    );
}

export default Articles;