import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteProfile, startEdit, resetDraft } from '../store/profileSlice';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const profiles = useSelector((state: RootState) => state.profiles.profiles);
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const handleAddNew = () => {
    dispatch(resetDraft()); // Clears any previous draft data
    navigation.navigate('Step1'); // Starts Page 1 flow [cite: 21]
  };

  const handleEdit = (id: string) => {
    dispatch(startEdit(id)); // Loads existing profile into draft state [cite: 5]
    navigation.navigate('Step1');
  };

  const handleDelete = (id: string) => {
    Alert.alert("Delete Profile", "Are you sure you want to remove this profile?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => dispatch(deleteProfile(id)) }
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
        <Text style={styles.addButtonText}>+ Add New Profile</Text>
      </TouchableOpacity>

      {profiles.length === 0 ? (
        <Text style={styles.emptyText}>No profiles found. Click above to add one.</Text>
      ) : (
        <FlatList
          data={profiles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.name}>{item.fullName}</Text>
                <Text style={styles.email}>{item.email}</Text>
                <Text style={styles.location}>{item.city}, {item.country}</Text>
              </View>
              
              <View style={styles.actionRow}>
                <TouchableOpacity 
                  style={[styles.actionButton, styles.editBtn]} 
                  onPress={() => handleEdit(item.id)}
                >
                  <Text style={styles.btnText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.actionButton, styles.deleteBtn]} 
                  onPress={() => handleDelete(item.id)}
                >
                  <Text style={styles.btnText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f0f2f5' },
  addButton: { 
    backgroundColor: '#3498db', 
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginBottom: 20 
  },
  addButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  card: { 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 15,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  email: { color: '#666', marginTop: 2 },
  location: { color: '#888', fontSize: 12, marginTop: 2 },
  actionRow: { flexDirection: 'column', gap: 10 },
  actionButton: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 4, alignItems: 'center' },
  editBtn: { backgroundColor: '#f39c12' },
  deleteBtn: { backgroundColor: '#e74c3c' },
  btnText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  emptyText: { textAlign: 'center', marginTop: 50, color: '#999', fontSize: 16 }
});

export default HomeScreen;