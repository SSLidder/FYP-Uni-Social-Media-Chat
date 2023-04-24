import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

const TeamChannelPreview = ({ channel, type, setCreatingChannel, setEditingChannel, setActiveChannel, setToggleContainer}) => {
    const { channel: activeChannel, client } = useChatContext();
    const ChannelPreview = () => (
        <p className="channel-preview-item">
            # { channel?.data?.name || channel?.data?.id}
        </p>
    )
    const DirectPreview = () => {   
        const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID)

        return(
            <div className="channel-preview-item single"> 
                <Avatar
                image={members[0]?.user?.image}
                name={members[0]?.user?.name}
                size={24}
                />
                <p>{members[0]?.user?.name}</p>
            </div>
        )
    }

    return(
        <div className={
            channel?.id === activeChannel?.id
            ? 'channel-preview-wrapper-select'
            : 'channel-preview-wrapper'
        }
        onClick={() => {
            setCreatingChannel(false)
            setEditingChannel(false)
            setActiveChannel(channel)
            if(setToggleContainer) {
                setToggleContainer((prevState) => !prevState)
            }
        }}
        >
            { type === 'team' ? <ChannelPreview /> : <DirectPreview /> }
        </div>
    )
}

export default TeamChannelPreview;