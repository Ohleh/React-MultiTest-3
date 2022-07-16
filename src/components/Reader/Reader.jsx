import React, { Component } from 'react';
import Controls from '../Controls';
import Progress from '../Progress';
import Publication from '../Publication';

class Reader extends Component {
  state = {
    index: 0,
  };

  ChangeValue = value => {
    this.setState(prev => ({ index: prev.index + value }));
  };

  //   onPrev = () => {
  //     this.setState(prevState => ({ index: prevState.index - 1 }));
  //   };

  //   onNext = () => {
  //     this.setState(prevState => ({ index: prevState.index + 1 }));
  //   };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;

    console.log(items[index]);
    const currentItem = items[index];
    return (
      <div>
        <Controls
          current={index}
          total={totalItems}
          onChange={this.ChangeValue}
        />

        <Progress currentPage={index + 1} totalPages={totalItems} />
        <Publication item={currentItem} />
        {/* <article>
          <h2> {currentItem.title} </h2>
          <p>{currentItem.text}</p>
        </article> */}
      </div>
    );
  }
}
export default Reader;
