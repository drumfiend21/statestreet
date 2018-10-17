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

    filterList = (e) => {
        const name = e.target.name;
        if(_.indexOf(this.props.transactionTypes, name) > -1){
            let prevSelected = this.state.selectedTransactionTypes;
            prevSelected.push(name);
            this.setState({selectedTransactionTypes: prevSelected});
        }

        if(_.indexOf(this.props.accountNames, name) > -1){
            let prevSelected = this.state.selectedAccountNames;
            prevSelected.push(name);
            this.setState({selectedAccountNames: prevSelected});
        }

        this.props.filterList(this.state.selectedTransactionTypes, this.state.selectedAccountNames);
    }

    render() {
        const makeTransactionTypesList = () => {
            const list = [];
            _.forEach(this.props.transactionTypes, type => {
                list.push(
                    <div>
                        < input
                            className="checkbox"
                            type = "checkbox"
                            name={type}
                            onChange = {this.filterList.bind(this)}
                        />
                        <span>{type}</span>

                    </div>
                )
            });
            return list;
        }

        const transactionTypes = makeTransactionTypesList();

        console.log(transactionTypes)

        const accountNames = _.forEach(this.props.accountNames, type => {
            return (<label>
                    <input
                    name={type}
                    type="checkbox"
                    onChange={this.filterList.bind(this)} />
                    </label>)
        });

        return(
            <div>
                <ul>
                    {transactionTypes}
                </ul>

                <ul>
                    {accountNames}
                </ul>
            </div>
        )
    }
}

export default Filter;
