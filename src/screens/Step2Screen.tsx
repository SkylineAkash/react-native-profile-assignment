import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { updateDraft } from '../store/profileSlice';
import { useNavigation } from '@react-navigation/native';

const Step2Screen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  
  // Access the draft profile data from the Redux store [cite: 6, 11]
  const draft = useSelector((state: RootState) => state.profiles.draftProfile);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Step 2: Address Info</Text>

        {/* City Input  */}
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          value={draft.city}
          onChangeText={(text) => dispatch(updateDraft({ city: text }))}
          placeholder="e.g. San Francisco"
        />

        {/* State Input  */}
        <Text style={styles.label}>State</Text>
        <TextInput
          style={styles.input}
          value={draft.state}
          onChangeText={(text) => dispatch(updateDraft({ state: text }))}
          placeholder="e.g. CA"
        />

        {/* Country Input  */}
        <Text style={styles.label}>Country</Text>
        <TextInput
          style={styles.input}
          value={draft.country}
          onChangeText={(text) => dispatch(updateDraft({ country: text }))}
          placeholder="e.g. USA"
        />

        <View style={styles.buttonRow}>
          {/* Back button navigates back to Step 1  */}
          <View style={styles.buttonContainer}>
            <Button 
              title="Back" 
              onPress={() => navigation.goBack()} 
              color="#666"
            />
          </View>
          
          {/* Next button navigates to Page 3 (Summary)  */}
          <View style={styles.buttonContainer}>
            <Button 
              title="Next" 
              onPress={() => navigation.navigate('Summary')} 
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { padding: 20, flex: 1 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  label: { fontWeight: '600', marginTop: 15, color: '#555' },
  input: { 
    borderWidth: 1, 
    borderColor: '#ddd', 
    padding: 12, 
    borderRadius: 8, 
    marginTop: 5,
    fontSize: 16 
  },
  buttonRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 40 
  },
  buttonContainer: { width: '45%' }
});

export default Step2Screen;