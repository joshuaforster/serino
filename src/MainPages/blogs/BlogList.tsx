import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Asset {
    sys: {
        id: string;
    };
    fields: {
        file: {
            url: string;
        };
    };
}

interface PostFields {
    headline: string;
    author: string;
    date: string;
    description: string;
    image: {
        sys: {
            id: string;
        };
    };
}

interface ContentfulPost {
    sys: {
        id: string;
    };
    fields: PostFields;
}

interface FetchResponse {
    items: ContentfulPost[];
    includes?: {
        Asset?: Asset[];
    };
}

interface Post {
    id: string;
    headline: string;
    author: string;
    date: string;
    description: string;
    imageUrl: string;
}

const BlogList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const accessToken = 'QG1NAgWPrQw6ReAr3oeLzAhh3NsHxVdS0-6Fv8oF2e4';
        const spaceId = '18q0bnjllo71';
        const environmentId = 'master';
        const contentTypeId = 'blog';
        const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=${contentTypeId}&include=10`;

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data: FetchResponse) => {
                const assets = data.includes?.Asset?.reduce((acc: { [key: string]: string }, asset) => {
                    acc[asset.sys.id] = asset.fields?.file?.url || '';
                    return acc;
                }, {});

                const posts = data.items
                    .filter(item => assets && item.fields.image?.sys.id && assets[item.fields.image.sys.id])
                    .map((item) => ({
                        id: item.sys.id,
                        headline: item.fields.headline,
                        author: item.fields.author,
                        date: item.fields.date,
                        description: item.fields.description,
                        imageUrl: assets ? assets[item.fields.image.sys.id] : '',
                    }));

                setPosts(posts);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="max-w-6xl mx-auto pt-40 px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-12 text-brandBlue dark:text-white">
                Blog
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div key={post.id} className="border-2 border-brandBlue overflow-hidden shadow-lg">
                        <div className="w-full h-48 overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={post.imageUrl}
                                alt={post.headline}
                            />
                        </div>
                        <div className="p-4 bg-white">
                            <h2 className="text-xl font-semibold mb-2 text-brandBlue">
                                <Link to={`/blog/${post.id}`} className="hover:underline">{post.headline}</Link>
                            </h2>
                            <p className="text-gray-600 mb-2">{new Date(post.date).toLocaleDateString()}</p>
                            <p className="text-gray-700 mb-4">{post.description}</p>
                            <Link
                                to={`/blog/${post.id}`}
                                className="text-brandOrange font-semibold hover:text-brandBlue transition-colors"
                            >
                                Read more →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
