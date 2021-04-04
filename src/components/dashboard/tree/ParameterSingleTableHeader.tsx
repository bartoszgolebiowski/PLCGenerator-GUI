import React from 'react';
import { useTranslation } from 'react-i18next';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { useStyles } from './utils';

const ParameterSingleTableHeader = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <TableHead>
      <TableRow>
        <TableCell
          className={classes.cell}
          component="th"
          align="center"
        >
          {t('dashboard.dashboardTree.header.name')}
        </TableCell>
        <TableCell
          className={classes.cell}
          component="th"
          align="center"
        >
          {t('dashboard.dashboardTree.header.value')}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ParameterSingleTableHeader;