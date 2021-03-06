import React, { Component } from 'react';
import _ from 'lodash';


class Filter extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedTransactionTypes: [],
            selectedAccountNames: [],
        }
    }

    filterTransactions = (e) => {
        const name = e.target.name;
        if(_.indexOf(this.props.transactionTypes, name) > -1){
            let prevSelected = this.state.selectedTransactionTypes;
            if(e.target.checked){
                prevSelected.push(name);
            }
            else if(!e.target.checked){
                const index = _.indexOf(prevSelected, name);
                prevSelected.splice(index, 1);
            }
            this.setState({selectedTransactionTypes: prevSelected});
        }

        if(_.indexOf(this.props.accountNames, name) > -1){
            let prevSelected = this.state.selectedAccountNames;
            if(e.target.checked){
                prevSelected.push(name);
            }
            else if(!e.target.checked){
                const index = _.indexOf(prevSelected, name);
                prevSelected.splice(index, 1);
            }
            this.setState({selectedAccountNames: prevSelected});
        }

        this.props.filterTransactions(this.state.selectedTransactionTypes, this.state.selectedAccountNames);
    }

    render() {
        const makeTransactionTypesList = () => {
            const list = [];
            _.forEach(this.props.transactionTypes, type => {
                list.push(
                    <div>
                        < input
                            type = "checkbox"
                            name={type}
                            onChange = {this.filterTransactions.bind(this)}
                        />
                        <span>{type}</span>

                    </div>
                )
            });
            return list;
        }

        const makeAccountNamesList = () => {
            const list = [];
            _.forEach(this.props.accountNames, type => {
                list.push(
                    <div>
                        < input
                            type = "checkbox"
                            name={type}
                            onChange = {this.filterTransactions.bind(this)}
                        />
                        <span>{type}</span>
                    </div>
                )
            });
            return list;
        }

        return(
            <div className="filterParent">
                <div className='filterBlock'>
                    <b>Account Name</b>
                    <ul>
                        {makeAccountNamesList()}
                    </ul>
                </div>
                <div className='filterBlock'>
                    <b>Transaction Type</b>
                    <ul>
                        {makeTransactionTypesList()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Filter;
