/* eslint-disable */
import {useState} from 'react';
import './App.css';
// import { DateTime } from "luxon";
// import React, { useState } from "react";
// import styled from 'styled-components';
/*
  1. html css로 미리 디자인
  2. 현재 UI상태를 state에 저장해둠
  3. state에 따라 UI가 어떻게 보일지 작성
 */

  function App() {
  let [title, setTitle] = useState(['title1 ', 'title2 ', 'title3 ']);
  let [inputTitle, setInputTitle] = useState('');
  let [titleCNT, setTitleCNT] = useState(0);
  let [date, setDate] = useState([new Date().toLocaleString(), new Date().toLocaleString(), new Date().toLocaleString()])

  let [따봉, 따봉변경] = useState([0,0,0]); //BoardList에서는 클릭횟수로 조회수로 사용함
  let [modal, setModal] = useState (false); 

  let [작성자, set작성자] = useState(['개똥이','아무개','홍길동'])
  let [댓글수 , set댓글수] = useState(0);//title 갯수로 사용함
  let [detail, setDetail] = useState(['detail1', 'detail2', 'detail3']);  
  let [inputDetail, setInputDetail] = useState('');
  let [detailNum, setDetailNum] = useState(0);  

  let [pageList, setPageList] = useState(0);

  const onCheckEnter = (e) => {
    if(e.key === 'Enter') {
      //function();
    }
  }

  //todo
  //번호--
  //날짜
  //아래 페이지 번호 표시 다음
  //글쓰기내용 추가아 아니고 체인지로 변경
  //리스트 클릭하면 그글 이 보여야한,ㄴ데 왜안돼
//따봉이늘어나면??

  return (// App() > return START
      
      <div className="App"> {/* App() > return > div.APP START*/}
{/* <h4>{DateTime.now().toLocaleString()}</h4> */}

        <div className="black-nav">
          <div onClick={()=>{location.reload();}}>React Blog</div>
        </div>

        <div className="nav_menu">

          <button onClick={()=>{
            let sort_copy = [...title];
            sort_copy.sort();
            setTitle(sort_copy)
            console.log(title);
            }}>정렬
          </button>

          <button onClick={()=>{ 
            let copy = [...title];
            copy[0] = '여자코트 추천';
            setTitle(copy);
            }}>0번째 배열 값만 변경
          </button>

          <button onClick={()=>{
            setTitle(['여자코트추천', '드레스', '아우터'])
            }}>배열값 변경
          </button>

          <button onClick={()=>{
            let sort_add = [...title];
            sort_add.push('a');
            setTitle(sort_add)
            console.log(title);
            }}>글제목배열추가
          </button>

          <button onClick={()=>{
            let sort_delete = [...title];
            sort_delete.pop();
            setTitle(sort_delete)
            console.log(title);
            
            console.log('삭제')
            }}>
            글삭제
          </button>

        </div>

        <h2 style={{textAlign:"left", paddingLeft:'20px'}}>Board</h2>
        
        <div>
          <table style={{width:"calc(100% - 40px)", marginLeft:"auto", marginRight:"auto", borderSpacing: "0px"}}>
            <thead style={{background:"#eee", lineHeight:"40px"}}><tr><th style={{minWidth:"50px"}}>번호</th><th style={{width:"1000px"}}>제목</th><th style={{minWidth:"150px"}}>작성자</th><th style={{minWidth:"150px"}}>날짜</th><th style={{minWidth:"150px"}}>조회수</th><th style={{minWidth:"150px"}}>댓글수</th></tr></thead>
            <Boardlist date={date} titleCNT={titleCNT} title={title} 작성자={작성자} modal={modal} date={date} 따봉={따봉} 따봉변경={따봉변경} 댓글수={title.length} setModal={setModal} setTitleCNT={setTitleCNT} setTitle={setTitle}/>
          </table>
        </div>

        <br/><br/>

        <div className='pageBNT' >
            <button>Prev</button>
            <span style={{padding:"0 10px"}}>{pageList}</span>
            <button onClick={() => {}}>1</button>
            <button>2</button>
            <button>Next</button>
        </div>

        {/* {
          title.map(function(value, index){
          return(
            <div key={[index]}>              
              <Boardlist titleCNT={index+1} title={title[index]}/>
            </div>
            )
          })
        } */}

        <div className="list">
        
          <div className="edit">

            <h3 style={{marginRight: "3px"}}>{title}</h3>


            <input type="text" onChange={(e)=>{  
              setInputTitle(e.target.value)
              //console.log(inputTitle);              
            }}/>

            {/* <input type="text" onChange={(e)=>{  
              setDate(e.target.value)
              //console.log(inputTitle);              
            }}/> */}




            <button className="button_click" onClick={()=>{
              let 글내용add = [...title];
              글내용add.unshift(inputTitle);
              setTitle(글내용add);
              const arr = [...date];
              arr.unshift(new Date().toLocaleString());
              setDate(arr);
              }}
              >글등록
            </button>


            {/* <input type="text" onChange={(e)=>{  
              setInputTitle(e.target.value)
              //console.log(inputTitle);              
            }}/>

            <button className="button_click" onClick={()=>{
              let 글제목add = [...title];
              // 글제목add.push(inputTitle);
              글제목add.unshift(inputTitle);
              setTitle(글제목add);
              }}>글등록
            </button> */}

          </div>
            
          { 
            title.map (function(value, index) {
              return (
                <div key={ [index] }>
                  
                  <h4> 
                    <span onClick={ () => { setModal((!modal)); setTitleCNT(index)} }>
                      { title[index] } 
                      title
                    </span>

                    <span onClick = { (event) => { event.stopPropagation();
                      let 따봉분리 = [...따봉];
                      따봉분리[index] = 따봉분리[index] + 1; 
                      따봉변경(따봉분리) 
                    }}> 👍  따봉카운트
                    </span>
                    { 따봉[index] }

                    <button onClick={()=>{
                      let sort_delete = [...title];
                      sort_delete.splice(index, 1);
                      setTitle(sort_delete)
                      }}>
                      글삭제
                    </button>

                    <p>날짜: 2월 18일 발행</p>

                  </h4>                
                </div>
              )
            })
          } *

        {/* <button onClick={()=>{ setTitleCNT(0) }}>글제목0</button> */}       

        </div>

        {/* { modal == true ? <Modal/> : null } */}
        
        {/* prop1. Props 사용을 위해 State이름 생성 */}
        {/* { modal == true ? <Modal 작명={ state이름 } /> : null } */}

        {/* prop3. 작명이름은 귀찮으니까 state이름과 동일하게 만듦 */}
        {/* { modal == true ? <Modal title={ title } /> : null } */}

        { modal == true ? <Modal 
            title={title} setTitle={setTitle} 
            inputTitle={inputTitle} setInputTitle={setInputTitle}
            titleCNT={titleCNT} setTitleCNT={setTitleCNT}
            
            setModal={setModal} 
            
            detail={detail} setDetail={setDetail} 
            inputDetail ={inputDetail} setInputDetail= {setInputDetail} 
            detailNum ={detailNum} setDetailNum= {setDetailNum} 
            
            작성자={작성자}/> 
          : null }
      </div>// App() > return > div.APP END
    
    );// App() > return END
    
  }// App() END

