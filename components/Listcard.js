import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

function Listcard({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  price,
  changeRate,
}) {
  function colorfun() {
    let a = changeRate;
    console.log(a);
    if (changeRate > 0) {
      return "#00E59F";
    }
    return "#FC7682";
  }
  return (
    <TouchableHighlight underlayColor="#f8f4f4" onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={{ uri: image }} />}
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {subTitle && (
            <Text style={styles.subTitle} numberOfLines={1}>
              {subTitle}
            </Text>
          )}
        </View>
        <View style={styles.leftdetailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            ${price}
          </Text>
          {subTitle && (
            <View
              style={{
                backgroundColor: colorfun(),
                borderRadius: 10,
                paddingVertical: 6,
                position: "absolute",
                marginTop: 20,
                right: 0,
                width: 68,
                textAlign: "center",
              }}
            >
              <Text style={styles.rate} numberOfLines={1}>
                {changeRate}%
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "flex-end",
  },
  leftdetailsContainer: {
    alignSelf: "flex-start",
    marginTop: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  rate: {
    fontWeight: "400",
    color: "white",
  },
  subTitle: {
    color: "#6e6969",
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
  },
});

export default Listcard;
