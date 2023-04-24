import React from "react";
import { Channel, ChannelList, useChat, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import BooksIcon from '../assets/books.jpeg';
import LogoutIcon from '../assets/logout.png';
import { useState } from "react";


const cookies = new Cookies();

const SideBar = ({logout}) => (
    <div className="channel-sidebar">
        <div className="channel-sidebar-icon">
            <div className="inner-icon">
                <img src={BooksIcon} alt="Books" width="30" />
            </div>
        </div>
        <div className="channel-sidebar-icon1" onClick={logout}>
            <div className="inner-icon">
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
    <div className="channel-header">
        <p className="channel-header-text">University Page</p>
    </div>
)

const customChannelTeamFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'team')
}

const customChannelMessageFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'messaging')
}

const ChannelListContent = ({ creatingChannel, setCreatingChannel, setCreateType, setEditingChannel, setToggleContainer }) => {
    const { client } = useChatContext();

    const logout = () => {
        cookies.remove('userID');
        cookies.remove('username');
        cookies.remove('firstName');
        cookies.remove('lastName');
        cookies.remove('email');
        cookies.remove('phoneNumber');
        cookies.remove('hashPassword');
        cookies.remove("token");

        window.location.reload();
    }

    const filters = { members: {$in : [client.userID]} }

    return (
        <>
            <SideBar logout={logout}/>
            <div className="channel-wrapper">
                <CompanyHeader/>
                <ChannelSearch/>
                <ChannelList
                    filters={filters} 
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="team"
                            creatingChannel={creatingChannel}
                            setCreatingChannel={setCreatingChannel}
                            setCreateType={setCreateType}
                            setEditingChannel={setEditingChannel}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            setCreatingChannel={setCreatingChannel}
                            setEditingChannel={setEditingChannel}
                            setToggleContainer={setToggleContainer} 
                            type="team"
                        />
                    )}
                />
                <ChannelList
                    filters={filters}
                    channelRenderFilterFn={customChannelMessageFilter}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="messaging"
                            creatingChannel={creatingChannel}
                            setCreatingChannel={setCreatingChannel}
                            setCreateType={setCreateType}
                            setEditingChannel={setEditingChannel}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            setCreatingChannel={setCreatingChannel}
                            setEditingChannel={setEditingChannel}
                            setToggleContainer={setToggleContainer}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    );
}

const ChannelListContainer = ({setCreateType, setCreatingChannel, setEditingChannel}) => {
    const [toggleContainer, setToggleContainer] = useState(false);
    
    return (
        <>
            <div className="channel-list__container">
                <ChannelListContent 
                    setCreatingChannel={setCreatingChannel}
                    setCreateType={setCreateType}
                    setEditingChannel={setEditingChannel}
                />
            </div>

            <div className="channel-list__container-responsive"
                style={{left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff"}}
            >
                <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div>
                <ChannelListContent 
                    setCreatingChannel={setCreatingChannel}
                    setCreateType={setCreateType}
                    setEditingChannel={setEditingChannel}
                    setToggleContainer={setToggleContainer}
                />
            </div>
        </>
    )
}   

export default ChannelListContainer;