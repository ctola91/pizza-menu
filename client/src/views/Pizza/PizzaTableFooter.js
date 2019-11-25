import React, { Component } from "react";
import { Table, Menu, Icon } from "semantic-ui-react";

class PizzaTableFooter extends Component {
  constructor() {
    super();
    this.state = {
      limit: 5,
      page: 0,
    }
  }
  
  render() {
    const { total, fetchPizzas } = this.props;
    console.log(total/this.state.limit);
    return (
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    );
  }
}

export default PizzaTableFooter;
