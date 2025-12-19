import { Text, View, ScrollView, StyleSheet, Pressable, Linking, SafeAreaView, Platform, StatusBar, Image } from 'react-native';
import React from 'react';
import { images } from "@/constants/images"; // Make sure to import images

export default function Kinnersani() {
    const openMap = () => {
        Linking.openURL("https://www.google.com/maps/search/Kinnerasani+Dam");
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
                
                {/* --- HEADER --- */}
                <Text style={styles.pageTitle}>Kinnerasani</Text>

                {/* --- HERO IMAGE --- */}
                <View style={styles.imageContainer}>
                    <Image source={images.kinersani} style={styles.heroImage} resizeMode="cover" />
                </View>

                {/* --- INTRO --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Nature's Retreat</Text>
                    <Text style={styles.bodyText}>
                        Located about 40km from Bhadrachalam, Kinnerasani offers a peaceful mix of a massive dam reservoir and a lush wildlife sanctuary. It is a perfect picnic spot for nature lovers.
                    </Text>
                </View>

                {/* --- ATTRACTIONS LIST --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Major Attractions</Text>
                    
                    <View style={styles.infoBox}>
                        <Text style={styles.highlightText}>Kinnerasani Dam</Text>
                        <Text style={styles.infoText}>
                            The dam creates a beautiful lake with scenic hill views. The water gates, when open during monsoon, are a spectacular sight.
                        </Text>
                    </View>

                    <View style={styles.infoBox}>
                        <Text style={styles.highlightText}>Deer Park</Text>
                        <Text style={styles.infoText}>
                            A sanctuary home to a large population of spotted deer. They roam freely in the park area and visitors can observe them closely.
                        </Text>
                    </View>

                    <View style={styles.tagContainer}>
                        <View style={styles.tag}><Text style={styles.tagText}>Boating</Text></View>
                        <View style={styles.tag}><Text style={styles.tagText}>Glass House</Text></View>
                        <View style={styles.tag}><Text style={styles.tagText}>Eco Park</Text></View>
                    </View>
                </View>

                {/* --- TIMINGS & ENTRY --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Visitor Info</Text>
                    <View style={styles.table}>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Entry Timings</Text>
                            <Text style={styles.cellValue}>9:00 AM – 6:00 PM</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Boating</Text>
                            <Text style={styles.cellValue}>Available till 5 PM</Text>
                        </View>
                        <View style={[styles.row, { borderBottomWidth: 0 }]}>
                            <Text style={styles.cellLabel}>Entry Fee</Text>
                            <Text style={styles.priceValue}>~₹50 (Adults)</Text>
                        </View>
                    </View>
                </View>

                {/* --- HOW TO REACH --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Getting There</Text>
                    <Text style={[styles.bodyText, { marginBottom: 16 }]}>
                        It is located near **Palvancha**. From Bhadrachalam, you can take a bus or rent a car (approx 1 hour drive).
                    </Text>
                    <Pressable style={styles.mapButton} onPress={openMap}>
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
    // --- IMAGES ---
    imageContainer: {
        marginBottom: 24,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#9d4edd',
        overflow: 'hidden',
        elevation: 5,
        shadowColor: "#d8b4fe",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    heroImage: {
        width: '100%',
        height: 220,
    },
    // --- CARDS ---
    card: {
        backgroundColor: '#120d20',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#9d4edd',
        padding: 16,
        marginBottom: 20,
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
    bodyText: {
        color: "#d1d5db",
        fontSize: 15,
        lineHeight: 22,
    },
    // --- INFO BOX ---
    infoBox: {
        backgroundColor: '#1a1a1a',
        padding: 12,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#9d4edd',
        marginBottom: 12,
    },
    highlightText: {
        color: "#eab308",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
    },
    infoText: {
        color: "#ccc",
        fontSize: 14,
        lineHeight: 20,
    },
    // --- TABLE ---
    table: {
        backgroundColor: '#0f0a1e',
        borderRadius: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#333',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#222',
    },
    cellLabel: { color: '#d1d5db', fontSize: 15 },
    cellValue: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
    priceValue: { color: '#4ade80', fontSize: 15, fontWeight: 'bold' },
    // --- TAGS ---
    tagContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
    tag: {
        backgroundColor: '#3b0764',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#9d4edd',
    },
    tagText: { color: '#e9d5ff', fontSize: 13, fontWeight: '600' },
    // --- BUTTONS ---
    mapButton: {
        backgroundColor: '#1f2937',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#4b5563',
    },
    mapButtonText: {
        color: '#60a5fa',
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});