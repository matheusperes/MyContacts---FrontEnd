import {Overlay} from './styles';
import ReactDOM from 'react-dom';

export function Loader() {
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root')
  )
}
