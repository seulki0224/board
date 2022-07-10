/* eslint-disable */
import { useState } from "react";
import "./App.css";
/*
  1. html css로 미리 디자인
  2. 현재 UI상태를 state에 저장해둠
  3. state에 따라 UI가 어떻게 보일지 작성
 */

  //TODO
  //component별 파일 분리
    
function App() {
  let [detail, setDetail] = useState(false);
  let [modify, setModify] = useState(false);
  let [write, setWrite] = useState(false);
  let [board_No, setBoard_No] = useState(0);

  let [title, setTitle] = useState(["title1 ", "title2 ", "title3 "]);
  let [inputTitle, setInputTitle] = useState("");
  let [titleCNT, setTitleCNT] = useState(0);

  let [author, setAuthor] = useState(["개똥이1 ", "아무개2 ", "홍길동3 "]);
  let [inputAuthor, setInputAuthor] = useState("");

  let [contentDetail, setContentDetail] = useState(["detail1 ", "detail2 ", "detail3 "]);
  let [inputDetail, setInputDetail] = useState("");

  let [date, setDate] = useState(["2022. 7. 5. 오후 3:34:13","2022. 7. 6. 오전 4:45:24","2022. 7. 7. 오후 5:56:35",new Date().toLocaleString()]);
  let [viewCount, setViewCount] = useState([0, 0, 0]); //BoardList에서는 클릭횟수로 조회수로 사용함

  let [댓글수, set댓글수] = useState([50, 20, 1, Math.floor(Math.random() * 100)]); //Comment 갯수로 사용함

  let [pageList, setPageList] = useState(0);

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      //function();
    }
  };

  return (
    <div className="App">

      <div className="black-nav">
        <div
          onClick={() => {
            location.reload();
          }}
        >
          React Board
        </div>
      </div>
      <div className="nav_menu">
        <button
          onClick={() => {
            let sort_copy = [...title];
            sort_copy.sort();
            setTitle(sort_copy);
            console.log("title : ", title);
          }}
        >
          order
        </button>

        <button
          onClick={() => {
            setTitle(["여자코트추천", "드레스", "아우터"]);
          }}
        >
          arrValueChange
        </button>

        <button
          onClick={() => {
            let sort_delete = [...title];
            sort_delete.pop();
            setTitle(sort_delete);
            console.log("title : ", title);
            console.log("삭제");
          }}
        >
          delete
        </button>
      </div>

      <div className="board_List_Area">

        <div className="top_area" >
          <h3 className="title_area">Board List</h3>   
          <div  className="button_area">
          <button
            onClick={() => {
              modify == true ? setModify(false) : null;
              detail == true ? setDetail(false) : null;
              write  == true ? null: setWrite(true);
              console.log("1.글쓰기 Click");
            }}
          >1.글쓰기
          </button>
          </div>       
        </div>

        <div>
          <table
            className="BoardList_head"
            style={{
              width: "calc(100% - 40px)",
              marginLeft: "auto",
              marginRight: "auto",
              borderSpacing: "0px",
            }}
          >
            <thead style={{ background: "#f5f5f7", lineHeight: "30px", cursor:"pointer"}}>
              <tr>
                <th style={{ minWidth: "50px" }}>No</th>
                <th style={{ width: "1000px" }}
                    onClick={() => {
                      let sort_copy = [...title];
                      sort_copy.sort();
                      setTitle(sort_copy);
                      console.log("title : ", title);
                    }}
                  >
                Title
                </th>
                
                <th style={{ minWidth: "100px" }}>Author</th>
                <th style={{ minWidth: "50px" }}>View</th>
                <th style={{ minWidth: "150px" }}>Date</th>
                <th style={{ minWidth: "50px", paddingRight: "10px" }}>Edit</th>
                <th style={{ minWidth: "50px", paddingRight: "10px" }}>Delete</th>
              </tr>
            </thead>
            <Boardlist
              detail={detail}
              setDetail={setDetail}
              board_No={board_No}
              setBoard_No={setBoard_No}
              title={title}
              setTitle={setTitle}
              titleCNT={titleCNT}
              setTitleCNT={setTitleCNT}
              댓글수={댓글수}
              author={author}
              setAuthor={setAuthor}
              setContentDetail={setContentDetail}
              contentDetail={contentDetail}
              setInputDetail={setInputDetail}
              viewCount={viewCount}
              setViewCount={setViewCount}
              date={date}
              modify={modify}
              setModify={setModify}
              write={write}
              setWrite={setWrite}
              
            />
          </table>
        </div>

      </div>

      <div className="pageBNT" style={{ margin: "20px" }}>
        <button
          onClick={() => {
            console.log("4.Prev Click");
          }}
        >
          4.Prev
        </button>
        <button
          style={{ margin: "5px" }}
          onClick={() => {
            console.log("5.pageList");
          }}
        >
          5.{pageList}
        </button>
        <button
          onClick={() => {
            console.log("6.Next Click");
          }}
        >
          6.Next
        </button>
      </div>
      
      {/* propArea START */}
        {detail == true ? (
          <Detail
            detail={detail}
            setDetail={setDetail}
            board_No={board_No}
            setBoard_No={setBoard_No}
            title={title}
            setTitle={setTitle}
            inputTitle={inputTitle}
            setInputTitle={setInputTitle}
            titleCNT={titleCNT}
            setTitleCNT={setTitleCNT}
            author={author}
            contentDetail={contentDetail}
            setContentDetail={setContentDetail}
            inputDetail={inputDetail}
            setInputDetail={setInputDetail}
            date={date}
            setAuthor={setAuthor}
            
            modify={modify}
            setModify={setModify}

            write={write}
            setWrite={setWrite}
            
            viewCount={viewCount}
            setViewCount={setViewCount}

          />
        ) : null}

        {modify == true ? (
          <Modify
            detail={detail}
            setDetail={setDetail}
            board_No={board_No}
            setBoard_No={setBoard_No}
            title={title}
            setTitle={setTitle}
            inputTitle={inputTitle}
            setInputTitle={setInputTitle}
            titleCNT={titleCNT}
            setTitleCNT={setTitleCNT}
            author={author}
            contentDetail={contentDetail}
            setContentDetail={setContentDetail}
            inputDetail={inputDetail}
            setInputDetail={setInputDetail}
            date={date}
            setDate={setDate}
            setAuthor={setAuthor}
            
            modify={modify}
            setModify={setModify}
          />
        ) : null}

        {write == true ? (
          <Write
            board_No={board_No}
            setBoard_No={setBoard_No}

            title={title}
            setTitle={setTitle}
            inputTitle={inputTitle}
            setInputTitle={setInputTitle}

            titleCNT={titleCNT}
            setTitleCNT={setTitleCNT}

            author={author}
            setAuthor={setAuthor}
            inputAuthor={inputAuthor}
            setInputAuthor={setInputAuthor}

            contentDetail={contentDetail}
            setContentDetail={setContentDetail}
            inputDetail={inputDetail}
            setInputDetail={setInputDetail}

            date={date}
            setDate={setDate}

            write={write}
            setWrite={setWrite}

            viewCount={viewCount}
            setViewCount={setViewCount}
            
          />
        ) : null}
      {/* propArea END */}
    </div>
  );
} 

