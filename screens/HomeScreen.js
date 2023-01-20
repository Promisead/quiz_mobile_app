import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 15 }}>
      <Image
        style={{ height: 370, width: '100%', resizeMode: 'contain' }}
        source={{
          uri: 'https://previews.123rf.com/images/maxborovkov/maxborovkov1808/maxborovkov180800303/111279969-quiz-time-sign-colorful-brush-design-vector-background-.jpg',
        }}
      />

      <View style={{ padding: 10 }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'magenta',
            fontSize: 20,
            fontWeight: '600',
          }}
        >
          QUIZ RULES
        </Text>

        <View
          style={{
            padding: 10,
            backgroundColor: 'skyblue',
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}
          >
            <Text style={{ color: 'white' }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: '#722F37',
                fontSize: 15,
                fontWeight: '500',
              }}
            >
              For each correct answer you get 5 points
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}
          >
            <Text style={{ color: 'white' }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: '#722F37',
                fontSize: 15,
                fontWeight: '500',
              }}
            >
              There is no negative marking for wrong answer
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}
          >
            <Text style={{ color: 'white' }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: '#722F37',
                fontSize: 15,
                fontWeight: '500',
              }}
            >
              Each question has a time limit of 15 sec
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}
          >
            <Text style={{ color: 'white' }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: '#722F37',
                fontSize: 15,
                fontWeight: '500',
              }}
            >
              You should answer all the questions compulsarily
            </Text>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate('Quiz')}
        style={{
          backgroundColor: 'magenta',
          padding: 14,
          width: 120,
          borderRadius: 25,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 30,
        }}
      >
        <Text
          style={{ color: 'white', fontWeight: '600', textAlign: 'center' }}
        >
          Start Quiz
        </Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
