import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Home.css'
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data)
                setdata(res.data)
            }).catch((err) => {
                console.log(err)
            })

    }, [])
    return (
        <>


            <Banner />


                 <div className="container mt-5">
                <div className="row">
                    {/* <div className="col-md-4"> */}
                    {
                        Object.values(data).map((pic) => {
                            return (
                                <div className="col-lg-3 col-6">
                                    <Link to={`/Home/${pic.id}`} style={{ textDecoration: 'none' }} className="card shadow mt-3">
                                        <img src={pic.image} className='img-fluid p-3' />
                                        <p className='fs-5 p-2'>{pic.title.slice(0, 5)}</p>
                                        <p className='p-2'>{pic.description.slice(0, 100)}...</p>


                                    </Link>

                                </div>
                            )
                        })
                    }

                    {/* </div> */}

                </div>
            </div>


           
        </>
    )
}

export default Home
