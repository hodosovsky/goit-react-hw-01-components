import PropTypes from 'prop-types';
import { ProfileCont, Stats, StatsItem, ProfileImg } from './Profile.styled';

const Profile = props => {
  const { avatar, username = 'не відомо', tag, location, stats } = props;
  return (
    <ProfileCont>
      <div className="description">
        <ProfileImg src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <Stats>
        <StatsItem>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </Stats>
    </ProfileCont>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
