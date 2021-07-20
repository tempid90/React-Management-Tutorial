import './App.css';
import Customer from './components/Customer';

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

function App() {
  return (
    <div>
      {
        customers.map( c => {
          return (
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
    </div>
  );
}

export default App;
