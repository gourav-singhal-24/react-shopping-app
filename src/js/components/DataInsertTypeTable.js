import React,{ Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const jobs = [];
const jobTypes = [ 'A', 'B', 'C', 'D' ];

function addJobs(quantity) {
  const startId = jobs.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    jobs.push({
      id: id,
      name: 'Item name ' + id,
      type: 'B',
      active: i % 2 === 0 ? 'Y' : 'N'
    });
  }
}

addJobs(5);
//Row select setting
var selectRowProp = {
  mode: "checkbox",  //checkbox for multi select, radio for single select.
  clickToSelect: true,   //click row will trigger a selection on that row.
   
};


export default class DataInsertTypeTable extends Component {
 constructor(props){
   super(props);
   
 }
 onAddRow(row){
   console.log('here');
   console.log(row);
   debugger;
 } 
  
  render() {
    return (
      <div style={{width:'50%',margin:'10%'}}>
      <BootstrapTable ref="table"
                      data={jobs}
                      striped={true}
                      hover={true}
                      condensed={true}
                      selectRow={selectRowProp}
                      search={true}
                      deleteRow={true} 
                      insertRow={true}
                      searchPlaceholder="Search Product"
                      options={{clearSearch:true, insertText:'New job',deleteText:'Delete job',onAddRow:this.onAddRow.bind(this) }}
                      >
          <TableHeaderColumn dataField='id' isKey={ true }>Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' editable={ { type: 'textarea' } } >Job Name</TableHeaderColumn>
          <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: jobTypes } } }>Job Type</TableHeaderColumn>
          <TableHeaderColumn dataField='active' editable={ { type: 'checkbox', options: { values: 'Y:N' } } }>Active</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}

  