/* eslint-disable */
import { useState } from "react";
import "./App.css";
/*
  1. html css로 미리 디자인
  2. 현재 UI상태를 state에 저장해둠
  3. state에 따라 UI가 어떻게 보일지 작성
 */

function App() {
  let [modal, setModal] = useState(false);
  let [board_No, setBoard_No] = useState(0);

  let [title, setTitle] = useState(["title1 ", "title2 ", "title3 "]);
  let [inputTitle, setInputTitle] = useState("");
  let [titleCNT, setTitleCNT] = useState(0);

  let [author, setAuthor] = useState(["개똥이1 ", "아무개2 ", "홍길동3 "]);
  let [inputAuthor, setInputAuthor] = useState("");

  let [detail, setDetail] = useState(["detail1 ", "detail2 ", "detail3 "]);
  let [inputDetail, setInputDetail] = useState("");

  let [date, setDate] = useState([
    "2022. 7. 5. 오후 3:34:13",
    "2022. 7. 6. 오전 4:45:24",
    "2022. 7. 7. 오후 5:56:35",
    new Date().toLocaleString(),
  ]);
  let [view, setView] = useState([0, 0, 0]); //BoardList에서는 클릭횟수로 조회수로 사용함

  let [댓글수, set댓글수] = useState(["Comment2 ", "Comment3 "]); //Comment 갯수로 사용함
  let [pageList, setPageList] = useState(0);

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      //function();
    }
  };

  //todo
  //아래 페이지 번호 표시 다음
  //글쓰기내용 추가아 아니고 체인지로 변경
  //따봉이늘어나면??

  return (
    // App() > return START

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
            let copy = [...title];
            copy[0] = "여자코트 추천";
            setTitle(copy);
          }}
        >
          value change - arr 0
        </button>

        <button
          onClick={() => {
            setTitle(["여자코트추천", "드레스", "아우터"]);
          }}
        >
          arr value change
        </button>

        <button
          onClick={() => {
            let sort_add = [...title];
            sort_add.push("a");
            setTitle(sort_add);
            console.log("title : ", title);
            console.log("sort_add : ", sort_add);
          }}
        >
          title add arr
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
      {/* App() > return > board List START */}
      <h4 style={{ textAlign: "left", paddingLeft: "20px" }}>Board List</h4>
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
          <thead style={{ background: "#f5f5f7", lineHeight: "30px" }}>
            <tr>
              <th style={{ minWidth: "50px" }}>No</th>
              <th style={{ width: "1000px" }}>Title</th>
              <th style={{ minWidth: "100px" }}>Author</th>
              <th style={{ minWidth: "50px" }}>View</th>
              <th style={{ minWidth: "150px" }}>Date</th>
              <th style={{ minWidth: "50px", paddingRight: "10px" }}>Edit</th>
              <th style={{ minWidth: "50px", paddingRight: "10px" }}>Delete</th>
            </tr>
          </thead>
          <Boardlist
            modal={modal}
            setModal={setModal}
            board_No={board_No}
            setBoard_No={setBoard_No}
            title={title}
            setTitle={setTitle}
            titleCNT={titleCNT}
            setTitleCNT={setTitleCNT}
            댓글수={댓글수.length}
            author={author}
            setAuthor={setAuthor}
            setDetail={setDetail}
            detail={detail}
            setInputDetail={setInputDetail}
            view={view}
            setView={setView}
            date={date}
          />
        </table>
      </div>
      <div className="pageBNT" style={{ margin: "20px" }}>
        <button
          onClick={() => {
            console.log("3.Prev Click");
          }}
        >
          3.Prev
        </button>
        <button
          style={{ margin: "5px" }}
          onClick={() => {
            console.log("4.pageList");
          }}
        >
          4.{pageList}
        </button>
        <button
          onClick={() => {
            console.log("5.Next Click");
          }}
        >
          5.Next
        </button>
      </div>
      {/* Write Area */}
      <h4 style={{ textAlign: "left", paddingLeft: "20px" }}>Write Area</h4>
      <div className="list">
        <div className="edit" style={{ position: "relative" }}>
          <button
            style={{ float: "right" }}
            className="button_click"
            onClick={() => {
              let addTitle = [...title];
              addTitle.unshift(inputTitle);
              setTitle(addTitle);

              let addAuthor = [...author];
              addAuthor.unshift(inputAuthor);
              setAuthor(addAuthor);

              let addDetail = [...detail];
              addDetail.unshift(inputDetail);
              setDetail(addDetail);

              let addView = [...view];
              addView.unshift(0);
              setView(addView);
              console.log("addView : ", addView);

              const arr = [...date];
              arr.unshift(new Date().toLocaleString());
              setDate(arr);

              console.log("arr : ", arr);
            }}
          >
            6.글등록
          </button>
          <h4>
            Title Arr:
            {title}
          </h4>
          <h4>Input Title: {inputTitle}</h4>
          <span>Title: </span>
          <input
            className="input_Title"
            type="text"
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <h4>
            Author Arr: {author}
            <br />
            Input Author: {inputAuthor}
          </h4>
          <span>Author: </span>
          <input
            className="input_Author"
            type="text"
            onChange={(e) => {
              setInputAuthor(e.target.value);
            }}
          />
          <br />
          <br />
          <h4>
            Detail Arr: {detail}
            <br />
            Input Detail: {inputDetail}
          </h4>
          <span>Details: </span>
          <textarea
            type="text"
            className="content"
            onChange={(e) => {
              setInputDetail(e.target.value);
              // console.log("setInputDetail : ", setInputDetail);
            }}
          />
        </div>
        {modal == true ? (
          <Modal
            modal={modal}
            setModal={setModal}
            board_No={board_No}
            setBoard_No={setBoard_No}
            title={title}
            setTitle={setTitle}
            inputTitle={inputTitle}
            setInputTitle={setInputTitle}
            titleCNT={titleCNT}
            setTitleCNT={setTitleCNT}
            author={author}
            detail={detail}
            setDetail={setDetail}
            inputDetail={inputDetail}
            setInputDetail={setInputDetail}
            date={date}
            setAuthor={setAuthor}
          />
        ) : null}

        <Modify
          modal={modal}
          setModal={setModal}
          board_No={board_No}
          setBoard_No={setBoard_No}
          title={title}
          setTitle={setTitle}
          inputTitle={inputTitle}
          setInputTitle={setInputTitle}
          titleCNT={titleCNT}
          setTitleCNT={setTitleCNT}
          author={author}
          detail={detail}
          setDetail={setDetail}
          inputDetail={inputDetail}
          setInputDetail={setInputDetail}
          date={date}
          setDate={setDate}
          setAuthor={setAuthor}
        />

        {title.map(function (value, index) {
          return (
            <div key={[index]}>
              <h4>
                <span
                  onClick={() => {
                    props.setModal(!modal);
                    props.setTitleCNT(index);
                  }}
                >
                  {title[index]}
                  title
                </span>
                <span
                  onClick={(event) => {
                    event.stopPropagation();
                    let 따봉분리 = [...view];
                    따봉분리[index] = 따봉분리[index] + 1;
                    setView(따봉분리);
                  }}
                >
                  {" "}
                  클릭카운트
                </span>
                {view[index]}

                <button
                  onClick={() => {
                    let sort_delete_Title = [...title];
                    let sort_delete_Author = [...author];
                    let sort_delete_Detail = [...detail];

                    sort_delete_Title.splice(index, 1);
                    setTitle(sort_delete_Title);
                    sort_delete_Author.splice(index, 1);
                    setAuthor(sort_delete_Author);
                    sort_delete_Detail.splice(index, 1);
                    setDetail(sort_delete_Detail);

                    console.log("sort_delete_Title : ", sort_delete_Title);
                    console.log("sort_delete_Author : ", sort_delete_Author);
                    console.log("sort_delete_Detail : ", sort_delete_Detail);
                  }}
                >
                  9.글삭제
                </button>

                <p>날짜: 2월 18일 발행</p>
              </h4>
            </div>
          );
        })}
      </div>
    </div> // App() > return > div.APP END
  ); // App() > return END
} // App() END

