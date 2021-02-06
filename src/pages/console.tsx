import { Terminal } from 'rendition';
import {ITerminalOptions as ConsoleOption, Terminal as ConsoleControl} from "xterm";

const configTerminal: ConsoleOption = {
    fontWeight: "200",
    bellStyle: "sound",
    cursorStyle: "block",
    rows: 20,
    rendererType: 'canvas'
};

export default function ConsolePage(){
    return <Terminal persistent config={configTerminal} />
}