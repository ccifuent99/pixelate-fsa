import { createRoot } from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import store from './store';

const root = createRoot(document.querySelector('#root'));

const App = ()=> {
  const [grid, setGrid] = useState([[]]);
  const [color, setColor] = useState('')
  useEffect(()=> {
    store.subscribe(()=> {
      setGrid(store.getState().grid);
    });
  }, []);
  useEffect(()=> {
    store.dispatch({ type: 'ADD_ROW'});
    store.dispatch({ type: 'ADD_ROW'});
    store.dispatch({ type: 'ADD_ROW'});
  }, []);

  const handleClickRow = () => {
    store.dispatch({ type: 'ADD_ROW'});
  };

  const handleClickColor = ({target}) => {
    store.dispatch({ type: 'SET_COLOR'});
    target.style.backgroundColor = store.getState().color
  }

  return (
    <div>
      <h1>Pixelate</h1>
      <div>Todo Add Color Picker</div>
      <div>
        <button onClick={handleClickRow}>Add Row</button>
      </div>
      <table>
        <tbody>
        {
          grid.map( (row, rdx) => {
            return (
              <tr key={ rdx }>
                {
                  row.map( (cell, cdx) => {
                    return (
                      <td onClick={handleClickColor} key= { cdx } style={{ backgroundColor: cell }}>
                      </td>
                    );
                  }) 
                }
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
};
root.render(<App />);
