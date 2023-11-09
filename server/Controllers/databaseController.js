import productModel from "../Models/productModel.js";
import axios from "axios";
const intializeDatabase = async (req, res) => {
    const { month } = await req.query;

    try {
        let dataCount = await productModel.find({}) //to check if already initialized

        if (dataCount.length == 0) {
            let data;
            const response = await axios.get(process.env.PRODUCT_TRANSACTIONS_API)
            .then((res) => {
                data = res.data;
            })
            .catch((err) => {
                console.log(err.message)
                return res.status(404).send(err.message);
            })

            if (data) {  // if data is fetched

                // intializing database with the data fetched from the given API
                await productModel.create(data);  
                res.send({
                    success: true,
                    message: "Database initialization successful"
                })
            }
            
        }
        else{
            res.send("already initialized")
        }

    } catch (error) {
        res.status(500).send(error.message)
        console.log("error in db initialization: ".red, error.message)
    }
}


export default intializeDatabase;