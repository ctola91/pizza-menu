import React, { Component, createRef } from "react";
import { Table, Button, Input } from "semantic-ui-react";
import { object, func } from "prop-types";

class ToppingsTableItem extends Component {
  ref = createRef(null);

  constructor() {
    super();
    this.state = {
      isEditing: false
    };
  }

  editTopping = () => {
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

  handleSaveItem = topping => {
    const { updateTopping } = this.props;
    console.log({ _id: topping._id, name: this.state.name });
    updateTopping({ _id: topping._id, name: this.state.name });
    this.editTopping();
  };

  render() {
    const { topping, deleteTopping } = this.props;
    return (
      <>
        <Table.Row>
          <Table.Cell>
            {!this.state.isEditing ? (
              topping.name
            ) : (
              <Input focus onChange={this.handleOnChange}  />
            )}
          </Table.Cell>
          <Table.Cell>
            {this.state.isEditing ? (
              <Button icon="save" onClick={() => this.handleSaveItem(topping)} />
            ) : (
              <Button icon="edit" onClick={this.editTopping} />
            )}
            <Button icon="delete" onClick={() => deleteTopping(topping._id)} />
          </Table.Cell>
        </Table.Row>
      </>
    );
  }
}

ToppingsTableItem.propTypes = {
  topping: object,
  deleteTopping: func,
  updateTopping: func
};
export default ToppingsTableItem;
