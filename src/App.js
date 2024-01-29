import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // name: "펭수",
      // here: "부산",
      monsters: [
        // {
        //   name: "허수아비",
        //   id: "1001",
        // },
        // {
        //   name: "데빌",
        //   id: "1002",
        // },
        // {
        //   name: "드래곤",
        //   id: "1003",
        // },
        // {
        //   name: "소서러",
        //   id: "1004",
        // },
      ],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState({ originalMonsters: users, monsters: users }, () => {
          console.log(this.state);
        })
      );
  }

  handleSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();

    this.setState({ searchField });
  };

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState({ searchField });
  };

  render() {
    console.log("2");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    // let options = {
    //   title: "Menu",
    //   width: 100,
    //   height: 200,
    // };

    // let { title, width, height } = options;
    // alert(title);
    // alert(width);
    // alert(height);

    return (
      <div className="App">
        <h1 className="app-title">Monster Cards</h1>
        {/*   <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
          <p>
            안녕 {this.state.name}!, 여기는 {this.state.here}!
          </p>

          <button
           onClick={() => {
              this.setState({ name: "길동", here: "서울" });
              // console.log(this.state.name);
            }}
          >
             이름 바꾸기
          </button>
         </header> */}
        <SearchBox
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChangeHandler={onSearchChange}
        />
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.name}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
