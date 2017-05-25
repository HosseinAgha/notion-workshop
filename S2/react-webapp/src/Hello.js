import React, { Component } from 'react';

// const Component = React.Component;

export default class Hello extends Component {
  render() {
    
    let elems = this.props.list.map((name, index) => {
          return (
            <div key={name} >
              {index + 1} - {name}
            </div>
          );
        });

    return (
      <div>
        {elems}
      </div>
      // React.createElement(Layout, null, 
      //   React.createElement(Counter)
      // )
      // <Layout>
      //   <Counter />
      // </Layout>
    );
  }
}
