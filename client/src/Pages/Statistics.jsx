import React, { useEffect, useState } from "react";
import "./Statistics.css";
import axios from "axios";

// bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const Statistics = () => {
    const [statistics, setStatistics] = useState([]);
    const [month, setMonth] = useState(3);
    useEffect(() => {
        axios.get(`http://localhost:5000/getStatistics?month=${month}`).then((res) => {
            setStatistics([res.data])
        }).catch((err) => {
            console.log(err.message);
        })
    }, [month]);


    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    }
    return (
        <div className="Statistics-comp">
            <h1>View Statistics</h1>

            <div className="statistics-month-picker-div">
                <legend>
                    Select Month
                    <select name="month-picker" id="" className="statistics-month-picker" value={month} onChange={handleMonthChange}>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option default value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                </legend>
            </div>

            <div className="statistics-div">
                {
                    statistics.map((item) => {
                        return <div className="">
                            <Card border="info" bg="dark" text="white" style={{ width: 'auto' } } className="p-3 stat-bg" >
                                {/* <Card.Header>Statistics</Card.Header> */}
                                <Card.Body>
                                    <Card.Title >Monthly Sales Statistics</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Total Sales: {Number(item.totalSales).toFixed(2)}</ListGroup.Item>
                                        <ListGroup.Item>Total Sold Items: {item.soldItems}</ListGroup.Item>
                                        <ListGroup.Item>Total Not Sold Items: {item.unsoldItems}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Statistics;
