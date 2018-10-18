import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from './data.json';
import _ from 'lodash';

class Detail extends Component {

    getTransaction = (accountNumber) => {
        const result = _.filter(data.transactions, o => {
            return parseInt(o.account) === parseInt(accountNumber);
        });
        return result[0];
    }

    render() {
        const {id} = this.props.match.params;
        const tx = this.getTransaction(id);

        return(
            <div className='detailView parentFont'>
                <Link to='/'>Back</Link>
                <h1>Transaction {tx.account}</h1>
                <hr></hr>
                <b>Account No.:</b><span>{tx.account}</span>
                <b>Account Name:</b><span>{tx.accountName}</span>
                <b>Currency Code:</b><span>{tx.currencyCode}</span>
                <b>Amount:</b><span>{tx.amount}</span>
                <b>Transaction Type:</b><span>{tx.transactionType}</span>
            </div>
        )
    }
}

export default Detail;
