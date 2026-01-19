import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { updateDraft } from '../store/profileSlice';
import { useNavigation } from '@react-navigation/native';

const Step1Screen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  
  // Get existing draft data from Redux 
  const draft = useSelector((state: RootState) => state.profiles.draftProfile);
  const [error, setError] = useState('');

  const handleNext = () => {
    // Basic validation for required fields 
    if (!draft.fullName || !draft.email || !draft.age) {
      setError('Please fill in all basic info fields.');
      return;
    }
    setError('');
    navigation.navigate('Step2'); // Navigate to Page 2 [cite: 10]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={draft.fullName}
        onChangeText={(text) => dispatch(updateDraft({ fullName: text }))}
        placeholder="Enter your full name"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={draft.email}
        onChangeText={(text) => dispatch(updateDraft({ email: text }))}
        placeholder="example@mail.com"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        value={draft.age}
        onChangeText={(text) => dispatch(updateDraft({ age: text }))}
        placeholder="Enter age"
        keyboardType="numeric"
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontWeight: 'bold', marginTop: 15 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginTop: 5 },
  errorText: { color: 'red', marginTop: 10, marginBottom: 10 }
});

export default Step1Screen;