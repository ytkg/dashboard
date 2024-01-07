import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Clock from './Clock'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: '200px',
  textAlign: 'center',
  lineHeight: '200px',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Clock />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>box</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>box</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>box</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
