import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// Function to generate a random ID of a given length
const randomID = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const ZegoLive = () => {
  const { id } = useParams();
  const roomID = id || new URLSearchParams(window.location.search).get("roomID") || randomID(5);
  const meetingRef = useRef(null); // Use ref to get the div for the video conference

  useEffect(() => {
    const myMeeting = async (element) => {
      // Generate Kit Token
      const appID = 506903929;
      const serverSecret = "50e9b7060680abe8feb283d4628aff2c";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "Talha"
      );

      // Create instance object from Kit Token
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // Start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Copy link",
            url: `${window.location.origin}/room/${roomID}`, // Use current domain
          },
        ],
      });
    };

    // Initialize the meeting when the component is mounted
    if (meetingRef.current) {
      myMeeting(meetingRef.current);
    }
  }, [roomID]);

  return (
    <div>
      <h1>Video Conference</h1>
      {/* Div that will contain the video conference */}
      <div ref={meetingRef} style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
};

export default ZegoLive;