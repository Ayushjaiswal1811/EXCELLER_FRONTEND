
import './App.css'
import {Card} from './components/ui/Card';
import {Card2, Card3} from './components/ui/Card2';


function App() {

const user1={
  details : {name: 'Ayush' ,age : 21, id : 1},
  address : {city: 'Nagpur' ,state : 'maharashtra', zipcode : 440035},
  contacts : {number : '9881961369' ,email : 'jaiswalamol83@gmail.com'}
}
const user2={
  details : {name: 'Aman' ,age : 35, id : 2},
  address : {city: 'kanpur' ,state : 'uttar-pradesh', zipcode : 41482},
  contacts : {number : '9623895785' ,email : 'ayushj.cse22@sbjit.edu.in'}
}
const user3={
  details : {name: 'Rinki' ,age : 28, id : 3},
  address : {city: 'Nagp' ,state : 'uttar-pradesh', zipcode : 41482},
  contacts : {number : '9623895785' ,email : 'ayushj.cse22@sbjit.edu.in'}
}

const data1={
  name: "Abhijecta",
  age: 27
}

const users=[user1,user2,user3]
const data=[data1]
const language=['HTML','CSS','JS','REACT']

  return (
    <>
    <div className='cards'>
        <Card users={users} heading={'hello I am a Card!'}/>
   </div>

   <div>
      <Card2 data={data} />
   </div>
   <div>
      <Card3 language={language} />
   </div>
   </>
)
}

export default App
