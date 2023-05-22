import SecondApp from "./container/SecondApp";
import { Provider } from "react-redux";
import store from "./store";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, marginTop: 40 }}>
        <SecondApp />

        <StatusBar theme="auto" />
      </SafeAreaView>
    </Provider>
  );
}
