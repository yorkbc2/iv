import React from "react";

const NewsItem = props => (
    <li className="news-item">
        <img src={props.image || ""} alt={props.alt || "Image not found"}
            title={props.title || ""} />
        <h3>{props.title}</h3>
        <p>{props.excerpt}</p>
    </li>
);

export {
    NewsItem
}