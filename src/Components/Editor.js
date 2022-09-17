import React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";

export default function Editor(){
    const [selectedTab, setSelectedTab] = React.useState('write')

    console.log(selectedTab)
    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    });

    return(
        <div className="editor">
            <ReactMde
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </div>
    )
}