import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance.jsx"
import { Users } from "../components/Users"
import axios from "axios"
import { useEffect, useState } from "react"

export const Dashboard = () => {

    const [balance, setBalance] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: `Bearer ${token}`  // Sending the token in the Authorization header
            }
        })
        .then((res) => {
            setBalance(res.data.balance);
        })
        .catch((error) => {
            console.error("Error fetching balance:", error);
        });
    }, []);

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}