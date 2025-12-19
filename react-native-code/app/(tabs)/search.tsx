import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ActivityIndicator, SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native';
import getBuses from "@/services/busApi";
import getTrains from '@/services/trainApi';

// --- TYPES ---
type Train = {
    _id: string,
    from: string,
    to: string,
    trainNumber: number,
    trainName: string,
    departureTime: string,
    arrivalTime: string,
    daysOfOperation: [string],
    classes: [string]
}

type Bus = {
    _id: string,
    fromCity: string,
    toCity: string,
    operator: string,
    serviceNumber: number,
    busType: string,
    departureTime: string,
    arrivalTime: string,
    daysOfOperation?: string[]
}

const Search = () => {
    const [searchMode, setSearchMode] = useState("bus");
    const [loading, setLoading] = useState(false);

    // Train State
    const [trainFromCity, setTrainFromCity] = useState('');
    const [trainToCity, setTrainToCity] = useState('');
    const [trains, setTrains] = useState<Train[]>([]);

    // Bus State
    const [busFromCity, setBusFromCity] = useState('');
    const [buses, setBuses] = useState<Bus[]>([]);

    const searchTrains = async () => {
        setLoading(true);
        try {
            const result = await getTrains(trainFromCity, trainToCity);
            setTrains(result);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }

    const searchBuses = async () => {
        setLoading(true);
        try {
            const result = await getBuses(busFromCity, "Bhadrachalam");
            setBuses(result);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }

    // Custom Tab Button Component
    const renderTabButton = (title: string, mode: string) => {
        const isActive = searchMode === mode;
        return (
            <TouchableOpacity
                onPress={() => setSearchMode(mode)}
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

                <Text style={styles.pageTitle}>Search Travel</Text>

                {/* --- TABS --- */}
                <View style={styles.tabContainer}>
                    {renderTabButton("Bus", "bus")}
                    {renderTabButton("Train", "train")}
                </View>

                {searchMode === 'bus' ? (
                    // --- BUS SEARCH VIEW ---
                    <>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>From City</Text>
                            <TextInput
                                value={busFromCity}
                                onChangeText={setBusFromCity}
                                placeholder="e.g Hyderabad"
                                placeholderTextColor="#6b7280"
                                style={styles.input}
                            />

                            <Text style={styles.label}>To City</Text>
                            <TextInput
                                value="Bhadrachalam"
                                editable={false}
                                style={[styles.input, styles.disabledInput]}
                            />

                            <TouchableOpacity style={styles.searchButton} onPress={searchBuses}>
                                <Text style={styles.searchButtonText}>FIND BUSES</Text>
                            </TouchableOpacity>
                        </View>

                        {loading && <ActivityIndicator size="large" color="#9d4edd" style={{ marginTop: 20 }} />}

                        <FlatList
                            contentContainerStyle={styles.listContent}
                            data={buses}
                            keyExtractor={(bus) => bus._id}
                            ListEmptyComponent={
                                !loading ? (
                                    <Text style={styles.emptyText}>No buses found</Text>
                                ) : null
                            }
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    <View style={styles.cardHeader}>
                                        <Text style={styles.cardTitle}>{item.operator}</Text>
                                        <View style={styles.badge}>
                                            <Text style={styles.badgeText}>{item.serviceNumber}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.subText}>{item.busType}</Text>
                                    <View style={styles.timeContainer}>
                                        <Text style={styles.timeText}>{item.departureTime}</Text>
                                        <Text style={styles.arrow}> ➜ </Text>
                                        <Text style={styles.timeText}>{item.arrivalTime}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </>

                ) : (

                    // --- TRAIN SEARCH VIEW ---
                    <>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>From City</Text>
                            <TextInput
                                placeholder="e.g Hyderabad"
                                value={trainFromCity}
                                onChangeText={setTrainFromCity}
                                placeholderTextColor="#6b7280"
                                style={styles.input}
                            />

                            <Text style={styles.label}>To City</Text>
                            <TextInput
                                placeholder="e.g Khammam"
                                value={trainToCity}
                                onChangeText={setTrainToCity}
                                placeholderTextColor="#6b7280"
                                style={styles.input}
                            />

                            <TouchableOpacity style={styles.searchButton} onPress={searchTrains}>
                                <Text style={styles.searchButtonText}>FIND TRAINS</Text>
                            </TouchableOpacity>
                        </View>

                        {loading && <ActivityIndicator size="large" color="#9d4edd" style={{ marginTop: 20 }} />}

                        <FlatList
                            contentContainerStyle={styles.listContent}
                            data={trains}
                            keyExtractor={(train) => train._id}
                            ListEmptyComponent={
                                !loading ? (
                                    <Text style={styles.emptyText}>No trains found</Text>
                                ) : null
                            }
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    <View style={styles.cardHeader}>
                                        <Text style={styles.cardTitle}>{item.trainName}</Text>
                                        <View style={styles.badge}>
                                            <Text style={styles.badgeText}>{item.trainNumber}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.subText}>Runs: {item.daysOfOperation.join(', ')}</Text>
                                    <View style={styles.timeContainer}>
                                        <Text style={styles.timeText}>{item.departureTime}</Text>
                                        <Text style={styles.arrow}> ➜ </Text>
                                        <Text style={styles.timeText}>{item.arrivalTime}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </>
                )}
            </View>
        </SafeAreaView>
    )
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
        marginBottom: 20,
        gap: 12,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 25,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabButtonActive: {
        backgroundColor: '#9d4edd', // Purple fill
        borderColor: '#9d4edd',
    },
    tabButtonInactive: {
        backgroundColor: 'transparent',
        borderColor: '#9d4edd', // Purple outline
    },
    tabText: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    tabTextActive: { color: '#fff' },
    tabTextInactive: { color: '#d8b4fe' },

    // --- INPUTS ---
    inputContainer: {
        marginBottom: 10,
    },
    label: {
        color: "#d1d5db",
        fontSize: 14,
        marginBottom: 6,
        marginLeft: 4,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#120d20', // Dark purple/black bg
        borderWidth: 1,
        borderColor: '#333',
        color: "#fff",
        padding: 14,
        marginBottom: 16,
        borderRadius: 12,
        fontSize: 16,
    },
    disabledInput: {
        color: '#9ca3af',
        backgroundColor: '#1a1a1a',
        borderColor: '#222',
    },
    
    // --- SEARCH BUTTON ---
    searchButton: {
        backgroundColor: '#9d4edd',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
        shadowColor: "#9d4edd",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },

    // --- RESULTS LIST ---
    listContent: {
        paddingTop: 20,
        paddingBottom: 40,
    },
    emptyText: {
        color: "#6b7280",
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16,
    },

    // --- RESULT CARDS (Matches Profile Cards) ---
    card: {
        backgroundColor: '#120d20',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#9d4edd', // Purple border
        padding: 16,
        marginBottom: 16,
        shadowColor: "#d8b4fe",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    cardTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        flex: 1,
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
        fontSize: 12,
        fontWeight: 'bold',
    },
    subText: {
        color: "#9ca3af",
        fontSize: 14,
        marginBottom: 12,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0f0a1e',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333',
    },
    timeText: {
        color: "#fbbf24", // Gold color for time
        fontWeight: 'bold',
        fontSize: 16,
    },
    arrow: {
        color: "#6b7280",
        fontSize: 16,
        marginHorizontal: 10,
    }
});

export default Search;