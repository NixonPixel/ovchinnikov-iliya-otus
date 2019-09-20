import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Collapse, IconButton, Typography } from "@material-ui/core";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { LocationCity, Delete } from "@material-ui/icons";
import withHoc from "./CityListHoc";

const CityList = ({ cityList, removeCity,selected, handleListItemClick, classes }) => {
    const [open, setOpen] = useState(true);

    function handleClick() {
        setOpen(!open);
    }
    const list =
        <React.Fragment>
            <Typography style={{ textAlign: 'center' }} variant="h6">Список городов:</Typography>
            <List className={classes.list} classes={{ padding: classes.padding }}>
                {cityList.map((city, idx) => {
                    return (
                        <ListItem
                            classes={{ selected: classes.listItemActive }}
                            className={classes.listItem}
                            onClick={event => handleListItemClick(event, idx)}
                            selected={idx === selected}
                            button
                            key={idx}
                        >
                            <ListItemIcon>
                                <LocationCity />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>{city}</ListItemText>
                            <Delete onClick={() => removeCity(idx)} className={classes.deleteIcon} />
                        </ListItem>
                    );
                })}
            </List>
        </React.Fragment>
    const expandBtn =
        <IconButton className={classes.expandBtn} onClick={handleClick} size="small">
            {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
    return cityList.length > 5
        ? <React.Fragment>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {list}
            </Collapse>
            {expandBtn}
        </React.Fragment>
        : list

};

export default withHoc(CityList);
