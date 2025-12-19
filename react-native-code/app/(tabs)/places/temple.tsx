import { Text, View, ScrollView, Linking, Image, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import React from 'react';
import { images } from "@/constants/images";

const Temple = () => {
    const templeMap = () => {
        Linking.openURL("https://www.google.com/maps/place/Sree+Seetha+Ramachandraswamy+Vari+Devasthanam+-+Bhadrachalam/@17.671021,80.9369554,20z/data=!4m10!1m2!2m1!1srama+temple+bhadrachalam!3m6!1s0x3a36a8c95c6c2ff3:0xcca66e387ceee206!8m2!3d17.6671959!4d80.8820889!15sChhyYW1hIHRlbXBsZSBiaGFkcmFjaGFsYW1aGiIYcmFtYSB0ZW1wbGUgYmhhZHJhY2hhbGFtkgEMaGluZHVfdGVtcGxlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJ1WjFsWU5YbDNSUkFC4AEA-gEFCK8CEEY!16s%2Fm%2F04csk1m?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D");
    };
    
    const openWebsite = () => {
        Linking.openURL("https://bhadradritemple.telangana.gov.in/");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
                
                {/* --- HEADER --- */}
                <Text style={styles.pageTitle}>Sree Seetha Ramachandraswamy Vari Devasthanam</Text>
                
                {/* --- TEMPLE IMAGE --- */}
                <View style={styles.imageContainer}>
                    <Image source={images.temple} style={styles.templeImage} />
                </View>

                {/* --- WEBSITE BUTTON --- */}
                <TouchableOpacity style={styles.actionButton} onPress={openWebsite}>
                    <Text style={styles.actionButtonText}>VISIT OFFICIAL WEBSITE</Text>
                </TouchableOpacity>

                {/* --- TIMINGS CARD --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Temple Timings</Text>
                    <View style={styles.table}>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Suprabhata Seva</Text>
                            <Text style={styles.cellValue}>4:30 AM – 5:00 AM</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Morning Darshan</Text>
                            <Text style={styles.cellValue}>5:00 AM – 12:00 PM</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Temple Break</Text>
                            <Text style={styles.cellValue}>12:00 PM – 3:00 PM</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Evening Darshan</Text>
                            <Text style={styles.cellValue}>3:00 PM – 6:00 PM</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Night Darshan</Text>
                            <Text style={styles.cellValue}>6:30 PM – 9:00 PM</Text>
                        </View>
                        <View style={[styles.row, { borderBottomWidth: 0 }]}>
                            <Text style={styles.cellLabel}>Temple Closes</Text>
                            <Text style={[styles.cellValue, { color: '#ef4444' }]}>Around 9:30 PM</Text>
                        </View>
                    </View>
                </View>

                {/* --- PRASADAM PRICES --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Prasadam Prices (200g)</Text>
                    <View style={styles.table}>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Laddu</Text>
                            <Text style={styles.priceValue}>₹15</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Pulihora</Text>
                            <Text style={styles.priceValue}>₹15</Text>
                        </View>
                        <View style={[styles.row, { borderBottomWidth: 0 }]}>
                            <Text style={styles.cellLabel}>Chakrapongal</Text>
                            <Text style={styles.priceValue}>₹15</Text>
                        </View>
                    </View>
                </View>

                {/* --- PEAK TIME --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Peak Temple Times</Text>
                    <View style={styles.tagContainer}>
                        <View style={styles.tag}><Text style={styles.tagText}>Sri Rama Navami</Text></View>
                        <View style={styles.tag}><Text style={styles.tagText}>Sankranti</Text></View>
                        <View style={styles.tag}><Text style={styles.tagText}>Dussehra</Text></View>
                    </View>
                </View>

                {/* --- LOCATION --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Location</Text>
                    <TouchableOpacity style={styles.mapButton} onPress={templeMap}>
                        <Text style={styles.mapButtonText}>📍 OPEN IN GOOGLE MAPS</Text>
                    </TouchableOpacity>
                </View>

                {/* --- NEARBY STAYS --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Accommodation</Text>
                    
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}>• Day is considered as 23 hours</Text>
                        <Text style={styles.infoText}>• Check-in: 6:00 AM onwards</Text>
                        <Text style={styles.infoText}>• Check-out: Before 5:00 AM</Text>
                    </View>

                    <Text style={styles.subHeader}>AC Rooms (Inc. Taxes)</Text>
                    <View style={styles.table}>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Sowmithri Sadanam</Text>
                            <Text style={styles.priceValue}>₹1,365</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Sri Rama Nilayam</Text>
                            <Text style={styles.priceValue}>₹1,050</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Maruti Sadanam</Text>
                            <Text style={styles.priceValue}>₹1,365</Text>
                        </View>
                        <View style={[styles.row, { borderBottomWidth: 0 }]}>
                            <Text style={styles.cellLabel}>Janaki Sadanam</Text>
                            <Text style={styles.priceValue}>₹1,365</Text>
                        </View>
                    </View>

                    <Text style={[styles.subHeader, { marginTop: 15 }]}>Non-AC Rooms</Text>
                    <View style={styles.table}>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Sri Rama Sadanam</Text>
                            <Text style={styles.priceValue}>₹400</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.cellLabel}>Sri Rama Nilayam</Text>
                            <Text style={styles.priceValue}>₹400</Text>
                        </View>
                        <View style={[styles.row, { borderBottomWidth: 0 }]}>
                            <Text style={styles.cellLabel}>Sowmithri Sadanam</Text>
                            <Text style={styles.priceValue}>₹600</Text>
                        </View>
                    </View>

                    <View style={[styles.infoBox, { marginTop: 15, borderColor: '#fbbf24' }]}>
                         <Text style={{color: '#fbbf24', textAlign: 'center'}}>Cottages also available at ₹2000</Text>
                    </View>
                </View>

                {/* --- DRESS CODE --- */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Dress Code</Text>
                    <View style={styles.row}>
                        <Text style={[styles.cellLabel, {color: '#9d4edd', fontWeight: 'bold'}]}>Men:</Text>
                        <Text style={styles.cellValue}>Dhoti & Shirt (Inner Temple) / Shirt & Pants</Text>
                    </View>
                    <View style={[styles.row, { borderBottomWidth: 0, marginTop: 5 }]}>
                        <Text style={[styles.cellLabel, {color: '#9d4edd', fontWeight: 'bold'}]}>Women:</Text>
                        <Text style={styles.cellValue}>Saree (Inner Temple) / Punjabi Dress</Text>
                    </View>
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
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: 'center',
        lineHeight: 34,
    },

    // --- IMAGES ---
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    templeImage: {
        width: '100%',
        height: 220,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#333',
    },

    // --- BUTTONS ---
    actionButton: {
        backgroundColor: '#9d4edd',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: "#9d4edd",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    mapButton: {
        backgroundColor: '#1f2937',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#4b5563',
    },
    mapButtonText: {
        color: '#60a5fa', // Blue link color
        fontSize: 14,
        fontWeight: 'bold',
    },

    // --- CARDS ---
    card: {
        backgroundColor: '#120d20',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#9d4edd',
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
    subHeader: {
        color: "#d8b4fe", // Light Purple
        fontSize: 16,
        fontWeight: "600",
        marginTop: 10,
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },

    // --- TABLES ---
    table: {
        backgroundColor: '#0f0a1e',
        borderRadius: 8,
        padding: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#222',
    },
    cellLabel: {
        color: '#d1d5db',
        fontSize: 14,
        flex: 1,
    },
    cellValue: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'right',
        flex: 1,
    },
    priceValue: {
        color: '#4ade80', // Green
        fontSize: 14,
        fontWeight: 'bold',
    },

    // --- TAGS ---
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
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

    // --- INFO BOXES ---
    infoBox: {
        backgroundColor: '#1a1a1a',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 10,
    },
    infoText: {
        color: '#9ca3af',
        fontSize: 13,
        marginBottom: 4,
        lineHeight: 18,
    },
});

export default Temple;