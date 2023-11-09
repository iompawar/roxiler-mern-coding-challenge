import express  from "express";
import { getAllTransactions, getBarChart, getCombineResponse, getPieChart, getSalesByMonth, getStatistics, searchTransaction} from "../Controllers/transactionController.js";

const Router = express.Router(); 

// get all product transaction || GET
Router.get('/product_transactions', getAllTransactions)

// get sales by month regardless the year || GET
Router.get('/sales_by_month', getSalesByMonth)

// search transaction based on title/description/price || GET
Router.get('/search_transaction', searchTransaction);

// get statistics of the selected month || GET
Router.get('/getStatistics', getStatistics);

// get bar chart of the selected month || GET
Router.get('/getBarchart', getBarChart);

// get pie chart of the selected month || GET
Router.get('/getPiechart', getPieChart);

// get combine response of above 3 api
Router.get('/getCombineResponse', getCombineResponse);

export default Router;
