import SecondApp from "./container/SecondApp";
import { Provider } from "react-redux";
import store from "./store";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <SecondApp />
      </SafeAreaView>
    </Provider>
  );
}
