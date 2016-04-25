import React from 'react';

class ItemExpanded extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div className="ItemExpanded">
        <span className="item-subtitle">{item.subtitle}</span>
        <ul className="item-meta">
          {item.meta.map(function(meta) {
            return <li>{meta}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default ItemExpanded;