// Boardlist() START - 테이블 내용
function Boardlist(props) {
  return props.title.map((value, index) => {
    return (
      <tbody className="boardlist" key={[index]}>
        <tr>
          <td>{index + 1}</td>
          <td  className="title" 
            style={{ textAlign: "left" }}
            onClick={(event) => {
              event.stopPropagation();
              props.write == true ? props.setWrite(false) : null;                
              props.modify == true ? props.setModify(false) : null;
              props.detail == true ? props.setDetail(false) : null;

              let 따봉분리 = [...props.viewCount];
              따봉분리[index] = 따봉분리[index] + 1;
              props.setViewCount(따봉분리);
              props.setDetail(!props.detail);
              props.setTitleCNT(index);
              console.log("Boardlist 포커스 실행", index);
            }}
          >
            {props.title[index]}({props.댓글수[index]})
          </td>
          <td>{props.author[index]}</td>
          <td>{props.viewCount[index]}</td>
          <td>{props.date[index]}</td>
          <td>
            <button
              className="btn_list"
              onClick={() => {
                props.modify == true ? null : props.setModify(true);
                props.detail == true ? props.setDetail(false) : null;
                props.write == true ? props.setWrite(false) : null;                
                console.log([index + 1] + " 2.수정 Click");
              }}
            >
              2.수정
            </button>
          </td>
          <td>
            <button
              className="btn_list"
              onClick={() => {
                let sort_delete = [...props.title];
                sort_delete.splice(index, 1);
                props.setTitle(sort_delete);
                console.log("2.삭제 Click");
                console.log(sort_delete);
                
                props.detail == true ? props.setDetail(false) : null;
                props.modify == true ? props.setModify(false) : null;
              }}
            >
              3.삭제
            </button>
          </td>
        </tr>
      </tbody>
    );
  });
}
// Boardlist() END - 테이블 내용

