import productModel from "../Models/productModel.js";

const getTransactionByMonth = async(month) => {

    const monthNumber = parseInt(month, 10)
 
    if(isNaN(monthNumber) || monthNumber <= 0 || monthNumber > 12){
        return "Invalid month parameter";
    }

    const allTransactions = await productModel.find({});

    const transactionByMonth = allTransactions.filter((transaction) => {
        return transaction.dateOfSale.getMonth() + 1 == month;
    })

    return transactionByMonth;
}

export default getTransactionByMonth;