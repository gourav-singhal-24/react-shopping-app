import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const jobs = [];
const categoryTypes = [ 'A', 'B', 'C', 'D' ];

function addJobs(quantity) {
  const startId = jobs.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    jobs.push({
      id: id,
      category: 'B',
      name:'Service' + id,
      serviceimage:'NA',
      location:'NA'
   });
  }
}

addJobs(5);
//Row select setting
var selectRowProp = {
  mode: "checkbox",  //checkbox for multi select, radio for single select.
  clickToSelect: true,   //click row will trigger a selection on that row.
   clickToSelect: true 
};


export default class ServicesComponent extends Component{
    onAddRow(row){
        console.log('here');
        console.log(row);
        debugger;
    } 
    render(){
       return(
            <div style={{width:'50%',margin:'5%'}}>
                <BootstrapTable ref="table"
                        data={jobs}
                        striped={true}
                        hover={true}
                        condensed={true}
                        selectRow={selectRowProp}
                        search={true}
                        deleteRow={true} 
                        insertRow={true}
                        searchPlaceholder="Search Service"
                        options={{clearSearch:true, insertText:'New Service',deleteText:'Delete Services',onAddRow:this.onAddRow.bind(this), noDataText:'There is no service available yet now.' }}
                        >
                <TableHeaderColumn dataField='id'   isKey={ true } dataSort={true}>Service ID</TableHeaderColumn>
                <TableHeaderColumn dataField='category'   editable={ { type: 'select', options:{values:categoryTypes } } }  dataAlign='center' dataSort={true}>Category Name</TableHeaderColumn>
                <TableHeaderColumn dataField='name'   editable={{ type:'text' }} dataAlign=' center ' dataSort={true}>Service Name </TableHeaderColumn>
                <TableHeaderColumn dataField='location'   editable={{type:'text'}} dataAlign=' center ' dataSort={true}>Location</TableHeaderColumn>
                <TableHeaderColumn dataField='serviceimage' editable={{ type:'img' }} dataAlign=' center ' dataSort={true}>Service Images </TableHeaderColumn>
                </BootstrapTable>
            </div>
       );
    }
}