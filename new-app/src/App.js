import './App.css';
import { Component } from 'react';
import AddForm from './components/AddForm/AddForm';
import NotesList from './components/NotesList/NotesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:7777/notes';

    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData = async () => {
    const data = await fetch(this.url).then((response) => response.json());

    this.setState((prevState) => ({ ...prevState, notes: data }));
  };

  addNote = (note) => {
    fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => this.loadData());
  };

  deleteNote = (id) => {
    fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    }).then(() => this.loadData());
  };

  render() {
    return (
        <div className='p-5 mx-auto' style={{ width: '1200px' }}>
          <div className='d-flex mb-5'>
            <div className='me-3 fs-2'>Notes</div>
            <button className='btn btn-success fs-4' onClick={this.loadData}>
              {'\u27F3'}
            </button>
          </div>
          <NotesList notes={this.state.notes} deleteNote={this.deleteNote} />
          <AddForm addNote={this.addNote} />
        </div>
    );
  }
}

export default App;