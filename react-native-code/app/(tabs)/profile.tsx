import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

// --- MOCK DATA ---

const STAYS = [
    { 
        id: '1', 
        name: 'Vashistha Residency', 
        location: 'Near Temple', 
        contact: '099498 13636',
        type: 'Hotel', 
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxI7z__dbXJxrqE3pOs24Tf1OUsWuHFyJlXVHbBFlDW2uJ5fXi_bMDnckWvfx3DcQy5aZsrmCKoTJuXLlxVRawkDD9WQXMZQQ303azTA7QhqccOgacSSuZyyF9aSPcS9BK9gpKU0g=s1360-w1360-h1020-rw',
        priceList: [
            { site: 'Cleartrip.com', price: '₹1,494' },
            { site: 'Agoda', price: '₹1,649' },
            { site: 'Skyscanner', price: '₹1,651' },
            { site: 'Goibibo.com', price: '₹2,158' },
        ]
    },
    { 
        id: '2', 
        name: 'Sri Bhavya Residency', 
        location: 'Near Temple', 
        contact: '094937 47711',
        type: 'Lodge', 
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxI7z__dbXJxrqE3pOs24Tf1OUsWuHFyJlXVHbBFlDW2uJ5fXi_bMDnckWvfx3DcQy5aZsrmCKoTJuXLlxVRawkDD9WQXMZQQ303azTA7QhqccOgacSSuZyyF9aSPcS9BK9gpKU0g=s1360-w1360-h1020-rw', 
        priceList: [
            { site: 'Cleartrip.com', price: '₹1,335' },
            { site: 'MakeMyTrip.com', price: '₹1,374' },
            { site: 'Goibibo.com', price: '₹1,440' },
            { site: 'Agoda', price: '₹1,496' },
        ]
    }, 
    { 
        id: '3', 
        name: 'Haritha Hotel', 
        location: 'Market Road', 
        contact: '098488 23073',
        type: 'Resort', 
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSydPeOHclwk4KCU0QeBAfnSwL1U0IDbleA8hoeoHh2rgjuBvC6gwLkaL8oRSdUAkeFAOgGE-hIEa5b7LqUOx0mYIHZGnEM5_2o4StWJ28Zs-geHzV05AfMJnYy2uoNrOao8BMw=s1360-w1360-h1020-rw',
        priceList: [
            { site: 'Standard Rate', price: '₹1,800' }
        ]
    },
];

