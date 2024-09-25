import { ScrollView, View, TouchableOpacity, Image, Text } from "react-native";
import userData from './data.json';
import styles from './Styles';

const UserList = ({ navigation }) => {
  return (
    <ScrollView>
      {userData.map((user) => {
        return (
          <View style={styles.userList} key={user.name}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Profile", { user })}
            >
              <Image
                source={{ 
                  uri: user.photo_url 
                }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.boldText}>{user.name}</Text>
                <Text>{user.email}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default UserList;