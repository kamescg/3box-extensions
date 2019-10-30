import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// The editor core
import Editor, { Editable, createEmptyState } from "@react-page/core";
import "@react-page/core/lib/index.css"; // we also want to load the stylesheets

// Require our ui components (optional). You can implement and use your own ui too!
import EditorUI from "@react-page/ui";
import "@react-page/ui/lib/index.css";

// Load some exemplary plugins:
import slate from "@react-page/plugins-slate"; // The rich text area plugin
import "@react-page/plugins-slate/lib/index.css"; // Stylesheets for the rich text area plugin
import background from "@react-page/plugins-background"; // A plugin for background images
import "@react-page/plugins-background/lib/index.css"; // Stylesheets for  background layout plugin

// import login from './plugins/Login/index.tsx'

// Define which plugins we want to use. We only have slate and background available, so load those.
const plugins = {
  content: [slate()], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
  layout: [
    background({ defaultPlugin: slate() }),
  ] // Define plugins for layout cells
};

// Creates an empty editable
const content = createEmptyState();

// Instantiate the editor
const editor = new Editor({
  plugins,
  // pass the content state - you can add multiple editables here
  editables: [content]
});

class App extends Component {
  render() {
    return (
      <div>
        {/* Content area */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 100 }} >
          <Editable editor={editor} id={content.id} />
        </div>

        {/*  Default user interface  */}
        <EditorUI editor={editor} />
      </div>
    );
  }
}

export default App;
