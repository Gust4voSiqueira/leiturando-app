import { Text, View, TextInput, Pressable } from 'react-native'
import { styles } from './styles'
import { filters } from '../..'
import { MagnifyingGlass } from 'phosphor-react-native'
import { useState } from 'react'
import { theme } from 'native-base'

interface IFiltersSection {
  alterFilter: (newFilter: filters) => void
  filter: filters
  onSearchUser: (searchName: string) => void
}

export function FiltersSection({
  alterFilter,
  filter,
  onSearchUser,
}: IFiltersSection) {
  const [searchName, setSearchName] = useState('')

  function onSearch() {
    if (searchName.trim() !== '') {
      onSearchUser(searchName)
    }
  }

  return (
    <View style={styles.filtersContainer}>
      <View style={styles.inputSearchContainer}>
        <TextInput
          placeholder="Pesquisar"
          placeholderTextColor={theme.colors.gray[300]}
          style={styles.inputFilter}
          onChangeText={(newText) => setSearchName(newText)}
        />

        <Pressable style={styles.iconSearch} onPress={onSearch}>
          <MagnifyingGlass
            size={25}
            color={theme.colors.gray[300]}
            weight="bold"
          />
        </Pressable>
      </View>

      <View style={styles.cardsFilterContainer}>
        <Pressable
          style={[styles.cardFilter, filter === 'All' && styles.filterSelected]}
          onPress={() => alterFilter('All')}
        >
          <Text style={styles.cardFilterText}>Todos</Text>
        </Pressable>

        <Pressable
          style={[
            styles.cardFilter,
            filter === 'Requests' && styles.filterSelected,
          ]}
          onPress={() => alterFilter('Requests')}
        >
          <Text style={styles.cardFilterText}>Solicitações</Text>
        </Pressable>

        <Pressable
          style={[
            styles.cardFilter,
            filter === 'Friends' && styles.filterSelected,
          ]}
          onPress={() => alterFilter('Friends')}
        >
          <Text style={styles.cardFilterText}>Amigos</Text>
        </Pressable>
      </View>
    </View>
  )
}
