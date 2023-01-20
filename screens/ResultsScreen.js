import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import SafeViewAndroid from '../components/SafeViewAndroid';

import { AntDesign } from '@expo/vector-icons';
const ResultsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  // console.log(route.params);
  /*  const handlePress = () => {
    navigation.navigate('Quiz');
  }; */
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Your Results</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 14,
          }}
        >
          <Text>Share</Text>
          <AntDesign
            style={{ marginLeft: 4 }}
            name="sharealt"
            size={18}
            color="black"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}
      >
        <Text>Questions Attempted</Text>
        <Text>(6/6)</Text>
      </View>

      <Pressable
        style={{
          backgroundColor: 'white',
          height: 250,
          borderRadius: 7,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: 'magenta',
            fontSize: 15,
            fontWeight: '500',
            textAlign: 'center',
            marginTop: 8,
          }}
        >
          Score Card
        </Text>
        <FlatList
          numColumns={3}
          style={{
            flexGrow: 0,
            height: 800,
          }}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="checkcircle"
                  size={20}
                  color="green"
                />
              ) : (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="closecircle"
                  size={20}
                  color="red"
                />
              )}
            </View>
          )}
        />

        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: 'green',
            padding: 8,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Try Again</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({});
