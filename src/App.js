import React, { Component } from 'react';
import './App.css';
import Table from './Table.js';
import Filter from './Filter.js';
import data from './data.json';
import _ from 'lodash';


class App extends Component {

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

    filterList = (transactionTypes, accountNames) => {
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
        return(
            <div>
                <span className='title'>My Transactions</span>
                <Filter
                    transactionTypes={this.getAllTransactionTypes()}
                    accountNames={this.getAllAccountNames()}
                    filterList={this.filterList}
                />
                <Table
                    data={this.state.data}
                />
            </div>
        )
    }
}

export default App;
