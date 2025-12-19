import { View, Text, StyleSheet, Image, Pressable, ScrollView, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { images } from "@/constants/images";
import { Link } from "expo-router";

// --- PLACE DATA ---
const INITIAL_PLACES = [
    { id: '1', title: 'Sri Seetha Ramachandraswamy', route: '/(tabs)/places/temple', image: images.temple, type: 'Spiritual', timeNeeded: '2 hours' },
    { id: '2', title: 'Parnashala', route: '/(tabs)/places/parnashala', image: images.parnashala, type: 'Historical', timeNeeded: '3 hours' },
    { id: '3', title: 'Kinnerasani Dam', route: '/(tabs)/places/kinersani', image: images.kinersani, type: 'Nature', timeNeeded: '4 hours' },
    { id: '4', title: 'Bogatha Waterfalls', route: '/(tabs)/places/bogatha', image: images.bogatha, type: 'Adventure', timeNeeded: '5 hours' },
    { id: '5', title: 'Papikondalu', route: '/(tabs)/places/papikondalu', image: images.papikondalu, type: 'Full Day', timeNeeded: '8+ hours' },
];

const Places = () => {
    const [days, setDays] = useState(1); // Default 1 day
    const [selectedPlaces, setSelectedPlaces] = useState(INITIAL_PLACES.map(p => p.id)); // All selected by default
    const [itinerary, setItinerary] = useState<any[]>([]);

    // --- LOGIC: Toggle Selection ---
    const toggleSelection = (id: string) => {
        if (selectedPlaces.includes(id)) {
            setSelectedPlaces(selectedPlaces.filter(pid => pid !== id));
        } else {
            setSelectedPlaces([...selectedPlaces, id]);
        }
    };

    // --- LOGIC: Generate Itinerary ---
    useEffect(() => {
        const activePlaces = INITIAL_PLACES.filter(p => selectedPlaces.includes(p.id));
        let plan: any[] = [];

        if (days === 1) {
            // Day 1: Prioritize Temple & Parnashala
            const day1 = activePlaces.filter(p => p.id === '1' || p.id === '2' || p.id === '3');
            plan.push({ day: 1, items: day1 });
        } else if (days === 2) {
            // Day 1: Temple, Parnashala, Kinnersani
            const day1 = activePlaces.filter(p => p.id === '1' || p.id === '2' || p.id === '3');
            // Day 2: Papikondalu (if selected) OR Bogatha
            const day2 = activePlaces.filter(p => p.id === '5' || p.id === '4');
            plan.push({ day: 1, items: day1 });
            plan.push({ day: 2, items: day2 });
        } else {
            // 3 Days: Spread it out
            const day1 = activePlaces.filter(p => p.id === '1' || p.id === '2');
            const day2 = activePlaces.filter(p => p.id === '5'); // Papikondalu takes full day
            const day3 = activePlaces.filter(p => p.id === '3' || p.id === '4');
            plan.push({ day: 1, items: day1 });
            plan.push({ day: 2, items: day2 });
            plan.push({ day: 3, items: day3 });
        }

        setItinerary(plan);
    }, [days, selectedPlaces]);

    // Calculate how many items are actually visible in the current plan
    const visiblePlacesCount = itinerary.reduce((acc, day) => acc + day.items.length, 0);
    const totalPlacesCount = INITIAL_PLACES.length;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                
                <Text style={styles.pageTitle}>Plan Your Visit</Text>

                {/* --- DAY SELECTOR --- */}
                <View style={styles.controlsContainer}>
                    <Text style={styles.label}>How many days do you have?</Text>
                    <View style={styles.dayTabs}>
                        {[1, 2, 3].map((d) => (
                            <TouchableOpacity 
                                key={d} 
                                onPress={() => setDays(d)}
                                style={[styles.dayButton, days === d && styles.dayButtonActive]}
                            >
                                <Text style={[styles.dayText, days === d && styles.dayTextActive]}>{d} Day{d > 1 ? 's' : ''}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    
                    {/* --- ITINERARY DISPLAY --- */}
                    {itinerary.map((planItem) => (
                        planItem.items.length > 0 && (
                            <View key={planItem.day} style={styles.daySection}>
                                <Text style={styles.dayHeader}>DAY {planItem.day}</Text>
                                {planItem.items.map((place: any) => (
                                    <Link key={place.id} href={place.route as any} asChild>
                                        <Pressable>
                                            <View style={styles.card}>
                                                <Image source={place.image} style={styles.cardImage} />
                                                <View style={styles.cardOverlay}>
                                                    <View>
                                                        <Text style={styles.cardTitle}>{place.title}</Text>
                                                        <Text style={styles.cardSub}>{place.timeNeeded}</Text>
                                                    </View>
                                                    
                                                    {/* CHECKBOX TO DESELECT */}
                                                    <Pressable onPress={(e) => {
                                                        e.stopPropagation(); // Prevent navigating when clicking checkbox
                                                        toggleSelection(place.id);
                                                    }}>
                                                        <View style={styles.checkboxSelected}>
                                                            <Text style={{color:'#000', fontWeight:'bold'}}>✓</Text>
                                                        </View>
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </Pressable>
                                    </Link>
                                ))}
                            </View>
                        )
                    ))}

                    {/* --- DESELECTED / REMOVED ITEMS --- */}
                    {selectedPlaces.length < totalPlacesCount && (
                        <View style={styles.removedSection}>
                            <Text style={styles.removedHeader}>Removed from Plan (Tap to Add)</Text>
                            {INITIAL_PLACES.filter(p => !selectedPlaces.includes(p.id)).map(place => (
                                <TouchableOpacity key={place.id} onPress={() => toggleSelection(place.id)} style={styles.removedCard}>
                                    <Text style={styles.removedText}>+ Add {place.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#000", paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
    container: { flex: 1, backgroundColor: "#000" },
    scrollContent: { paddingHorizontal: 16, paddingBottom: 40 },
    
    pageTitle: { color: "#fff", fontSize: 28, fontWeight: "bold", textAlign: 'center', marginTop: 10, marginBottom: 15 },

    // --- CONTROLS ---
    controlsContainer: { paddingHorizontal: 16, marginBottom: 10 },
    label: { color: "#ccc", marginBottom: 8, textAlign: 'center' },
    dayTabs: { flexDirection: 'row', justifyContent: 'center', gap: 10, marginBottom: 10 },
    dayButton: { paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20, borderWidth: 1, borderColor: '#333', backgroundColor: '#111' },
    dayButtonActive: { backgroundColor: '#9d4edd', borderColor: '#9d4edd' },
    dayText: { color: '#888', fontWeight: 'bold' },
    dayTextActive: { color: '#fff' },

    // --- ITINERARY SECTION ---
    daySection: { marginBottom: 20 },
    dayHeader: { color: '#eab308', fontSize: 18, fontWeight: 'bold', marginBottom: 10, letterSpacing: 1 },

    // --- CARD ---
    card: { 
        height: 140, 
        backgroundColor: '#120d20', 
        borderRadius: 12, 
        marginBottom: 12, 
        overflow: 'hidden', 
        borderWidth: 1, 
        borderColor: '#9d4edd' 
    },
    cardImage: { width: '100%', height: '100%', opacity: 0.6 }, // Dimmed image for text readability
    cardOverlay: { 
        position: 'absolute', 
        bottom: 0, left: 0, right: 0, top: 0,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    cardTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    cardSub: { color: '#ccc', fontSize: 12 },

    // --- CHECKBOX ---
    checkboxSelected: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#4ade80', justifyContent: 'center', alignItems: 'center' },

    // --- MESSAGE BOX (New Style) ---
    messageBox: {
        marginTop: 10,
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#1f1a2e', // Slightly lighter purple/black
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#fbbf24', // Gold border
        alignItems: 'center',
    },
    messageText: {
        color: '#fbbf24', // Gold text
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
    },

    // --- REMOVED SECTION ---
    removedSection: { marginTop: 10, borderTopWidth: 1, borderTopColor: '#333', paddingTop: 20 },
    removedHeader: { color: '#666', marginBottom: 10, textAlign: 'center' },
    removedCard: { padding: 12, backgroundColor: '#111', borderRadius: 8, marginBottom: 8, borderWidth: 1, borderColor: '#333', alignItems: 'center' },
    removedText: { color: '#888' }
});

export default Places;