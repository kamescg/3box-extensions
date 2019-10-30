import { createPortal } from 'react-dom';
import usePortal from '../portalContext';

const Portal = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(children, target);
};

export default Portal;
