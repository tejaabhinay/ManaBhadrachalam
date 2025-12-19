import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar } from "react-native";
import { images } from "@/constants/images"; 
import { icons } from "@/constants/icons";   
import SearchBar from "@/components/SearchBar"; 
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>                
                <ScrollView 
                    style={styles.scrollView} 
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={{ paddingBottom: 40 }}
                >
                    <View style={styles.headerContainer}>
                        <Image source={icons.image} style={styles.logo} resizeMode="contain" />
                    </View>
                    <View style={styles.titleBlock}>
                        <Text style={styles.welcomeText}>Welcome</Text>
                        <Text style={styles.subTitleText}>Home To</Text>
                        <Text style={styles.mainTitleText}>Bhadrachalam</Text>
                        <View style={styles.titleUnderline} />
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>History & Legend</Text>
                        </View>
                        <Text style={styles.cardText}>
                            Bhadrachalam, nestled on the banks of the <Text style={styles.highlightText}>Godavari</Text>, is a sacred land linked to the Ramayana. Here, Lord Rama is believed to have blessed his devotee Bhakta Bhadra, giving the town its name.
                            {"\n\n"}
                            The iconic <Text style={styles.highlightText}>Sita Ramachandra Swamy Temple</Text> was later restored by the great devotee Sri Ramadasu. Today, it stands as a timeless symbol of devotion.
                        </Text>
                    </View>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>How To Reach?</Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={images.bridge} style={styles.cardImage} />
                        <View style={styles.cardContent}>
                            <View style={styles.badgeContainer}>
                                <View style={styles.badge}><Text style={styles.badgeText}>SCENIC ROUTE</Text></View>
                            </View>
                            <Text style={styles.cardSubtitle}>By Road</Text>
                            <Text style={styles.cardText}>
                                Cross the beautiful Godavari River through the Bhadrachalam Bridge. This route links major cities like <Text style={styles.highlightText}>Khammam</Text>, <Text style={styles.highlightText}>Hyderabad</Text>, and <Text style={styles.highlightText}>Vijayawada</Text> directly to the temple town.
                            </Text>
                        </View>
                    </View>

                    {/* --- 2. BY TRAIN --- */}
                    <View style={styles.card}>
                        <Image source={images.railway} style={styles.cardImage} />
                        <View style={styles.cardContent}>
                            <View style={styles.badgeContainer}>
                                <View style={styles.badge}><Text style={styles.badgeText}>NEAREST STATION</Text></View>
                            </View>
                            <Text style={styles.cardSubtitle}>By Train</Text>
                            <Text style={styles.cardText}>
                                Direct train facility is not available. The nearest station is <Text style={styles.highlightText}>Bhadrachalam Road (Kothagudem)</Text>, approx 40km away. Timely buses are available from there on an hourly basis.
                            </Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
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
        backgroundColor: "#000", // Main background
    },
    scrollView: {
        paddingHorizontal: 20,
    },

    // --- HEADER ---
    headerContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    logo: {
        width: 60,
        height: 60,
    },
    searchContainer: {
        marginBottom: 20,
    },
    titleBlock: {
        marginBottom: 30,
        alignItems: 'flex-start',
    },
    welcomeText: {
        fontSize: 28,
        color: "#d8b4fe",
        fontFamily: "NunitoRegular",
        letterSpacing: 1,
    },
    subTitleText: {
        fontSize: 24,
        color: "#fff",
        fontFamily: "NunitoRegular",
        marginTop: -5,
    },
    mainTitleText: {
        fontSize: 42,
        color: "#fff",
        fontWeight: "800",
        marginTop: 5,
        textShadowColor: 'rgba(157, 78, 221, 0.5)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20,
    },
    titleUnderline: {
        width: 80,
        height: 4,
        backgroundColor: '#9d4edd',
        marginTop: 5,
        borderRadius: 2,
    },

    // --- SECTION HEADERS ---
    sectionHeader: {
        marginTop: 20,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 28,
        color: "#fff",
        fontWeight: "700",
        letterSpacing: 0.5,
    },

    // --- CARDS ---
    card: {
        backgroundColor: '#120d20', // Deep Dark Purple Background
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#9d4edd', // Neon Purple Border
        marginBottom: 24,
        overflow: 'hidden',
        shadowColor: "#d8b4fe",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#2d2d2d',
        backgroundColor: 'rgba(157, 78, 221, 0.1)',
    },
    cardIcon: {
        fontSize: 24,
        marginRight: 10,
    },
    cardTitle: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "700",
    },
    cardImage: {
        width: "100%",
        height: 180,
        resizeMode: 'cover',
    },
    cardContent: {
        padding: 16,
    },
    cardSubtitle: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "700",
        marginBottom: 8,
    },
    cardText: {
        fontSize: 15,
        color: "#d1d5db", // Light Gray
        lineHeight: 24,
        textAlign: "left",
        padding: 16, // Added padding for text-only cards
        paddingTop: 10,
    },
    highlightText: {
        color: "#eab308", // Gold color for key terms
        fontWeight: "bold",
    },

    // --- BADGES ---
    badgeContainer: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    badge: {
        backgroundColor: '#3b0764',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#9d4edd',
    },
    badgeText: {
        color: '#e9d5ff',
        fontSize: 11,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});