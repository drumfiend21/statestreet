import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import data from './data.json';
import { withRouter } from 'react-router-dom'

class Table extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: data.transactions,
        }
        this.columns = [{
            Header: 'Account No.',
            accessor: 'account', // String-based value accessors!
            getProps: (state, rowInfo, column) => {
                return {
                    style: {
                        'text-decoration': 'underline'
                    }
                };
            }
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
    }

    onRowClick = (state, rowInfo) => {
        return {
            onClick: (e) => {
                this.props.history.push(`/detail/${rowInfo.original.account}`)
            }
        };
    }

    render() {
        return(
            <ReactTable
                className='reactTable'
                data={this.props.data}
                columns={this.columns}
                getTdProps={this.onRowClick}
            />
        )
    }
}

export default withRouter(Table);