function Boardlist(props) {
  return(  
      props.title.map((value, index) =>{
        return(        
          <tbody className='boardlist' key={[index]}>            
            <tr>
              {/* <td>{props.title[index]}</td> */}
              {/* <td>{props.titleCNT}</td> */}
              <td>{index+1}</td>              
              {/* todo */}
              {/* 글조회 카운트 */}
              {/* 모달토글 */}
              <td style={{textAlign: "left"}} 
                  onClick={ (event) => { event.stopPropagation();
                    let 따봉분리 = [...props.따봉];
                    따봉분리[index] = 따봉분리[index] + 1; 
                    props.따봉변경(따봉분리) 
                    props.setModal((!props.modal));
                    props.setTitleCNT(index) 
                  }}>
                  {props.title[index]}                
                  <button onClick={()=>{
                    let sort_delete = [...props.title];
                    sort_delete.splice(index, 1);
                    props.setTitle(sort_delete)
                    }}>
                    삭제
                  </button>
              </td>
              <td>{props.작성자[index]}</td>
              <td>{props.date}</td>
              <td>{props.따봉[index]}</td>
              <td>{props.title.length}</td>
            </tr>
          </tbody>

        )          
      }) 
  )
}

  //prop2. props 파라미터 등록 후 props.작명 사용
  function Modal(props){
    return(
      <div className="modal" onClick={ () => { props.setModal((!modal)); props.setTitleCNT(props.index)} }>
        <h3>Detail View</h3>
        <h3>제목 : {props.title [props.titleCNT] }</h3>
        <p>작성일 : {props.작성자}</p>
        <p>작성자</p>
        <span>글내용:</span>
        <span>{props.detail}</span>
        
        {/* <input type="text" onChange={(e)=>{  
          props.setInputDetail(e.target.value)
          console.log(props.inputDetail);              
        }}/> */}
        <br/><br/>

        <div style={{borderTop:"1px solid black"}}>
          <h3>글쓰기</h3>      

          <textarea onChange={(e)=>{  
            props.setInputDetail(e.target.value)
            console.log(props.inputDetail);              
          }}/>
    
        <br/><br/>
        <button className="button_click" onClick={()=>{
            let detailAdd = [...props.detail];
            // 글제목add.push(inputTitle);
            detailAdd.unshift(props.inputDetail);
            props.setDetail(detailAdd);
            }}>글내용등록          
          </button>        
        </div>
        
        
        {/* 
        <button className="pixed" onClick={() => {
          props.setTitle(['여자남자코트 추천', 'title2', 'title3'])
          }}>글수정:배열갈기
        </button> 
        */}

        {/* 
        <input type="text" onChange={(e)=>{  
          setInputDetail(e.target.value)
          // console.log(글입력값변경);              
        }}/> 
        */}

      </div>
    )
  }  
  // Modal() END

export default App;