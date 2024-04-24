import blogs from '@/config/landingpageData/blogs';
import Image from 'next/image'
import React from 'react'


interface BlogCardProps {
    title: string;
    content: string;
    date: string;
    imageSrc: string;
}
const BlogCard: React.FC<BlogCardProps> = ({ title, content, date, imageSrc }) => (
    <div className='blog-card col-lg-4 col-12 d-flex flex-column align-items-center my-3'>
        <Image
            src={imageSrc}
            alt=''
            height={250}
            width={530}
            className='profile-img img-fluid'
        />
        <div className='text-box'>
            <p className='heading p-0'>{title}</p>
            <p>{content}</p>
            <div className='d-flex pt-4 justify-content-between'>
                <small>{date}</small>
                <h6>Read more</h6>
            </div>
        </div>
    </div>
);


const Blog = () => {
   

    return (
        <div className='d-flex flex-wrap'>
            {blogs.map((blog, index) => (
                <BlogCard
                    key={index}
                    title={blog.title}
                    content={blog.content}
                    date={blog.date}
                    imageSrc={blog.imageSrc}
                />
            ))}
        </div>
    );
};
export default Blog