// Detail() START - Detail View
function Detail(props) {
  return (
    <div className="detail">
      <div className="top_area" >
        <h3 className="title_area">Detail</h3>

        {props.title.map((value, index) => {
          return (
            <div
              key={[index]}
              onClick={() => {
                props.setBoard_No(index);
                props.setTitle(index);
                props.setAuthor(index);
                props.setContentDetail(index);
              }}
            >
            </div>
          );
        })}
            
        <div className="button_area">
          <button
            className="btn_list"
            onClick={() => {
              props.modify == true ? null : props.setModify(true);
              props.detail == true ? props.setDetail(false) : null;
              props.write == true ? props.setWrite(false) : null;     
              console.log("7.수정 Click");           
            }}
          >
            7.수정
          </button>
          <button
            onClick={() => {
              let sort_delete = [...props.title];
              let sort_delete2 = [...props.author];
              let sort_delete3 = [...props.contentDetail];

              sort_delete.splice(props.index, 1);
              props.setTitle(sort_delete);
              sort_delete2.splice(props.index, 1);
              props.setAuthor(sort_delete2);
              sort_delete3.splice(props.index, 1);
              props.setContentDetail(sort_delete3);
              console.log("8.글삭제 Click");
              props.setDetail(!props.detail);
            }}
          >
            8.글삭제
          </button>
          <button
            className="btn_list"
            onClick={() => {           
              props.detail == true ? props.setDetail(false) : null;
              props.modify == true ? props.setModify(false) : null;
              console.log("9.닫기 Click")              
            }}
          >
            9.닫기
          </button>
        </div>        
      </div>
        <div className="content_area">
          <table style={{width:"100%"}}>
            <thead>
              <tr className="content_detail_area" style={{height: "30px", lineHeight: "30px"}}>
              <td style={{width:"50%", padding: "0 10px"}}><h4>{props.title[props.titleCNT]}</h4></td>              
              <td style={{width:"60px"}}><h4>Date : </h4></td>
              <td style={{width:"200px"}}>{props.date[props.board_No]}</td>
              <td style={{width:"100px"}}><h4>View : </h4></td>
              <td style={{width:"100px"}}>{props.viewCount[props.titleCNT]}</td>
              <td style={{width:"60px"}}><h4>Author: </h4></td>
              <td style={{width:"100px"}}>{props.author[props.titleCNT]}</td>
              </tr>
            </thead>
            <tbody>
            <tr style={{background:"white"}}>
              <td colSpan={7} style={{padding:"20px", border: "1px solid #ddd"}}>{props.contentDetail[props.titleCNT]}</td>
            </tr>
            <tr>
              <td colSpan={7} style={{textAlign:"center"}}>              
                <button style={{marginRight:"5px"}}
                  onClick={() => {           
                  console.log("이전글 Click")              
                  }}
                  >
                  이전글
                </button>  
                <button
                  onClick={() => {           
                    console.log("이전글 Click")              
                  }}
                >
                  다음글
                </button>
                </td>
            </tr>
            </tbody>
          </table>
        </div>
      
    </div>
  );
}
// Detail() END

