import React from 'react'
import "./Home.css"

import Card from './Card';

const Home = () => {
    return (
        <div>
            <div className="container">
                <Card type="card"/>
                <Card type="card"/>
                <Card type="card" />
                <Card type="card" />
                <Card type="card" />
                <Card type="card" />
                <Card type="add" />
            </div>
        </div>
    )
}

export default Home
