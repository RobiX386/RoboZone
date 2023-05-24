import fs from "fs"
import Link from "next/link"
import Thumbnail from "../../components/lectieThumbnail"

const getPostMetadata = () => {
    const folder = "./posts/"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith(".md"))
    const slugs = markdownPosts.map((file) => file.replace(".md", ""))
    return slugs
}

export default function HomePage(){
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((slug) => (
        <div>
            <Link href={`/posts/${slug}`}>
                <h2>{slug}</h2>
            </Link>
            <Thumbnail titlu={slug} slug={slug} subtitle="First tech challenge este o competitie de robotica care..." imageSrc="/images/images.jpg"/>
        </div>
    ))
    return(
        <div>{postPreviews}</div>

    )
}