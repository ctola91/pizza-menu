import React, { Component, createRef } from "react";
import { Table, Button, Input } from "semantic-ui-react";
import { object, func } from "prop-types";

class PizzaDetailTableItem extends Component {
  render() {
    const { topping } = this.props;
    return (
      <>
        <Table.Row>
          <Table.Cell>{topping.name}</Table.Cell>
        </Table.Row>
      </>
    );
  }
}

PizzaDetailTableItem.propTypes = {
  topping: object
};
export default PizzaDetailTableItem;
