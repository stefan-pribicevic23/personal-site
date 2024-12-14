import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(
  name,
  value,
  hourlyValueChangePercent,
  dailyValueChangePercent,
  weeklyValueChangePercent,
  marketShare,
) {
  return { name, value, dailyValueChangePercent, hourlyValueChangePercent, weeklyValueChangePercent, marketShare };
}

const rows = [
  createData('Bitcoin', 101101.101, 0.15, 0.31, 1.20, 40600000000),
];

export default function BasicTable() {
  return (
    <div style={{width: '50%', margin: '50px'}}>
      <Typography variant="h2" gutterBottom>
        Crypto market
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">1h %</TableCell>
              <TableCell align="right">24h %</TableCell>
              <TableCell align="right">7d %</TableCell>
              <TableCell align="right">Market cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
                <TableCell align="right">{row.hourlyValueChangePercent}</TableCell>
                <TableCell align="right">{row.dailyValueChangePercent}</TableCell>
                <TableCell align="right">{row.weeklyValueChangePercent}</TableCell>
                <TableCell align="right">{row.marketShare}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}