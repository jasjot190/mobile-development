import MainLayout from "../layouts/MainLayout";
import { Button } from "react-native-web";
function HomeScreen({ navigation }) {
  // ...

  return (
    <Button title="Go to About" onPress={() => navigation.navigate("About")} />
  );
}
