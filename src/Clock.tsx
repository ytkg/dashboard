import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: '200px',
  textAlign: 'center',
  lineHeight: '200px',
  color: theme.palette.text.secondary,
}))

function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formattedDate = format(currentDate, 'yyyy年M月d日 HH時mm分ss秒')

  return (
    <Item>
      <Typography component="span">{formattedDate}</Typography>
    </Item>
  )
}

export default Clock
