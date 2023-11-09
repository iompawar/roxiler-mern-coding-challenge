import React, { useEffect, useState } from "react";
import "./TransactionTable.css";
import axios from "axios";
// bootstrap imports
import Table from "react-bootstrap/Table";

const TransactionTable = () => {
    const [tableData, setTableData] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(3); //month picker
    const [searchTextChange, setSearchTextChange] = useState();
    const [searchQuery, setSearchQuery] = useState();
    const [ifSearch, setIfSearch] = useState(false);
    const [err, setErr] = useState(null)

    useEffect(() => {

        if (!ifSearch) {
            axios
                .get(`http://localhost:5000/sales_by_month?month=${selectedMonth}`)
                .then((res) => {
                    setTableData(res.data);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
    }, [selectedMonth, ifSearch]);


    // handling month chage
    const handleMonthPicker = (e) => {
        setSelectedMonth(parseInt(e.target.value))
    }


    // handling search query change
    const handleSearchTextChange = (e) => {
        setSearchTextChange(e.target.value);
    }

    const handleSearch = async () => {
        setIfSearch(true)
        await setSearchQuery(searchTextChange);

        // setIfSearch(true);
        if (searchQuery) {
            axios.get(`http://localhost:5000/search_transaction?searchQuery=${searchQuery}`).then((res) => {
                if (res.data.err) {
                    setTableData([])
                    setErr(res.data.err);
                }
                else {
                    setTableData(res.data)
                }
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    return (
        <>
            <div className="search-select-div">

           
            <div className="searchbar-div">
                <input type="search" name="searchbox" id="" onChange={handleSearchTextChange} className="searchbar"/>
                <button onClick={handleSearch} className="search-btn">Search</button>
            </div>
            <div className="month-picker-div">
                <label htmlFor="month-picker" className="month-picker-label">Select Month
                    <select name="month-picker" id="month-picker" className="month-picker" value={selectedMonth} onChange={handleMonthPicker}>
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
                </label>
            </div>

            </div>
            <div>
                <h2 className="">{err}</h2>
            </div>
            <div className="TransactionTable-comp">
                <Table className="tables" striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Sold</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data) => {
                            return (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.description}</td>
                                    <td>{Math.floor(data.price)}</td>
                                    <td>{data.category}</td>
                                    <td>{`${data.sold}`}</td>
                                    <td className="trasaction-img">
                                        <img src={data.image} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>

        </>

    );
};

export default TransactionTable;
