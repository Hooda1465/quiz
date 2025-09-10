import React, { useRef, useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';

const Quiz = () => {
 
  let [index,setIndex] = useState(0);
  let [question,setQuestion] =useState(data[index]);
  let [lock, setLock]= useState(false);
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let [result, setResult]= useState(false);
  let [score, setScore] = useState(0);


 let optionArray = [option1,option2,option3,option4]
  const checkAns = (e, ans)=>{
                  if(lock==false){
              if(question.ans === ans){

                e.target.classList.add("correct");
                  setLock(true)
                  setScore(score+1)
                  
              } else{
                e.target.classList.add("wrong");
                  setLock(true);
                  optionArray[question.ans-1].current.classList.add("correct");
              }
}
}

const nextBtn = ()=>{
 

if(lock===true){
if(index == data.length-1){
  setResult(true);
  return 0
}

  setIndex(++index);
  setQuestion(data[index]);
  setLock(false)
  optionArray.map((option)=>{
    option.current.classList.remove("correct");
    option.current.classList.remove("wrong");
    return null;

  })
  }
}
const reset = ()=>{
  setIndex(0);
  setQuestion(data[0]);
  setLock(false);
  setResult(false);
  setScore(0);
}

    
 
  return (
    <div className='container-fluid main-body'>
     <div className='row vh-100 justify-content-center align-items-center'>
      <div className='col-10 col-xl-5  p-3 fourth rounded shadow '>
     <h1>Quiz App</h1>

     <hr/>
     {result? 
     <>

     <h2 className='d-block m-auto align-self-center'>{score > 2 ? `Result : Congratulation! you have Passed the exam.`  : "Result : Bad luck! you have Failed the exam." }</h2>
     
     <p className='mt-5'>You have scored {score} out of 5.</p>
     <button onClick={reset} className='btn mybutton mt-3'>Reset</button>
     </>
     
     :
     <> 
     <h2>{index+1}. {question.question}</h2>
     <ul className='opt-ul p-0'>
        <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
     </ul>
     <button onClick={nextBtn} className='btn mybutton'>Next</button>
     <p>{index+1} out of {data.length} questions</p> 
     </>
     }
    
     </div>
     </div>
    </div>
  )
}

export default Quiz
