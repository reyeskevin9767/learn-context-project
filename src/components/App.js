import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// LanguageContext.Provider is another way to pass data through context

// Provider creates a new sparate 'pipe' of information

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChnage = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChnage('english')}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChnage('dutch')}
          />
        </div>
        <ColorContext.Provider value="primary">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;

// Props System
// Get data from a parent component to a direct child component

// Context System
// Gets data from a parent component to any nested child component
