import * as React from "react";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native";
import RecipeDetails from "./RecipeDetails";

const UseModal = (props) => {
  const [visible, setVisible] = React.useState(true);

  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20, height: 200 };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
         {props.children}
        </Modal>
      </Portal>
    </Provider>
  );
};

export default UseModal;
