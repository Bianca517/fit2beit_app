import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import {Card, Title} from 'react-native-paper'
import YoutubePlayer from 'react-native-youtube-iframe';
import { useEffect } from "react";
import { db } from "../../firebase";
import { isEmpty } from "lodash";

var OldestVideoIndex2 = 1;
var LowerBodyVideoLink1 = "Fu_oExrPX68";
var LowerBodyVideoLink2 = "X0xt0fYTZv8";
var LowerBodyVideoLink3 = "8-PjpUH8TcE";

function LowerBody() {
  let LowerBodyVideoLinkFromDB = "";

  async function getLowerBodyWorkoutLink() {
    const snapshot = await db.collection("Workouts").get();

    snapshot.docs.filter(doc => doc.id == "lower_body").map(doc => {
     //console.warn("filtrate " + doc.id);
      if (!isEmpty(doc)) {
        //console.warn("pe if");
        LowerBodyVideoLinkFromDB = doc.data()["workoutLink"].toString();
        //console.warn("mjmmkjm LowerBodyVideoLinkFromDB " + LowerBodyVideoLinkFromDB);
      }
    });

    var links = [LowerBodyVideoLink1, LowerBodyVideoLink2, LowerBodyVideoLink3];

    if (links.indexOf(LowerBodyVideoLinkFromDB) < 0) {
      if (OldestVideoIndex2 === 1) {
        LowerBodyVideoLink1 = LowerBodyVideoLinkFromDB;
      } else if (OldestVideoIndex2 === 2) {
        LowerBodyVideoLink2 = LowerBodyVideoLinkFromDB;
      } else {
        LowerBodyVideoLink3 = LowerBodyVideoLinkFromDB;
      }

      if (OldestVideoIndex2 === 3) {
        OldestVideoIndex2 = 1;
      } else {
        OldestVideoIndex2++;
      }
    }
  }

  useEffect(() => {
    getLowerBodyWorkoutLink();
  }, []);

   return (
       <Card style = {{padding: 18, margin:8, backgroundColor: "#bbd3e7", borderRadius:20}}>
       <Card.Content style = {{marginTop:-20}}>
           <Title>Video 1</Title>
           <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={LowerBodyVideoLink1}
                />
            </View>
       </Card.Content>
       <Card.Content style = {{marginTop:10}}>
           <Title>Video 2</Title>
           <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={LowerBodyVideoLink2}
                />
            </View>
       </Card.Content>
        <Card.Content style = {{marginTop:20}}>
            <Title>Video 3</Title>
            <View>
                <YoutubePlayer
                    height={180}
                    play={false}
                    videoId={LowerBodyVideoLink3}
                />
            </View>
        </Card.Content>
        </Card>
    );
}

export default LowerBody;

const styles = StyleSheet.create(
    {
    title:{
            fontSize: 18,
    },
});