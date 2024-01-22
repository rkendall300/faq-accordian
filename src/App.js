import './App.css';
import starIcon from './assets/images/icon-star.svg';
import plusIcon from './assets/images/icon-plus.svg';
import minusIcon from './assets/images/icon-minus.svg';

function App() {

  const showAnswer = (ans) => {
    // Show/hide the answer and swap the icons
    let ansText = document.getElementById(ans.concat("-answer"));
    let plusIcon = document.getElementById(ans.concat("-plus"));
    let minusIcon = document.getElementById(ans.concat("-minus"));
    if (ansText.style.display !== "block") {
      ansText.style.display = "block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      ansText.style.display = "none";
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    }
  }


  return (
    <main>
      <div id="backdrop">
        <div id="card">
          <div id="title-section">
            <img src={starIcon} alt="star" id="star-icon"></img>
            <h1 id="title">FAQs</h1>
          </div>
          <div id="accordian">
            <ul className="question-list">
              <li id="first" onClick={() => showAnswer("first")}>
                <div className="inline">
                  <h2 className="question" id="first-question">What is Frontend Mentor, and how will it help me?</h2>
                  <img src={plusIcon} alt="plus" id="first-plus" className="plus end"></img>
                  <img src={minusIcon} alt="minus" id="first-minus" className="minus end"></img>
                </div>
                <p className="answer" id="first-answer">Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>
              </li>
              <li id="second" onClick={() => showAnswer("second")}>
                <div className="inline">
                  <h2 className="question" id="second-question">Is Frontend Mentor free?</h2>
                  <img src={plusIcon} alt="plus" id="second-plus" className="plus end"></img>
                  <img src={minusIcon} alt="minus" id="second-minus" className="minus end"></img>
                </div>
                <p className="answer" id="second-answer">Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</p>
              </li>
              <li id="third" onClick={() => showAnswer("third")}>
                <div className="inline">
                  <h2 className="question" id="third-question">Can I use Frontend Mentor projects in my portfolio?</h2>
                  <img src={plusIcon} alt="plus" id="third-plus" className="plus end"></img>
                  <img src={minusIcon} alt="minus" id="third-minus" className="minus end"></img>
                </div>
                <p className="answer" id="third-answer">Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>
              </li>
              <li id="fourth" onClick={() => showAnswer("fourth")}>
                <div className="inline">
                  <h2 className="question" id="fourth-question">How can I get help if I'm stuck on a challenge?</h2>
                  <img src={plusIcon} alt="plus" id="fourth-plus" className="plus end"></img>
                  <img src={minusIcon} alt="minus" id="fourth-minus" className="minus end"></img>
                </div>
                <p className="answer" id="fourth-answer">The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

/*

<div id="second">
              <div className="inline">
                <h2 className="question">Is Frontend Mentor free?</h2>
                <img src={plusIcon} alt="plus" className="plus-icon"></img>
                <img src={minusIcon} alt="minus" className="minus-icon"></img>
              </div>
              <p className="answer">Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</p>
            </div>
            <div id="third">
              <div className="inline">
                <h2 className="question">Can I use Frontend Mentor projects in my portfolio?</h2>
                <img src={plusIcon} alt="plus" className="plus-icon"></img>
                <img src={minusIcon} alt="minus" className="minus-icon"></img>
              </div>
              <p className="answer">Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>
            </div>
            <div id="fourth">
              <div className="inline">
                <h2 className="question">How can I get help if I'm stuck on a Frontend Mentor challenge?</h2>
                <img src={plusIcon} alt="plus" className="plus-icon"></img>
                <img src={minusIcon} alt="minus" className="minus-icon"></img>
              </div>
              <p className="answer">The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.</p>
            </div>

<li onClick={() => {showAnswer("first")}}>
                    <div className="inline">
                      <p className="question" id="first-question">What is Frontend Mentor, and how will it help me?</p>
                      <svg id="first-plus" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>
                      <svg id="first-minus" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>
                    </div>
                    <p className="answer" id="first-answer">Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and Javascript. It's suitable for all levels and ideal for portfolio building.</p>
                  </li>

<img src={plusIcon} alt="plus" className="plus-icon"></img>
                <img src={minusIcon} alt="minus" className="minus-icon"></img>

<button className="extend" id="1">
              <p>What is Frontend Mentor, and how will it help me?</p>
              <img src={toggleFirst ? minusIcon : plusIcon} className="q-icon" alt="plus/minus"></img>
            </button>




*/