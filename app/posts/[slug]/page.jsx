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

export default function Page(props){
    const slug = props.params.slug
    const post = getPostContent(slug)
    return (
        <main className="px-[500px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl color_primary my-[40px]">{post.data.title}</h1>
                <article>
                    <Markdown className="">{post.content}</Markdown>
                </article>
            </div>
        </main>
    )
}