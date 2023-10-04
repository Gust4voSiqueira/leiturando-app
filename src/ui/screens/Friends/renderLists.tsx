import { filters } from '.'
import { IRequests } from '../../../contexts/RequestsContext'
import { CardFriendsSection } from './sections/CardFriend'

interface IRenderLists {
  filters: filters
  requests: IRequests
  cleanResultsSearch: () => void
}

export function RenderLists({
  filters,
  requests,
  cleanResultsSearch,
}: IRenderLists) {
  return (
    <>
      {(filters === 'All' || filters === 'Requests') &&
        requests?.requests.map((request) => (
          <CardFriendsSection
            key={request.id}
            id={request.id}
            name={request.name}
            image={request.image}
            mutualFriends={request.mutualFriends}
            typeCard="REQUEST_RECEIVED"
            cleanResultsSearch={cleanResultsSearch}
          />
        ))}
      {(filters === 'All' || filters === 'Requests') &&
        requests?.requestsSend.map((request) => (
          <CardFriendsSection
            key={request.id}
            id={request.id}
            name={request.name}
            image={request.image}
            mutualFriends={request.mutualFriends}
            typeCard="REQUEST_SEND"
            cleanResultsSearch={cleanResultsSearch}
          />
        ))}
      {(filters === 'All' || filters === 'Requests') &&
        requests?.usersRecommended.map((user) => (
          <CardFriendsSection
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            mutualFriends={user.mutualFriends}
            typeCard="Recommended Friend"
            cleanResultsSearch={cleanResultsSearch}
          />
        ))}
      {(filters === 'All' || filters === 'Friends') &&
        requests?.friends.map((user) => (
          <CardFriendsSection
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            typeCard="FRIEND"
            cleanResultsSearch={cleanResultsSearch}
          />
        ))}
    </>
  )
}
