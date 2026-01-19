import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { saveProfile } from '../store/profileSlice';
import { useNavigation } from '@react-navigation/native';

const SummaryScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  
  // Retrieve the draft data we've been collecting in Steps 1 & 2
  const draft = useSelector((state: RootState) => state.profiles.draftProfile);

  const handleSubmit = () => {
    // Save the draft into the main profiles list [cite: 17]
    dispatch(saveProfile());
    // Navigate back to the Home Screen [cite: 18]
    navigation.popToTop(); 
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Review Your Profile</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Info</Text>
        <Text style={styles.detail}>Name: {draft.fullName}</Text>
        <Text style={styles.detail}>Email: {draft.email}</Text>
        <Text style={styles.detail}>Age: {draft.age}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address Info</Text>
        <Text style={styles.detail}>City: {draft.city}</Text>
        <Text style={styles.detail}>State: {draft.state}</Text>
        <Text style={styles.detail}>Country: {draft.country}</Text>
      </View>

      <View style={styles.buttonRow}>
        {/* The Edit button goes back to Page 2 [cite: 17] */}
        <View style={styles.buttonContainer}>
          <Button 
            title="Edit" 
            onPress={() => navigation.goBack()} 
            color="#666" 
          />
        </View>

        {/* The Submit button saves the data [cite: 17] */}
        <View style={styles.buttonContainer}>
          <Button 
            title="Submit" 
            onPress={handleSubmit} 
            color="#2ecc71" 
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  section: { 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 20,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#3498db' },
  detail: { fontSize: 16, marginBottom: 5, color: '#333' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 40 },
  buttonContainer: { width: '45%' }
});

export default SummaryScreen;