const FOOD = [
    { id: '1', name: 'Sahasra Family Restaurant', cuisine: 'South Indian', type: 'Veg/Non-Veg', rating: '4.2', image: 'https://lh3.googleusercontent.com/p/AF1QipNppMu4Lk50Vimh1EdXYgDaRIu4MdwLg6jVjuhn=s1360-w1360-h1020-rw' }, 
    { id: '2', name: 'MNR Family Dhaba', cuisine: 'Andhra Spicy', type: 'Dhaba', rating: '4.0', image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy8K4WBZkH-vx_YF-d8fuapsSDZRPOJzz-aeilb_invgPryW7AVT5_oK8HNTfnVv20a9hpKVo_pvtSA2rtxvxTQeY7M2vq1Z7xbsVT6raFjhwh_mtPx6iUUROS4FWHoX19MvIqs=s1360-w1360-h1020-rw' },
];

const HOSPITALS = [
    { 
        id: '1', 
        name: 'Sri Suraksha Multi Speciality', 
        type: 'General', 
        hours: '24/7', 
        contact: '08743-222222',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNdnOujRggTNgHLtwX2mCSutOogQhdkDWmPRdg=s1360-w1360-h1020-rw' 
    },
    { 
        id: '2', 
        name: 'Govt Area Hospital', 
        type: 'Government', 
        hours: '24/7', 
        contact: '108',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw7TB4MhHzIMENiWb_-aUp53iQrj7lOartONRHudHg9uoVJ8Z8A-x6_LtTKscZCu96aZDAHb-pi1cpBHbGQp_ptAI-IpRBAjBfpfqKDATC1lyV5LKZFutZqhWvI2xZNQkXCEakNGQ=s1360-w1360-h1020-rw' 
    },
];

const Profile = () => {
    const [activeTab, setActiveTab] = useState("stays"); // stays, food, medical
    
    // Updated Tab Button with "Pill" Styling
    const renderTabButton = (title: string, mode: string) => {
        const isActive = activeTab === mode;
        return (
            <TouchableOpacity
                onPress={() => setActiveTab(mode)}
                style={[
                    styles.tabButton, 
                    isActive ? styles.tabButtonActive : styles.tabButtonInactive
                ]}
            >
                <Text style={[
                    styles.tabText, 
                    isActive ? styles.tabTextActive : styles.tabTextInactive
                ]}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                {/* --- HEADER --- */}
                <Text style={styles.pageTitle}>Services</Text>

                {/* --- TAB NAVIGATION --- */}
                <View style={styles.tabContainer}>
                    {renderTabButton("Stays", "stays")}
                    {renderTabButton("Food", "food")}
                    {renderTabButton("Medical", "medical")}
                </View>

                {/* --- 1. STAYS LIST --- */}
                {activeTab === 'stays' && (
                    <FlatList
                        data={STAYS}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.listContent}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                {/* Image Section */}
                                <Image source={{ uri: item.image }} style={styles.cardImage} />
                                
                                {/* Content Section */}
                                <View style={styles.cardContent}>
                                    <View style={styles.cardHeader}>
                                        <Text style={styles.cardTitle}>{item.name}</Text>
                                        <View style={styles.badge}>
                                            <Text style={styles.badgeText}>{item.type}</Text>
                                        </View>
                                    </View>
                                    
                                    <Text style={styles.locationText}>📍 {item.location}</Text>
                                    <Text style={styles.contactText}>📞 {item.contact}</Text>
                                    
                                    {/* Price Comparison Table */}
                                    <View style={styles.priceTable}>
                                        <Text style={styles.priceHeader}>PRICE COMPARISON</Text>
                                        {item.priceList.map((priceOption, index) => (
                                            <View key={index} style={styles.priceRow}>
                                                <Text style={styles.siteName}>{priceOption.site}</Text>
                                                <Text style={styles.priceValue}>{priceOption.price}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                )}

                {/* --- 2. FOOD LIST --- */}
                {activeTab === 'food' && (
                    <FlatList
                        data={FOOD}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.listContent}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Image source={{ uri: item.image }} style={styles.cardImage} />
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>{item.name}</Text>
                                    <Text style={styles.subText}>{item.cuisine}</Text>
                                    <View style={styles.ratingContainer}>
                                        <Text style={styles.ratingText}>★ {item.rating}</Text>
                                        <Text style={styles.typeText}> • {item.type}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                )}

                {/* --- 3. MEDICAL LIST --- */}
                {activeTab === 'medical' && (
                    <FlatList
                        data={HOSPITALS}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.listContent}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Image source={{ uri: item.image }} style={styles.cardImage} />
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>{item.name}</Text>
                                    <Text style={styles.subText}>Type: {item.type}</Text>
                                    <View style={styles.emergencyBadge}>
                                        <Text style={styles.emergencyText}>Emergency: {item.hours}</Text>
                                    </View>
                                    <Text style={styles.contactText}>📞 {item.contact}</Text>
                                </View>
                            </View>
                        )}
                    />
                )}

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // --- LAYOUT ---
    safeArea: {
        flex: 1,
        backgroundColor: "#000", 
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    listContent: {
        paddingBottom: 20,
    },
    pageTitle: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: 'center',
        letterSpacing: 1,
    },

    // --- TABS ---
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        gap: 10,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 25, // Pill shape
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabButtonActive: {
        backgroundColor: '#9d4edd', // Active Purple Fill
        borderColor: '#9d4edd',
    },
    tabButtonInactive: {
        backgroundColor: 'transparent',
        borderColor: '#9d4edd', // Purple Outline
    },
    tabText: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    tabTextActive: {
        color: '#fff',
    },
    tabTextInactive: {
        color: '#d8b4fe', // Light Purple text
    },

    // --- CARDS (Matches your Places Page) ---
    card: {
        backgroundColor: '#120d20', // Very dark purple/black background
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#9d4edd', // The Purple Border from screenshots
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: "#d8b4fe",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardImage: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    cardContent: {
        padding: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    cardTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        flex: 1,
        marginRight: 8,
    },
    subText: {
        color: "#d1d5db",
        fontSize: 14,
        marginBottom: 8,
    },
    badge: {
        backgroundColor: '#3b0764',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#9d4edd',
    },
    badgeText: {
        color: '#d8b4fe',
        fontSize: 10,
        fontWeight: 'bold',
    },
    
    // --- INFO TEXT ---
    locationText: {
        color: "#d1d5db",
        fontSize: 14,
        marginBottom: 4,
    },
    contactText: {
        color: "#fff",
        fontSize: 14,
        marginBottom: 12,
        fontWeight: '500',
    },

    // --- RATINGS & EMERGENCY ---
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        color: "#fbbf24", // Gold/Yellow
        fontWeight: 'bold',
        fontSize: 16,
    },
    typeText: {
        color: "#ccc",
        fontSize: 14,
    },
    emergencyBadge: {
        backgroundColor: 'rgba(239, 68, 68, 0.2)', // Red tint
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 6,
        alignSelf: 'flex-start',
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#ef4444',
    },
    emergencyText: {
        color: '#ef4444', // Red text
        fontWeight: 'bold',
        fontSize: 12,
    },

    // --- PRICE TABLE STYLING ---
    priceTable: {
        backgroundColor: '#0f0a1e', // Slightly darker inner box
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: '#333',
    },
    priceHeader: {
        color: '#9ca3af',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 8,
        letterSpacing: 1,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#222',
    },
    siteName: {
        color: '#d1d5db',
        fontSize: 13,
    },
    priceValue: {
        color: '#4ade80', // Green for price
        fontWeight: 'bold',
        fontSize: 13,
    },
});

export default Profile;