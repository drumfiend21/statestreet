import React, { Component } from 'react';
import Table from './Table.js';
import Filter from './Filter.js';
import data from './data.json';
import _ from 'lodash';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: data.transactions,
        }
    }

    getAllTransactionTypes = () => {
        const transactionTypes = [];
        const reducedList = _.uniqBy(data.transactions, 'transactionType');
        _.forEach(reducedList, i => transactionTypes.push(i.transactionType));
        return transactionTypes;
    }

    getAllAccountNames = () => {
        const accountNames = [];
        const reducedList = _.uniqBy(data.transactions, 'accountName');
        _.forEach(reducedList, i => accountNames.push(i.accountName));
        return accountNames;
    }

    filterTransactions = (transactionTypes, accountNames) => {
        //if no filters, show all data
        if(!transactionTypes.length && !accountNames.length){
            this.setState({data: data.transactions});
        }
        //ordered filtering
        else {
            let filtered = [];
            //filter by accountNames first
            if(accountNames.length){
                filtered = _.filter(data.transactions, o => {
                    return _.indexOf(accountNames, o.accountName) > -1;
                });
            }
            if(!filtered.length){
               filtered = data.transactions;
            }
            //then filter by transaction types
            if(transactionTypes.length) {
                filtered = _.filter(filtered, o => {
                    return _.indexOf(transactionTypes, o.transactionType) > -1;
                });
            }
            this.setState({data: filtered})
        }
    }

    render() {
        return (
            <div className='parentFont main'>
                <span className='title'>My Transactions</span>
                <hr></hr>
                <Filter
                    transactionTypes={this.getAllTransactionTypes()}
                    accountNames={this.getAllAccountNames()}
                    filterTransactions={this.filterTransactions}
                />
                <Table
                    data={this.state.data}
                    setDetailView={this.setDetailView}
                />
            </div>
        )
    }
}

export default Main;
