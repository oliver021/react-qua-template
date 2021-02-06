import {
    Tabs,
    Tab,
    Txt
} from "rendition";

export default function ConsolePage(){
    return  <Tabs>
      <Tab title="Info">
        <Txt mt={3}>
          Here is tab #1
        </Txt>
      </Tab>
      <Tab title="Alert">
        <Txt mt={3}>
          Here is tab #2
        </Txt>
      </Tab>
      <Tab title="Problems">
        <Txt mt={3}>
          Here is tab #3
        </Txt>
      </Tab>
    </Tabs>
}