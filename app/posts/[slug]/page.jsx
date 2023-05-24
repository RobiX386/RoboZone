import fs from "fs"
import Markdown from "markdown-to-jsx"

function getPostContent(slug){
    const folder = "posts/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf8")
    return content
}

export default function Milsugio(props){
    const slug = props.params.slug
    const content = getPostContent(slug)
    return (
        <div>
            <h2>Mjr=wkal {slug}</h2>
            <Markdown>{content}</Markdown>
        </div>
    )
}