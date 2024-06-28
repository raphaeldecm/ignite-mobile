import { Alert, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { Participant } from '@/src/components/Participant';

import { styles } from './styles';
import { useState } from 'react';

export default function Home() {
  
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Participante já adicionado');
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {

    Alert.alert(
      "Remover",
      `Remover Participante ${name}?`,
      [
        {
          text: "Não",
          style: "cancel"
        },
        { text: "Sim", onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)) }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Quarta, 26 de Junho de 2024.
      </Text>
      
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Digite seu nome" 
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={ styles.listEmptyText }>Não há participantes</Text>
        )}
      />

    </View>
  );
}