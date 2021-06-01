
export{appHeader,singleChat}


function appHeader (){
    let headerContainer = document.getElementById('headerContainer');
    let header = `
    <header-top>
                <logo>
                    <h2>WhatsApp</h2>
                </logo>

                <div class="sideMenu">
                    <span>
                       <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                    <div id="menu">
                        <div></div>
                        <div></div>
                        <div></div>
                        
                    </div>
                </div>
            </header-top>

            <header-bottom>

                <div class="chatBtn">
                    <span>CHATS</span>
                    <span>11</span>
                </div>

                <div class="STATUSBtn">
                    <span>STATUS</span>
                </div>
                <div class="CALLBtn">
                    <span>CALLS</span>
                </div>

            </header-bottom>
    
    `;

    return headerContainer.innerHTML = header;
}


/* single chat display */


function singleChat(name,photo,preview){
    let singleChatContainer = document.getElementById("chatContainer");

    let singleChat = `
    <div class="single-chat">
                <div class="profile-Icon">
                    <img src="./assets/images/${photo}" alt="profile Picture">
                </div>

                <div class="chat-notification">
                    <div class="chat-name">
                        ${name}
                    </div>

                    <div class="chat-messagePreview">
                        ${preview}
                    </div>
                </div>

                <div class="datePreview">
                    <span>Yesterday</span>
                </div>
                
            </div>
    `;

    return singleChatContainer.innerHTML = singleChat;
}

