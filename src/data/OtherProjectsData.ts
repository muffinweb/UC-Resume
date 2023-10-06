import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("chat-ai", "Chat AI", "img/projects/chat-ai.mov", `
    <div class="paragraph">
      <strong>Chat AI</strong> is prompt tool that connects you ChatGPT without any login process. Behind the scene proxy API empowers tool with Next.js!
    </div>
        
        <div class="paragraph center">
            <video style="width:80%" src="img/projects/chat-ai.mov" autoplay="" loop="" /> 
        </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>Proxy API</li>
            <li>ChatGPT Powered</li>
            <li>Input Validations</li>
            <li>UI Animations</li>
            </ul>
        </div>

        <div class="paragraph">
            <div class="notice">
            Source code is available on <a href="https://github.com/muffinweb/ChatAI" target="_blank">GitHub</a>.
            </div>
        </div>
    `, "#972fdac9", false, true, true),
    new ProjectData("xmlinker", "XMLinker", "img/projects/xmllinker.jpg", `
            <div class="paragraph">
                <strong>XMLinker</strong> is a useful package to create Invoice Previews from UBL Standart XML files. It combines XSLT binary in XML and XML Data itself and produce HTML preview.
            </div>
            
            <div class="paragraph center">
                <img src="img/projects/xmllinker.jpg" style="width: 50%">
            </div>

            <div class="paragraph">
              Main features :
              <ul>
              <li>PHP Package</li>
              <li>Simple, Resuable</li>
              </ul>
          </div>

            <div class="paragraph">
                <div class="notice">
                Source code is available on <a href="https://github.com/muffinweb/XMLinker" target="_blank">GitHub</a>.
                </div>
            </div>`, "#1ca1e2"),
    new ProjectData("realtime-chat", "Realtime Chat", "img/projects/RealTimeChat.mov", `
     <div class="paragraph">
            <strong>Realtime Chat</strong> has technologies like Node.js, Socket.IO, Express, Docker. A simple real-time chat app as it can.
    </div>
    
    <div class="paragraph center">
            <video style="width: 80%" src="img/projects/RealTimeChat.mov" autoplay="" loop="" />
    </div>

            <div class="paragraph">
        Main features :
        <ul>
            <li>Realtime Actions</li>
            <li>User Joined, Typing alerts</li>
            <li>Docker Containerization</li>
        </ul>
    </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/muffinweb/Realtime-Chat-Dockerized" target="_blank">GitHub</a>.
              </div>
            </div>`, '#912929b5', false, true, true),
    new ProjectData("langValuator", "LangValuator", "img/projects/langvaluator.gif", `
            <div class="paragraph">
                <strong>LangValuator</strong> is language config convertor tool. It recursively translates all values in array/object and translate from X language to Y language.
            </div>

            <div class="paragraph center">
              <img src="/img/projects/langvaluator.gif" style="width: 80%" />
          </div>

          <div class="paragraph">
          Main features :
          <ul>
          <li>Google Translate Service</li>
          <li>Recursive Functionality</li>
          </ul>
      </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/muffinweb/LangValuator" target="_blank">GitHub</a>.
              </div>
            </div>`, "#1f1f1f7d", false, false, false),
];