import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const jobs = [];
 

function addJobs(quantity) {
  const startId = jobs.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    jobs.push({
      id: id,
      name:'Order' + id,
      service:'NA' 
   });
  }
}

addJobs(30);


function onSelectHandler (row, isSelected, event ){
    console.log(row);
     
} 

var rowOptions = {
   mode:'radio',
   clickToSelect: true,
   bgColor:'#DAB2B2',
   onSelect:onSelectHandler 
}
export default class OrdersComponent extends Component{
             
           render(){
             return(
            <div style={{width:'50%',margin:'5%'}}>
                <BootstrapTable ref="table"
                        data={jobs}
                        striped={true}
                        hover={true}
                        condensed={true}
                        pagination = { true } 
                        search={true}
                        selectRow = { rowOptions }
                        searchPlaceholder="Search Order"
                        options={{ clearSearch:true, noDataText:'There is no orders for any service.' }}
                        >
                <TableHeaderColumn dataField='id' dataAlign="center" isKey={ true } dataSort={true}>Order ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name' dataAlign="center" dataSort={true}>Order Name </TableHeaderColumn>
                <TableHeaderColumn dataField='service' dataAlign="center" dataSort={true}>Order For</TableHeaderColumn> 
                </BootstrapTable>
            </div>
       );
    }
}
       