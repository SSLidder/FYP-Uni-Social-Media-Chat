import React from "react";
import { AddChannel } from "../assets";

const TeamChannelList = ({children, error=false, loading, type}) => {
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
                    {type === 'team' ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
        ) : null
    }

    return(
        <div className="team-channel">
            <div className="team-channel-header">
                <p className="team-channel-header-title">
                    {type === 'team' ? 'Channels' : 'Direct Messages'} loading...
                </p>
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList;