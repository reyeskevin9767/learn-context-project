import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelctor from '../components/LangaugeSelector';

// LanguageContext.Provider is another way to pass data through context

// Provider creates a new sparate 'pipe' of information

class App extends React.Component {
  state = { language: 'english' };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelctor />
          <ColorContext.Provider value="primary">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;

// Props System
// Get data from a parent component to a direct child component

// Context System
// Gets data from a parent component to any nested child component

// Use Context instead of Redux
// Need to be able to get data to any component in our hierarchy
// Need to be able to separate our view logic from business logic
// Need to be able to split up business logic
