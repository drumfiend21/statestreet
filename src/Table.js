import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import logo from './logo.svg';
import data from './data.json';


class Table extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: data.transactions,
        }
    }

    render() {
        console.log(this.state.data)

        const columns = [{
            Header: 'Account No.',
            accessor: 'account' // String-based value accessors!
        }, {
            Header: 'Account Name',
            accessor: 'accountName',
        }, {
            Header: 'Currency',
            accessor: 'currencyCode',
        }, {
            Header: 'Amount',
            accessor: 'amount'
        }, {
            Header: 'Transaction Type',
            accessor: 'transactionType'
        }];

        return(
            <ReactTable
                className='reactTable'
                data={this.props.data}
                columns={columns}
            />
        )
    }
}

export default Table;
