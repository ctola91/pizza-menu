import React, { PureComponent } from "react";
import { Table } from "semantic-ui-react";

class ToppingsTableHeader extends PureComponent {
  render() {
    return (
      <>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </>
    );
  }
}

export default ToppingsTableHeader;
