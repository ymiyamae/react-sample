import React from "react";

export default class Favorites extends React.Component{
  render() {
    const { query }  = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    return (
      <div>
        <h1>Favorites</h1>
      </div>
    )
  }
}
