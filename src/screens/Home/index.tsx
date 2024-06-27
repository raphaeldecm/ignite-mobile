import { Alert, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { Participant } from '@/src/components/Participant';

import { styles } from './styles';

export default function Home() {
  
  const participants = [
    'Raphael',
    'Ramon',
    'Ravi',
    'John',
    'Mary',
    'David',
    'Sarah',
    'Michael',
    'Emily'
  ];

  function handleParticipantAdd() {
    if (participants.includes('Raphael')) {
      return Alert.alert('Participante já adicionado');
    }
    console.log('Adicionar Participante');
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
        { text: "Sim", onPress: () => Alert.alert(`Removido ${name}`) }
      ]
    );
    console.log(`Remover Participante ${name}`);
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