import { Text, View, ScrollView, StyleSheet, Pressable, Linking, SafeAreaView, Platform, StatusBar, Image } from 'react-native';
import React from 'react';
import { images } from "@/constants/images";

export default function Papikondalu() {
    const openMap = () => {
        Linking.openURL("https://www.google.com/maps/search/Papikondalu+Boat+Point");
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
                
                <Text style={styles.pageTitle}>Papikondalu</Text>

                <View style={styles.imageContainer}>
                    <Image source={images.papikondalu} style={styles.heroImage} resizeMode="cover" />
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>The Journey</Text>
                    <Text style={styles.bodyText}>
                        "Papi Hills" are a scenic gorge where the Godavari river narrows and twists through the Eastern Ghats. The boat journey offers breathtaking views of the hills rising steeply from the river.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Boat Ride & Camping</Text>
                    
                    <View style={styles.infoBox}>
                        <Text style={styles.highlightText}>Day Trip</Text>
                        <Text style={styles.infoText}>
                            Starts early morning (around 7:00 AM) and returns by evening. Includes breakfast and lunch on the boat.
                        </Text>
                    </View>

                    <View style={styles.infoBox}>
                        <Text style={styles.highlightText}>Night Camping</Text>
                        <Text style={styles.infoText}>
                            Stay in bamboo huts on the sand islands (Kolluru Island). Includes campfire, dinner, and a night under the stars.
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Packages</Text>
                    <View style={styles.table}>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Day Package</Text>
                            <Text style={styles.priceValue}>~₹1,000 / person</Text>
                        </View>
                        <View style={[styles.row, { borderBottomWidth: 0 }]}>
                            <Text style={styles.cellLabel}>Camping Package</Text>
                            <Text style={styles.priceValue}>~₹2,500 / person</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Location</Text>
                    <Text style={[styles.bodyText, { marginBottom: 16 }]}>
                        Boats start from Bhadrachalam or Rajahmundry.
                    </Text>
                    <Pressable style={styles.mapButton} onPress={openMap}>
                        <Text style={styles.mapButtonText}>📍 OPEN ROUTE MAP</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

// (Use the same `styles` object as Kinnersani above)
const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#000", paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
    container: { flex: 1, padding: 16 },
    pageTitle: { color: "#fff", fontSize: 32, fontWeight: "bold", marginBottom: 20, textAlign: 'center', letterSpacing: 1 },
    imageContainer: { marginBottom: 24, borderRadius: 16, borderWidth: 1, borderColor: '#9d4edd', overflow: 'hidden', elevation: 5 },
    heroImage: { width: '100%', height: 220 },
    card: { backgroundColor: '#120d20', borderRadius: 16, borderWidth: 1, borderColor: '#9d4edd', padding: 16, marginBottom: 20 },
    cardTitle: { color: "#fff", fontSize: 20, fontWeight: "bold", marginBottom: 16, borderBottomWidth: 1, borderBottomColor: '#333', paddingBottom: 8 },
    bodyText: { color: "#d1d5db", fontSize: 15, lineHeight: 22 },
    infoBox: { backgroundColor: '#1a1a1a', padding: 12, borderRadius: 8, borderLeftWidth: 4, borderLeftColor: '#9d4edd', marginBottom: 12 },
    highlightText: { color: "#eab308", fontSize: 16, fontWeight: "bold", marginBottom: 4 },
    infoText: { color: "#ccc", fontSize: 14, lineHeight: 20 },
    table: { backgroundColor: '#0f0a1e', borderRadius: 8, padding: 8, borderWidth: 1, borderColor: '#333' },
    row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#222' },
    cellLabel: { color: '#d1d5db', fontSize: 15 },
    priceValue: { color: '#4ade80', fontSize: 15, fontWeight: 'bold' },
    mapButton: { backgroundColor: '#1f2937', paddingVertical: 14, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: '#4b5563' },
    mapButtonText: { color: '#60a5fa', fontSize: 15, fontWeight: 'bold' },
});