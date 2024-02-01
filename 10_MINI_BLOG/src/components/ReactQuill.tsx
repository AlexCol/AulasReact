import "quill/dist/quill.snow.css";

import Quill from "quill/core";

import Toolbar from "quill/modules/toolbar";
import Snow from "quill/themes/snow";

import Bold from "quill/formats/bold";
import Italic from "quill/formats/italic";
import Header from "quill/formats/header";

function ReactQuill(editor: HTMLElement) {    
    Quill.register({
      "modules/toolbar": Toolbar,
      "themes/snow": Snow,
      "formats/bold": Bold,
      "formats/italic": Italic,
      "formats/header": Header,
    });
    
    return new Quill(editor, {
      theme: "snow",
    });
}
export default ReactQuill