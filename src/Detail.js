import React, { Component } from 'react';

class Detail extends Component {

    render() {
        const tx = this.props.transaction;

        return(
            <div className='detailView'>
                <a href='#' onClick={this.props.clearDetailView}>Back</a>
                <h1>Transaction {tx.account}</h1>
                <b>Account No.:</b><span>{tx.account}</span>
                <b>Account Name:</b><span>{tx.accountName}</span>
                <b>Currency Code:</b><span>{tx.currencyCode}</span>
                <b>Amount:</b><span>{tx.amount}</span>
                <b>Transaction Type:</b><span>{tx.account}</span>
            </div>
        )
    }
}

export default Detail;
