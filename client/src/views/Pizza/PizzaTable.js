import React, { PureComponent } from 'react';
import { Table } from 'semantic-ui-react';
import PizzaTableItem from './PizzaTableItem';

import { isFirstRender } from '../../shared/utils/frontend';
import PizzaTableHeader from './PizzaTableHeader';

class PizzaTable extends PureComponent {
  render() {
    const { pizzas, deletePizza, updatePizza } = this.props;
    return (
      <>
        {isFirstRender(pizzas) ? (
      <div>No Pizzas.</div>
    ) : (
      <Table celled>
        <PizzaTableHeader />
        <Table.Body>
          {pizzas.map(pizza => (
            <PizzaTableItem pizza={pizza} key={pizza._id} deletePizza={deletePizza} updatePizza={updatePizza} />
          ))}
        </Table.Body>
      </Table>
    )}
      </>
    )
  }
}

export default PizzaTable;