import Link from "@/node_modules/next/link"

type Props = {
    users: any[]
}

export const Users = ({users}: Props) => {
    return  <ul>
    {users.map((user: any) => (
        <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.id} | {user.username} | {user.username}</Link>
        </li>
    ))}
    </ul>       
}