import PropTypes from 'prop-types';
import { StatisticsCont, Title, Item } from './StatisticsList.styled';

const Statistics = props => {
  const { title, items } = props;
  return (
    <section className="statistics">
      {title && <Title>{title}</Title>}

      <StatisticsCont>
        {items.map(item => (
          <Item
            key={item.id}
            style={{
              backgroundColor: `${getRandomHexColor()}`,
            }}
          >
            <span className="label">{item.label} </span>
            <span className="percentage">{item.percentage}</span>
          </Item>
        ))}
      </StatisticsCont>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
