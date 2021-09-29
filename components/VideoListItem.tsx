import React from 'react'
import { Entypo } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet, FlatList } from "react-native"



const VideoListItem = ({ video }) => {
    const minutes = Math.floor(video.duration / 60);
    const seconds = video.duration - minutes * 60;

    let viewsString = video.views.toString();
    if (video.views > 1000000) {
        viewsString = (video.views / 1000000).toFixed(1) + "m";
    } else if (video.views > 1000) {
        viewsString = (video.views / 1000).toFixed(1) + "k";
    }

    return (
        <View style={styles.videoCard}>
            <View>
                <Image style={styles.thumbnail} source={{ uri: video.thumbnail }} />
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</Text>
                </View>
            </View>
            <View style={styles.titleRow}>
                <Image style={styles.avatar} source={{ uri: video.user.image }} />

                <View style={styles.middleContainer}>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.subtitle}>{video.user.name} {viewsString} {video.createdAt}</Text>
                </View>

                <Entypo name="dots-three-vertical" size={16} color="gray" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    thumbnail: {
        width: "100%",
        aspectRatio: 16 / 9
    },
    timeContainer: {
        backgroundColor: "#00000099",
        height: 25,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        position: "absolute",
        right: 5,
        bottom: 5
    },
    time: {
        color: "white",
        fontWeight: "bold"
    },
    videoCard: {

    },
    titleRow: {
        flexDirection: "row",
        padding: 10,

    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,

    },
    middleContainer: {
        marginHorizontal: 10,
        flex: 1,
    },
    title: {
        color: "white",
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 5,
    },
    subtitle: {
        color: "grey",
        fontSize: 14,
        fontWeight: "500"
    }
});

export default VideoListItem
