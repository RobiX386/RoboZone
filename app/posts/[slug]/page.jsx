import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetadata"

function getPostContent(slug){
    const folder = "posts/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async() => {
    const posts = getPostMetadata()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default function Milsugio(props){
    const slug = props.params.slug
    const post = getPostContent(slug)
    return (
        <div>
            <h2>{post.data.title}</h2>
            <Markdown>{post.content}</Markdown>
        </div>
    )
}