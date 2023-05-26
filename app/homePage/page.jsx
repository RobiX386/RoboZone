import fs from "fs"
import Link from "next/link"
import Thumbnail from "components/lectieThumbnail"
import matter from "gray-matter"
import { PostMetadata } from "../../components/postMetadata"
import getPostMetadata from "../../components/getPostMetadata"

export default function Lectii(){
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

export function LectiiIntroducere(){
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