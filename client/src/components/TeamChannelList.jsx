import React from "react";
import { AddChannel } from "../assets/AddChannel";

const TeamChannelList = ({children, error=false, loading, type, creatingChannel, setCreatingChannel, setCreateType, setEditingChannel, setToggleContainer}) => {
    if(error) {
        return type === 'team' ? (
            <div className="team-channel">
                <p className="team-channel-message">
                    Connection error, please wait a moment and try again.
                </p>
            </div>
        ) : null
    }
    if(loading) {
        return type === 'team' ? (
            <div className="team-channel">
                <p className="team-channel-message loading">
                    {type === 'team' ? 'Channels' : 'Messages'} 
                </p>
            </div>
        ) : null
    }

    return(
        <div className="team-channel">
            <div className="team-channel-header">
                <p className="team-channel-header-title">
                    {type === 'team' ? 'Channels' : 'Direct Messages'} 
                </p>
                <AddChannel
                    creatingChannel={creatingChannel}
                    setCreatingChannel={setCreatingChannel}
                    setCreateType={setCreateType}
                    setEditingChannel={setEditingChannel}
                    type={type === 'team' ? 'team' : 'messaging'}
                    setToggleContainer={setToggleContainer}
                />
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList;