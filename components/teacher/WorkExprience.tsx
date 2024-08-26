import { Course } from "@/generated";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

const WorkExprience = ({ course }: { course: Course | null }) => {
  const [webViewHeight, setWebViewHeight] = useState(0);
  const educationHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-size: 24px; 
          color: #000; 
          margin: 0;
          padding: 0;
        }
      </style>
    </head>
    <body>
      ${course?.tutorId?.tutorProfile?.resume?.workExperiences}
    </body>
    <script>
      // Send the content height to React Native
      window.ReactNativeWebView.postMessage(document.body.scrollHeight);
    </script>
    </html>
  `;

  const handleWebViewMessage = (event: any) => {
    const contentHeight = parseInt(event.nativeEvent.data);
    setWebViewHeight(contentHeight);
  };

  return (
    <View>
      {course?.tutorId.tutorProfile?.resume?.workExperiences ? (
        <WebView
          style={{ height: webViewHeight + 20, width: "100%", marginBottom: 20 }}
          originWhitelist={["*"]}
          source={{ html: educationHTML }}
          javaScriptEnabled={true}
          onMessage={handleWebViewMessage}
        />
      ) : (
        <Text>Одоогоор мэдээлэл байхгүй байна.</Text>
      )}
    </View>
  );
};

export default WorkExprience;
