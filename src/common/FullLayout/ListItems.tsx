import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { items } from '../../nav'
export const ListItems = (
  <div>
    {
      items.map((i: any, index: number) => {
        return <ListItem button key={`full${index}`} selected>
          <ListItemIcon>
            <i className={i.icon} style={{ fontSize: '1.2em' }}></i>
          </ListItemIcon>
          <ListItemText primary={i.name} />
        </ListItem>
      })
    }
  </div >
);

