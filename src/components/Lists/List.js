import React from "react";
import {NewsItem} from "./Item";

const List = props => (
    <ul className={props.className || ""}>
        {props.children}
    </ul>
);

const NewsList = props => (
    <List className="news-list">
        {props.items.map((item, index) => {
            return <NewsItem key={index} {...item} />
        })};
    </List>
);  

export {
    List,
    NewsList
}