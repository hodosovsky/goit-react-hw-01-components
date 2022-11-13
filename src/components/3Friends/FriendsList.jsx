// import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  UserStatusOn,
  UserStatusOff,
} from './FriendsList.Styled';

function FriendsList({ items }) {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          {item.isOnline ? (
            <UserStatusOn></UserStatusOn>
          ) : (
            <UserStatusOff></UserStatusOff>
          )}
          <img
            className="avatar"
            src={item.avatar}
            alt={item.name}
            width="96"
            height="96"
          />
          <p className="name">{item.name}</p>
        </ListItem>
      ))}
    </List>
  );
}

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
export default FriendsList;