// Boardlist() START - 테이블 내용
function Boardlist(props) {
  return props.title.map((value, index) => {
    {
      // console.log("Boardlist 포커스 실행");
    }
    return (
      <tbody className="boardlist" key={[index]}>
        <tr>
          <td>{index + 1}</td>
          <td
            style={{ textAlign: "left" }}
            onClick={(event) => {
              event.stopPropagation();
              let 따봉분리 = [...props.view];
              따봉분리[index] = 따봉분리[index] + 1;
              props.setView(따봉분리);
              props.setModal(!props.modal);
              props.setTitleCNT(index);
              console.log("Boardlist 포커스 실행", index);
            }}
          >
            {props.title[index]}({props.댓글수}){/* {props.title[index]}({props.title.length}) */}
          </td>
          <td>{props.author[index]}</td>
          <td>{props.view[index]}</td>
          <td>{props.date[index]}</td>
          <td>
            <button
              className="btn_list"
              onClick={() => {
                let title_edit2 = [...props.title];
                (title_edit2[index] = "제목변경") + [index];
                props.setTitle(title_edit2);

                let author_edit2 = [...props.author];
                (author_edit2[index] = "작성자변경") + [index];
                props.setTitle(author_edit2);

                let detail_edit2 = [...props.detail];
                (detail_edit2[index] = "디테일변경") + [index];
                props.setTitle(detail_edit2);

                console.log([index + 1] + "---1.수정 Click");
              }}
            >
              1.수정
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
              }}
            >
              2.삭제
            </button>
          </td>
        </tr>
      </tbody>
    );
  });
}
// Boardlist() END - 테이블 내용

