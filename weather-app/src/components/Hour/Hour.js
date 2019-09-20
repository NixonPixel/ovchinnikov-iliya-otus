import React from 'react'
import { CardContent, Card } from '@material-ui/core'

import withHoc from './HourHoc'

const Hour = ({ renderList, classes, component }) => {
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    {renderList}
                    {component}
                </CardContent>
            </Card>
        </div>

    )
}

export default withHoc(Hour)