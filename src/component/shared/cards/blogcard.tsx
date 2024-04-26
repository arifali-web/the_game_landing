'use client'
import blogs from '@/config/landingpageData/blogs';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'



interface BlogCardProps {
    title: string;
    content: string;
    date: string;
    imageSrc: string;
    path: string; 
    handleClick: () => void;
}
const BlogCard: React.FC<BlogCardProps> = ({ title, content, date, imageSrc, path, handleClick }) => (

    
    <div onClick={handleClick} className='blog-card pointer col-lg-4 col-12 d-flex flex-column align-items-center my-3'>
        <Image
            src={imageSrc}
            alt=''
            height={250}
            width={530}
            className='profile-img img-fluid'
        />
        <div className='text-box'>
            <h2 className='heading p-0'>{title}</h2>
            <p>{content}</p>
            <div className='d-flex pt-4 justify-content-between'>
                <small>{date}</small>
                <h6>Read more</h6>
            </div>
        </div>
    </div>
);


const Blog = () => {
    const router = useRouter()

    const handleClick = (path: string) => {
        router.push(path)
    }

    return (
        <div className='d-flex flex-wrap'>
            {blogs.map((blog, index) => (
                <BlogCard
                    key={index}
                    title={blog.title}
                    content={blog.content}
                    date={blog.date}
                    imageSrc={blog.imageSrc}
                    path={`/blogs/${index}`} 
                    handleClick={() => handleClick(`/blogs/${index}`)} 
                />
            ))}
        </div>
    );
};
export default Blog
