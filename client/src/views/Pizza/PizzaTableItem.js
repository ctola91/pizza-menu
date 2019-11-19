import React, { PureComponent } from "react";
import { Table, Button } from "semantic-ui-react";
import { object, func } from "prop-types";

class PizzaTableItem extends PureComponent {
  render() {
    const { pizza, deletePizza, updatePizza } = this.props;
    return (
      <>
        <Table.Row>
          <Table.Cell>{pizza._id}</Table.Cell>
          <Table.Cell>{pizza.name}</Table.Cell>
          <Table.Cell>
            <Button icon="edit" />
            <Button icon="delete" onClick={() => deletePizza(pizza._id)} />
          </Table.Cell>
        </Table.Row>
      </>
    );
  }
}

PizzaTableItem.propTypes = {
  pizza: object,
  deletePizza: func
};
export default PizzaTableItem;
