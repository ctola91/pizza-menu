import React, { Component, createRef } from "react";
import { Table, Button, Input } from "semantic-ui-react";
import { object, func } from "prop-types";

class PizzaTableItem extends Component {
  ref = createRef(null);

  constructor() {
    super();
    this.state = {
      isEditing: false
    };
  }

  editPizza = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
    }));
  };

  handleOnChange = e => {
    const {target } = e;
    this.setState(() => ({
      name: target.value
    }));
  }

  handleSaveItem = pizza => {
    const { updatePizza } = this.props;
    console.log({ _id: pizza._id, name: this.state.name });
    updatePizza({ _id: pizza._id, name: this.state.name });
    this.editPizza();
  };

  render() {
    const { pizza, deletePizza } = this.props;
    return (
      <>
        <Table.Row>
          <Table.Cell>{pizza._id}</Table.Cell>
          <Table.Cell>
            {!this.state.isEditing ? (
              pizza.name
            ) : (
              <Input focus onChange={this.handleOnChange}  />
            )}
          </Table.Cell>
          <Table.Cell>
            {this.state.isEditing ? (
              <Button icon="save" onClick={() => this.handleSaveItem(pizza)} />
            ) : (
              <Button icon="edit" onClick={this.editPizza} />
            )}
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
