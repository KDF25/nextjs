"use client";
import { Users } from "@/components/Users";
import { getAllUsers } from "@/services/getUsers";
import { useEffect, useState } from "react";


export default  function UserComponent() {
    const [users, setUsers] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllUsers()
        .then(setUsers)
        .finally(() => setLoading(false))
    }, [])

    return (<>
        <h1>USERS PAGE</h1>
        {loading 
            ? 
            ( <h3>Loading...</h3> ) 
            : 
            (
                <Users users={users}/>
            )}

        </>
)}