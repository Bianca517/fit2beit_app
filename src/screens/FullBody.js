import React from 'react'
import {StyleSheet, Text, View, LogBox} from "react-native";
import {Card, Title} from 'react-native-paper'
import YoutubePlayer from 'react-native-youtube-iframe';
import { useEffect } from "react";
import { db } from "../../firebase";
import { isEmpty } from "lodash";

var OldestVideoIndex3 = 1;
var FullBodyVideoLink1 = "ZeJLIdQenTo";
var FullBodyVideoLink2 = "R6gZoAzAhCg";
var FullBodyVideoLink3 = "gnTzk1yUHB4";

function FullBody() {
    useEffect(() => {
        LogBox.ignoreLogs(["Possible Unhandled Promise Rejection"]);
      }, []);
    let FullBodyVideoLinkFromDB = "";
  
    async function getFullBodyWorkoutLink() {
      const snapshot = await db.collection("Workouts").get();
  
      snapshot.docs.filter(doc => doc.id == "full_body").map(doc => {
        if (!isEmpty(doc)) {
            FullBodyVideoLinkFromDB = doc.data()["workoutLink"].toString();
        }
      });
  
      var links = [FullBodyVideoLink1, FullBodyVideoLink2, FullBodyVideoLink3];
  
      if (links.indexOf(FullBodyVideoLinkFromDB) < 0) {
        if (OldestVideoIndex3 === 1) {
            FullBodyVideoLink1 = FullBodyVideoLinkFromDB;
        } else if (OldestVideoIndex3 === 2) {
            FullBodyVideoLink2 = FullBodyVideoLinkFromDB;
        } else {
            FullBodyVideoLink3 = FullBodyVideoLinkFromDB;
        }
  
        if (OldestVideoIndex3 === 3) {
          OldestVideoIndex3 = 1;
        } else {
          OldestVideoIndex3++;
        }
      }
    }
  
    useEffect(() => {
      getFullBodyWorkoutLink();
    }, []);
  
   return (
       <Card style = {{padding: 17, margin:8, backgroundColor: "#e7e6bb", borderRadius:20,  }}>
       <Card.Content style = {{marginTop:-20}}>
           <Title>Video 1</Title>
           <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={FullBodyVideoLink1}
                />
            </View>
       </Card.Content>
       <Card.Content style = {{marginTop:10}}>
           <Title>Video 2</Title>
           <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={FullBodyVideoLink2}
                />
            </View>
       </Card.Content>
        <Card.Content style = {{marginTop:20}}>
            <Title>Video 3</Title>
            <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={FullBodyVideoLink3}
                />
            </View>
        </Card.Content>
        </Card>
    );
};

export default FullBody;

const styles = StyleSheet.create(
    {
    title:{
            fontSize: 18,
    },
});