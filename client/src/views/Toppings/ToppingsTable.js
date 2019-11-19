import React, { PureComponent } from "react";
import { Table } from "semantic-ui-react";
import { array, func } from "prop-types";

import ToppingsTableItem from "./ToppingsTableItem";

import { isFirstRender } from "../../shared/utils/frontend";
import ToppingsTableHeader from "./ToppingsTableHeader";

class ToppingsTable extends PureComponent {
  render() {
    const { toppings, deleteTopping, updateTopping } = this.props;
    return (
      <>
        {isFirstRender(toppings) ? (
          <div>No Toppings.</div>
        ) : (
          <Table celled>
            <ToppingsTableHeader />
            <Table.Body>
              {toppings.map(topping => (
                <ToppingsTableItem
                  topping={topping}
                  key={topping._id}
                  deleteTopping={deleteTopping}
                  updateTopping={updateTopping}
                />
              ))}
            </Table.Body>
          </Table>
        )}
      </>
    );
  }
}

ToppingsTable.propTypes = {
  toppings: array,
  deleteTopping: func,
  updateTopping: func
};

export default ToppingsTable;
