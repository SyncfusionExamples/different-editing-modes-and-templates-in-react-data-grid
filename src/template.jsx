import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data as orderData } from './datasource';
export class DialogFormTemplate extends React.Component {
    shipCountryDistinctData = DataUtil.distinct(orderData, 'ShipCountry', true);
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props);
    }   
    render() {
        const data = this.state;
        return (<div>
            <div >
                <div className="form-group col-md-6">
                    <TextBoxComponent id="OrderID" value={data.OrderID} enabled={data.isAdd} placeholder='Order ID'
                    floatLabelType='Auto' >
                    </TextBoxComponent>
                    
                </div>
                <div className="form-group col-md-6">
                     <TextBoxComponent id="CustomerID" value={data.CustomerID} placeholder='Customer ID'
                    floatLabelType='Auto' >
                    </TextBoxComponent>
                    
                </div>
            </div>
            <div >
                <div className="form-group col-md-6">
                    <NumericTextBoxComponent id="Freight" format='C2' value={data.Freight} placeholder="Freight" floatLabelType='Always'/>
                </div>
                <div className="form-group col-md-6">
                    <DropDownListComponent id="ShipCountry" value={data.ShipCountry} 
                     dataSource={this.shipCountryDistinctData} fields={{ text: 'ShipCountry', value: 'ShipCountry' }} placeholder="Ship Country" floatLabelType='Always'/>
                </div>
            </div>
            <div >
                <div className="form-group col-md-12">
                    <TextBoxComponent id="ShipAddress" value={data.ShipAddress} placeholder='Ship Address'
                    floatLabelType='Auto' multiline= {true} >
                    </TextBoxComponent>
                
                </div>
            </div>
        </div>);
    }
}