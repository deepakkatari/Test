import React from 'react'
import Data from './data.json'
import { Switch, Table, Card } from 'antd';
import 'antd/dist/antd.css';
import { stringify } from 'querystring';

export interface itemsList {
    Date: string, Open: string, High: string, Low: string, Close: string, Volume: string, adjClose: string
}
export interface column {
    title: string,
    dataIndex: string,
    key: string
}
export interface TestState {
    testArray: itemsList[],
    view: string,
}

class Test extends React.Component<any, TestState> {
    constructor(props: any) {
        super(props);
        this.state = {
            testArray: Data,
            view: 'Table View'
        }
    }

    changeView = (checked: boolean) => {
        console.log(checked)
        let view: string;
        if (checked) {
            view = 'Table View'
        } else {
            view = 'Card View'
        }
        this.setState({ view })
    }
    render() {
        const { testArray, view } = this.state;
        console.log(testArray)
        const dataColumns: column[] = [
            {
                title: 'Date',
                dataIndex: 'Date',
                key: 'Date'
            },
            {
                title: 'Open',
                dataIndex: 'Open',
                key: 'Open'
            },
            {
                title: 'High',
                dataIndex: 'High',
                key: 'High'
            },
            {
                title: 'Low',
                dataIndex: 'Low',
                key: 'Low'
            }, {
                title: 'Close',
                dataIndex: 'Close',
                key: 'Close'
            }, {
                title: 'Volume',
                dataIndex: 'Volume',
                key: 'Volume'
            }
        ]
        return (
            <div>
                <div style={{ display: 'inline-block', width: '95%', marginTop: '20px' }}>
                    <Switch style={{ float: "right" }} defaultChecked={true} checkedChildren="Table View" unCheckedChildren="Card view" onClick={this.changeView} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    {view === 'Table View' ? (
                        <Table
                            columns={dataColumns}
                            dataSource={testArray} />
                    ) : (
                            <div>
                                {testArray.map(test => (
                                    <Card style={{ width: '300px', marginTop: '10px', height: '230px', backgroundColor: 'grey', display: 'inline-block', marginLeft: '1rem', borderRadius: '12px' }}>
                                        <p style={{ textAlign: 'center' }}>Date : {test.Date}</p>
                                        <p><span>Open: {Number(test.Open).toFixed(4)}</span><span style={{ marginLeft: '10px' }}>Close: {Number(test.Close).toFixed(4)}</span></p>
                                        <p><span>High: {Number(test.High).toFixed(4)}</span><span style={{ marginLeft: '14px' }}>Low: {Number(test.Low).toFixed(4)}</span></p>
                                        <p style={{ textAlign: 'center' }}>Volume: {test.Volume}</p>
                                    </Card>

                                ))}
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Test