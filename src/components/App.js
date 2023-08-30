
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {
  const testTabs = [
    {
      title: 'Tab 1',
      content: 'Content of Tab 1',
    },
    {
      title: 'Tab 2',
      content: 'Content of Tab 2',
    },
    {
      title: 'Tab 3',
      content: 'Content of Tab 3',
    },
  ];


  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabs={testTabs}></Tabs>
    </div>
  )
}

export default App