// Modal() START - Detail View
function Modal(props) {
  return (
    <div
      className="modal"
      style={{ border: "1px solid green" }}
      onClick={() => {
        // props.setModal(!props.modal);
        // props.setTitleCNT(props.index);
        // props.setBoard_No(props.index);
        // console.log("Modal 포커스 실행");
        // console.log("Detail", Detail);
      }}
    >
      <h4>Modal - Detail View</h4>
      <div>
        <h3>---Modal-Detail View---index : {props.titleCNT}----</h3>
        {props.title.map((value, index) => {
          return (
            <div
              key={[index]}
              onClick={() => {
                props.setModal(!modal);
                props.setBoard_No(index);
                props.setTitle(index);
                props.setAuthor(index);
                props.setDetail(index);

                console.log(
                  props.setBoard_No(index),
                  props.setTitle(index),
                  props.setAuthor(index),
                  props.setDetail(index)
                );
              }}
            ></div>
          );
        })}
        <div style={{ float: "right" }}>
          <button
            style={{ marginRight: "5px" }}
            onClick={() => {
              let sort_delete = [...props.title];
              let sort_delete2 = [...props.author];
              let sort_delete3 = [...props.detail];

              sort_delete.splice(props.index, 1);
              props.setTitle(sort_delete);

              sort_delete2.splice(props.index, 1);
              props.setAuthor(sort_delete2);

              sort_delete3.splice(props.index, 1);
              props.setDetail(sort_delete3);

              console.log("7.글삭제 Click");
            }}
          >
            7.글삭제
          </button>

          <button
            className="btn_list"
            onClick={() => {
              props.setModal(!props.modal);
              console.log("10.닫기 클릭");
            }}
          >
            10.닫기
          </button>
        </div>
        <h5>Title : {props.title[props.titleCNT]}</h5>
        <h5>Date : {props.date[props.board_No]}</h5>
        <h5>Author: {props.author[props.titleCNT]}</h5>
        <h5>Detail: {props.detail[props.titleCNT]}</h5>
        <br />
      </div>
    </div>
  );
}
// Modal() END

// Modify() START
function Modify(props) {
  return (
    <div
      className="modify"
      style={{ border: "1px solid red" }}
      onClick={() => {
        // props.setTitleCNT(props.index);
        // props.setBoard_No(props.index);
        // console.log("Modify 포커스 실행");
        // console.log(props.setTitleCNT);
        // console.log(props.index);
        console.log("{props.title[props.titleCNT]}", props.title[props.titleCNT]);
        console.log("[props.titleCNT]", [props.titleCNT]);
        console.log("props.titleCNT", props.titleCNT);
        console.log("props.title", props.title);
      }}
    >
      <h4>Modify</h4>
      <div>
        <h3>---Modify-Detail View---index : {props.titleCNT}----</h3>
        {/* {props.title.map((value, index) => {})} */}
        <button
          className="btn_list"
          style={{ float: "right" }}
          onClick={() => {
            let title_edit = [...props.title];
            console.log("title_edit[props.inputTitle]", title_edit[props.inputTitle]);
            console.log("여기서 카운트222", props.setTitleCNT(props.titleCNT));

            // console.log("props.titleCNT----------", title_edit[props.titleCNT]);
            title_edit[props.inputTitle] = [props.inputTitle];
            console.log("props.inputTitle : ", props.inputTitle);
            props.setTitle(title_edit);

            // let title_edit = [...props.title];
            // console.log(title_edit[props.index]);
            // title_edit[props.index] = [props.inputTitle];
            // console.log("props.inputTitle", props.inputTitle);
            // props.setTitle(title_edit);

            // let author_edit = [...props.author];
            // // author_edit[props.index] = "작성자변경";
            // author_edit[props.index] = [props.index] + "번째 작성자변경";
            // props.setAuthor(author_edit);

            // let detail_edit = [...props.detail];
            // // detail_edit[props.index] = "내용 변경";
            // detail_edit[props.index] = [props.index] + "번째 내용 변경";
            // props.setDetail(detail_edit);

            console.log("글수정버튼 클릭");
          }}
        >
          8.글수정
        </button>
        <h5>Title : {props.title}</h5>
        <h5>Title[] : {props.title[props.titleCNT]}</h5>
        <h5>inputTitle: {props.inputTitle}</h5>

        <input
          placeholder={props.title[props.titleCNT]}
          className="input_Title"
          type="text"
          onChange={(e) => {
            props.setInputTitle(e.target.value);
            // console.log(props.inputTitle);
          }}
        />

        {/* <h5
          onClick={() => {
            // console.log(props.inputTitle);
            let editTitle = [...props.title];
            // editTitle[props.index] = [props.inputTitle];
            props.setTitle(editTitle);
            console.log(props.inputTitle);
          }}
        >
          inputTitle 수정 :
        </h5> */}
        <br />
        {/* <h5>Date : {props.date[props.board_No]}</h5> */}
        {/* <h5>Date : {props.date[props.inputTitle]}</h5> */}
        <h5>Date : {props.date[props.board_No]}</h5>
      </div>
    </div>
  );
}
// Modify() END

export default App;
