import fs from "fs"
import Link from "next/link"
import Thumbnail from "./lectieThumbnail"
import matter from "gray-matter"
import { PostMetadata } from "../../components/postMetadata"
// import getPostMetadata from "./getPostMetadata"

export default function Postari(){
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <div>
            {/* <Link href={`/posts/${post.slug}`}>
                <h2>{post.slug}</h2>
            </Link> */}
            <Thumbnail titlu={post.title} slug={post.slug} subtitle={post.subtitle} imageSrc={`/images/${post.thumbnailImage}`} classes="py-[20px]"/>
        </div>
    ))
    return(
        <div>{postPreviews}</div>
    )
}

