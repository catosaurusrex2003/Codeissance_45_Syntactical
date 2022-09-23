import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedExample(count) {
  return <ProgressBar animated now={count} />;
}

export default AnimatedExample;