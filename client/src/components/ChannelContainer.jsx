// import React from "react";
// import { Channel, useChat, useChatContext, MessageSimple } from 'stream-chat-react';
// import { InnerChannel, CreateChannel, EditChannel } from './';

// const ChannelContainer = ({creatingChannel, setCreatingChannel, editingChannel, setEditingChannel, createType}) => {
//     const { channel } = useChatContext(); 

//     if(creatingChannel) {
//         return(
//             <div className="channel-container">
//                 <CreateChannel createType={createType} setCreatingChannel={setCreatingChannel}/>
//             </div>
//         )
//     };

//     if(editingChannel) {
//         return(
//             <EditChannel setEditingChannel={setEditingChannel} />
//         )
//     };

//     const emptyChannel = () => {
//         <div className="channel-empty__container">
//             <p className="channel-empty__first">
//                 This is the beginning of your chat.
//             </p>
//             <p className="channel-second">
//                 Start chatting now!.
//             </p>
//         </div>
//     }
    

//     return (
//         <div className="channel__container">
//             <Channel EmptyStateIndicator={emptyChannel} Message={(messageProps, i) => <MessageSimple key={i} {...messageProps} />} >
//                 <InnerChannel setEditingChannel={setEditingChannel }/>
//             </Channel>
//         </div>
//     );
// }

// export default ChannelContainer;

import React from 'react';
import { Channel, MessageSimple } from 'stream-chat-react';

import { InnerChannel, CreateChannel, EditChannel } from './';

const ChannelContainer = ({creatingChannel, setCreatingChannel, editingChannel, setEditingChannel, createType}) => {
    if(creatingChannel) {
        return (
            <div className="channel__container">
                <CreateChannel createType={createType} setCreatingChannel={setCreatingChannel} />
            </div>
        )
    }

    if(editingChannel) {
        return (
            <div className="channel__container">
                <EditChannel setEditingChannel={setEditingChannel} />
            </div> 
        )
    }

    const EmptyState = () => (
        <div className="channel-empty__container">
            <p className="channel-empty__first">This is the beginning of your chat history.</p>
            <p className="channel-empty__second">Send messages, attachments, links, emojis, and more!</p>
        </div>
    )

    return (
        <div className=" channel__container">
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, i) => <MessageSimple key={i} {...messageProps} />}
            >
                <InnerChannel setEditingChannel={setEditingChannel} />
            </Channel>
        </div>
    );
}

export default ChannelContainer;