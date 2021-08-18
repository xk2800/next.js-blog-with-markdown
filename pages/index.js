import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';

import Post from '../components/Post';
import { sortByDate } from '../utils';

export default function Home({ posts }) {

    //console.log(posts);

    return (
        <div>
            <Head>
                <title>My Blog</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="posts">
                {posts.map((post, index) => (
                    // <h3>{post.frontmatter.title}</h3>
                    <Post key={index} post={post} />
                ))}
            </div>
        </div>

    );
}

//fetch data //run as server side 
export async function getStaticProps() {

    // Get files from posts dir
    const files = fs.readdirSync(path.join('posts'));

    console.log(files);

    // Get slug n frontmatter from posts
    const posts = files.map(filename => {
        // Create slug
        const slug = filename.replace('.md', '');

        // Get frontmatter (content)
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

        //console.log(markdownWithMeta);

        // Parsing frontmatter
        const { data: frontmatter } = matter(markdownWithMeta);

        return {
            slug,
            frontmatter,
        };
    });

    //console.log(posts);

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    };
}