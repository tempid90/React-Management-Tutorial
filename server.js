const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/customers', (req, res) => {
    res.send([
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
          'job': '회계사'
        },
        {
            'no': '3',
            'image': 'https://placeimg.com/64/64/3',
            'name': '이길동',
            'birthday': '810404',
            'gender': '남자',
            'job': '프로그래머'
        },
        {
          'no': '4',
          'image': 'https://placeimg.com/64/64/4',
          'name': '박길동',
          'birthday': '750404',
          'gender': '남자',
          'job': '광부'
      }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));