// Modify() START
function Modify(props) {
  return (
    <div className="modify">
      <div className="top_area" >
        <h4 className="title_area">Modify</h4>
      
        <div className="button_area">
          <button
              onClick={() => {
                props.detail == true ? props.setDetail(false) : null;
                props.modify == true ? props.setModify(false) : null;
                console.log("10.닫기 클릭");
              }}
          >
              10.닫기
          </button>

          <button
            style={{ float: "right" }}
            onClick={() => {
              let title_edit = [...props.title];
              title_edit[props.titleCNT]  =  [props.inputTitle];
              props.setTitle(title_edit);

              let detail_edit = [...props.contentDetail];
              detail_edit[props.titleCNT]  =  [props.inputDetail];
              props.setContentDetail(detail_edit);

              let date_edit = [...props.date];
              date_edit[props.titleCNT]  =  [props.inputDetail];
              props.setDate(date_edit);

              console.log("글수정버튼 클릭");
            }}
          >
            8.수정글 저장
          </button>
        </div>      
      </div>

      <div className="content_area">
      <table style={{width:"100%"}}>
        <thead>
          <tr className="content_detail_area" style={{height: "30px", lineHeight: "30px"}}>
            <td style={{width:"60px"}}><h4>Title : </h4></td>
            <td style={{width:"50%"}}>
              <input 
                className="input_Title"
                style={{width:"100%"}}
                placeholder={props.title[props.titleCNT]}
                type="text"
                onChange={(e) => {
                  props.setInputTitle(e.target.value);
                }}
              />
              {console.log(props.inputTitle)}
            </td>
            <td style={{width:"60px"}}><h4>Date :</h4></td>
            <td style={{width:"220px"}}>{props.date[props.board_No]}</td>            
            <td style={{width:"60px"}}><h4>Author: </h4></td>
            <td style={{width:"100px"}}>{props.author[props.titleCNT]}</td>
          </tr>
        </thead>

        <tbody>
          <tr style={{background:"white"}}>
            <td colSpan={6}>          
            <input
              style={{width:"100%", minHeight:"300px", verticalAlign : "top"}}
              placeholder={props.contentDetail[props.titleCNT]}
              className="inputDetail"
              type="text"
              onChange={(e) => {
                props.setInputDetail(e.target.value);
              }}
            />
              {console.log(props.inputDetail)}
            </td>
          </tr>
        </tbody>        
        </table>

      </div>
    </div>
  );
}
// Modify() END

// Write() START
function Write(props) {
  return (
    <div className="write">
      <div className="top_area">
        <h4 className="title_area">Write</h4>

        <div className="button_area">
          <button
            onClick={() => {
              props.setWrite(!props.write);

              let addTitle = [...props.title];
              addTitle.unshift(props.inputTitle);
              props.setTitle(addTitle);

              let addAuthor = [...props.author];
              addAuthor.unshift(props.inputAuthor);
              props.setAuthor(addAuthor);

              let addDetail = [...props.contentDetail];
              addDetail.unshift(props.inputDetail);
              props.setContentDetail(addDetail);

              let addView = [...props.viewCount];
              addView.unshift(0);
              props.setViewCount(addView);
              console.log("addView : ", addView);

              const arr = [...props.date];
              arr.unshift(new Date().toLocaleString());
              props.setDate(arr);

              console.log("arr : ", arr);
            }}
          >
            7.글등록
          </button>
        </div>
        
      </div>
        
      <div className="content_area">       
      <table style={{width:"100%"}}>
        <thead>
          <tr className="content_detail_area" style={{height: "30px", lineHeight: "30px"}}>
            <td style={{width:"60px"}}>
              <h4>Title:</h4>
            </td>
            <td>
              <input className="input_Title"
                style={{width:"100%"}}
                type="text"
                placeholder="Title"
                onChange={(e) => {
                  props.setInputTitle(e.target.value);
                }}
              />
              {console.log(props.inputTitle)}
            </td>
            <td>
              <h4>Author: </h4>
            </td>
            <td>
              <input
                className="input_Author"      
                style={{width:"100%"}}          
                placeholder="Author"
                type="text"
                onChange={(e) => {
                  props.setInputAuthor(e.target.value);
                }}
              />
            </td>
          </tr>
        </thead>
        <tbody>
        <tr style={{background:"white"}}>
          <td colSpan={4} style={{border:"1px solid #ddd"}}>
            <textarea
              style={{width:"100%", minHeight:"300px"}}
              type="text"
              className="content"
              placeholder="Detail"
              onChange={(e) => {
                props.setInputDetail(e.target.value);
              }}
            />
          </td>
        </tr>
        </tbody>
        </table>
      </div>
    
    </div>
  );
}
// Write() END
export default App;
