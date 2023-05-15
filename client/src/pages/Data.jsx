import { useEffect, useState } from 'react'
import axios from 'axios'

const Data = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("/api/test")
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <main className="flex justify-center text-2xl">
                <div className="text-left">
                    <h1 className="text-3xl font-bold">Example Data</h1>
                    {
                        data.map((item, i) => (
                            <div key={i}>
                                <p>First: {item.firstName}</p>
                                <p>Last: {item.lastName}</p>
                                <p>Email: {item.email}</p>
                                <hr />
                            </div>
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default Data