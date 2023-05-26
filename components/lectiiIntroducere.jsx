import fs from "fs"
import Link from "next/link"
import Thumbnail from "./lectieThumbnail"
import matter from "gray-matter"
import { PostMetadata } from "./postMetadata"
import getPostMetadata from "./getPostMetadata"

export default function LectiiIntroducere(){
    const postMetadata = getPostMetadata();
    const filteredPosts = postMetadata.filter(post => post.introduction == "true")
    const postPreviews = filteredPosts.map((post) => (
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