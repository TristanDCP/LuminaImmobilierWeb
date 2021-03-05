import React, { FunctionComponent } from 'react';
import { useApi } from "../useApi-hooks";

const List: FunctionComponent = () => {

  // Recuperer la liste des propriétés
  const { data } = useApi({
    params: {
      namespace: "properties/"
    },
    defaultValue: { results: [] } //les propriéts sont stockés dans le tableau results
  });
  console.log(data.results);

  return (
    <div className="list">
      {data.results.map(({ idParameter, keyParameter, valueParameter}) => {
        return (
          <div key={idParameter}>
            <h3> {keyParameter} </h3>
            <h3> {valueParameter}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default List;

