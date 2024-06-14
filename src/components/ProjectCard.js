// src/components/ProjectCard.js
import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const ProjectCard = ({ title, description, technologies, liveLink, repoLink }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.5 }}
    >
      <Card fluid>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{technologies}</Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {liveLink && (
            <Button animated='fade' color='green' href={liveLink} target="_blank">
              <Button.Content visible>Live</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          )}
          {repoLink && (
            <Button animated='fade' color='blue' href={repoLink} target="_blank">
              <Button.Content visible>Code</Button.Content>
              <Button.Content hidden>
                <Icon name='github' />
              </Button.Content>
            </Button>
          )}
        </Card.Content>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
