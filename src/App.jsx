import {GridComponent, ColumnDirective, ColumnsDirective,
  Page, Inject, Edit, Toolbar 
} from '@syncfusion/ej2-react-grids';
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css'
import {data} from './datasource';

function App() {
 const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, 
  mode: 'Batch'
};
 const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
 const customerIDRules = { required: true, minLength: 3 };
 const editTemplate = (args) => {
        return (
            <div>
                <MaskedTextBoxComponent id='ShipPostalCode' name='Postal Code'
                 value={args.ShipPostalCode} mask={'000-00'}></MaskedTextBoxComponent>
            </div>
        )
    }
     
  return (<div style={{padding:"20px"}}>
    <GridComponent dataSource={data} allowPaging={true} pageSettings={{pageSize:5}}
    editSettings={editOptions} toolbar={toolbarOptions} 
   >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID'  
        width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' validationRules={customerIDRules}  
        headerText='Customer ID' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" 
        textAlign="Right" editType='numericedit' />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format="yMd" 
        textAlign="Right" editType='datepickeredit' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' 
        editType='dropdownedit' />        
         <ColumnDirective field='ShipPostalCode' headerText='Postal Code' width='140'   
         editTemplate={editTemplate}/>
      </ColumnsDirective> 
      <Inject services={[Page,Edit,Toolbar]}/>
    </GridComponent>
    </div>
  )
}

export default App
