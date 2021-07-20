import './App.css';
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell, withStyles, Paper } from '@material-ui/core';
import { Component } from 'react';

const styles = theme => ({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})


const customers = [
  {
  'no': '1',
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '910222',
  'gender': '남자',
  'job': '대학생'
  },
  {
    'no': '2',
    'image': 'https://placeimg.com/64/64/2',
    'name': '김이름',
    'birthday': '960211',
    'gender': '여자',
    'job': '회사원'
  },
  {
      'no': '3',
      'image': 'https://placeimg.com/64/64/3',
      'name': '이길동',
      'birthday': '810404',
      'gender': '남자',
      'job': '프로그래머'
  }
]

class App extends Component {  
  render() {
    const { classes } = this.props;
    return (   
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { 
              customers.map( c => { return (
                  <Customer
                    key={c.no}
                    no={c.no}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                  />
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
