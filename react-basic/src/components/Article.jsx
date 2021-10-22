import { useState } from "react";
import { Content, PublishButton, Title } from "./index";

const Article = (props) => {
    const [isPublished, setIsPublshed] = useState(false);
    console.log(isPublished);
    const publishArticle = () => {
        setIsPublshed(true);
    }
    return (
        <div>
        <Title title={props.title} />
        <Content content={props.content} />
        <PublishButton isPublished={isPublished} onClisk={publishArticle} />
        </div>
    );
};

export default Article;
