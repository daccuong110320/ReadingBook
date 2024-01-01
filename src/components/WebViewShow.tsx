import React, { useRef, useState } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewShow = () => {
  const webViewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(true);

  const url = 'https://www.google.com/';

  const handleBackButton = () => {
    if (webViewRef.current) {
      if (canGoBack) {
        webViewRef.current.goBack();
      } else {
        BackHandler.exitApp(); // Thoát ứng dụng khi không còn trang để quay lại
      }
      return true;
    }
    return false;
  };

  const handleNavigationStateChange = (navState) => {
    setCanGoBack(navState.canGoBack);
  };

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: url }}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

export default WebViewShow;