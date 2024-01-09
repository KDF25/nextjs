import type { Metadata } from 'next';

async function getData(id: string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        next: {
            revalidate: 60
        }
    })
    return response.json()
}

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata>{
    const user = await getData(id);
    return {
        title: user.username,
    }
}

export default async function User ({params: {id}}: Props) {
    const user = await getData(id);
    return (
        <>
            <h1>{user.name}</h1>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </>
    );
}