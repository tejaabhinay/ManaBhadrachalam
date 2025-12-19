import { Text, View, ScrollView, StyleSheet, Pressable, Linking, SafeAreaView, Platform, StatusBar } from 'react-native';
import React from 'react';

export default function Parnashala() {
    const parnashalaRoute = () => {
        Linking.openURL("https://www.google.com/maps/dir/bhadrachalam/parnashala/@17.870797,80.830714,12.12z/data=!4m13!4m12!1m5!1m1!1s0x3a36a8b3e5f7e94d:0x5500f9bb9038962e!2m2!1d80.8937779!2d17.6704896!1m5!1m1!1s0x3a3153fa455df829:0x341f3a50c3a86b22!2m2!1d80.9056853!2d17.9268828?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D");
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
                
                {/* --- HEADER --- */}
                <Text style={styles.pageTitle}>Parnashala</Text>

                {/* --- TEMPLE TIMINGS --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Temple Timings</Text>
                    <View style={styles.table}>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Morning Session</Text>
                            <Text style={styles.cellValue}>5:00 AM – 1:00 PM</Text>
                        </View>
                        <View style={[styles.row, { borderBottomWidth: 0 }]}>
                            <Text style={styles.cellLabel}>Evening Session</Text>
                            <Text style={styles.cellValue}>3:00 PM – 8:30 PM</Text>
                        </View>
                    </View>
                </View>

                {/* --- PLACES TO VISIT --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Places to Visit Nearby</Text>
                    
                    <View style={styles.infoBox}>
                        <Text style={styles.highlightText}>Seetamma Vari Naracheeralu</Text>
                        <Text style={styles.infoText}>
                            On the route, you will find places where Rama & Sita lived together. This specific spot is where Sita is believed to have asked Rama for the Golden Deer.
                        </Text>
                    </View>

                    <View style={styles.infoBox}>
                        <Text style={styles.highlightText}>Rama's Chitrakuti</Text>
                        <Text style={styles.infoText}>
                            A small model of Rama's hermitage (Chitrakuti) has been remodelled beside the temple for visitors.
                        </Text>
                    </View>

                    <View style={styles.tagContainer}>
                        <View style={styles.tag}><Text style={styles.tagText}>Vennela Waterfalls</Text></View>
                        <View style={styles.tag}><Text style={styles.tagText}>Jabelli Waterfalls</Text></View>
                    </View>
                </View>

                {/* --- BEST TIME TO VISIT --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Best Time to Visit</Text>
                    <Text style={styles.bodyText}>
                        <Text style={{fontWeight:'bold', color: '#fff'}}>November to March</Text> is ideal due to pleasant weather.
                    </Text>
                    <Text style={[styles.bodyText, {marginTop: 8}]}>
                        <Text style={{fontWeight:'bold', color: '#fff'}}>Sri Rama Navami</Text> is also a great time for spiritual visits, though it can be crowded.
                    </Text>
                </View>

                {/* --- HOW TO REACH --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>How To Reach?</Text>
                    <View style={styles.row}>
                        <Text style={styles.icon}></Text>
                        <Text style={styles.bodyText}>Autos are readily available from Bhadrachalam town.</Text>
                    </View>
                    <View style={[styles.row, { borderBottomWidth: 0, marginTop: 10 }]}>
                        <Text style={styles.icon}></Text>
                        <Text style={styles.bodyText}>RTC Buses also operate frequently between Bhadrachalam and Parnashala.</Text>
                    </View>
                </View>

                {/* --- LOCATION --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Location & Route</Text>
                    <Text style={[styles.bodyText, { marginBottom: 16 }]}>
                        Navigation from Bhadrachalam to Parnashala:
                    </Text>
                    <Pressable style={styles.mapButton} onPress={parnashalaRoute}>
                        <Text style={styles.mapButtonText}>📍 OPEN ROUTE MAP</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // --- LAYOUT ---
    safeArea: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    pageTitle: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: 'center',
        letterSpacing: 1,
    },

    // --- CARDS ---
    card: {
        backgroundColor: '#120d20', // Dark purple bg
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#9d4edd', // Purple border
        padding: 16,
        marginBottom: 20,
        shadowColor: "#d8b4fe",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        paddingBottom: 8,
    },
    
    // --- TEXT STYLES ---
    bodyText: {
        color: "#d1d5db",
        fontSize: 15,
        lineHeight: 22,
        flex: 1,
    },
    highlightText: {
        color: "#eab308", // Gold
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
    },
    infoText: {
        color: "#ccc",
        fontSize: 14,
        lineHeight: 20,
    },
    icon: {
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-start',
    },

    // --- TABLES ---
    table: {
        backgroundColor: '#0f0a1e',
        borderRadius: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#333',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#222',
    },
    cellLabel: {
        color: '#d1d5db',
        fontSize: 15,
        flex: 1,
    },
    cellValue: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right',
        flex: 1,
    },

    // --- INFO BOXES ---
    infoBox: {
        backgroundColor: '#1a1a1a',
        padding: 12,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#9d4edd',
        marginBottom: 12,
    },

    // --- TAGS ---
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 8,
    },
    tag: {
        backgroundColor: '#3b0764',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#9d4edd',
    },
    tagText: {
        color: '#e9d5ff',
        fontSize: 13,
        fontWeight: '600',
    },

    // --- BUTTONS ---
    mapButton: {
        backgroundColor: '#1f2937',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#4b5563',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    mapButtonText: {
        color: '#60a5fa', // Blue link color
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});
