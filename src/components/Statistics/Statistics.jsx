import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map((stat, i) => (
          <StatItem key={stat.id} id={stat.id} index={i}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
