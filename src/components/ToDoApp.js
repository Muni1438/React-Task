import React,{Component} from "react";
import ToDoApp1 from "./ToDoApp1";
import "./ToDoApp.css"
class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }
  componentDidMount(){
      const PastData=window.localStorage.getItem("FormData");
      this.setState({currentItem:JSON.parse(PastData)})
  }
  
  
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
    window.localStorage.setItem("FormData",JSON.stringify(this.state.currentItem))
  };
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Math.random()*100000,
      },
    });
  };
  deleteItem = (key) => {
    const filterItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filterItems,
    });
  };
  updateItem = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };
  render() {
    return (
      <div className="App">
        <header>
          <form onSubmit={this.addItem} className="todo_form">
            <input
              type="text"
              placeholder="Enter"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
              className="todo_input"
            ></input>
            <button className="todo_btn" type="submit">Add</button>
          </form>
          <p>{this.state.items.text}</p>

          <ToDoApp1
            items={this.state.items}
            deleteItem={this.deleteItem}
            updateItem={this.updateItem}
          />
        </header>
      </div>
    );
  }
}

export default ToDoApp;
