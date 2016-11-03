import React,{ Component } from 'react';
import ReactTabs from 'react-tabs';
import HeaderBarComponent from  './HeaderBarComponent.js';

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;
export default class MenuTab extends Component{
  handleSelect(index,last){
     console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }
  render(){
    var divStyle={
      margin:0
  };
    return(
      <div style={divStyle}>
       <Tabs onSelect={this.handleSelect.bind(this)} selectedIndex={2}>
         <TabList>
           <Tab>Foo</Tab>
          <Tab>Bar</Tab>
          <Tab>Baz</Tab>
        </TabList>
         <TabPanel>
          <h2>Hello from Foo</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Bar</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Baz</h2>
        </TabPanel>
      </Tabs>
      </div>
      )
  }
}

