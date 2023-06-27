import Aplayer from 'react-aplayer';
import { LISTENLIST } from '@utils/variable';

export default function Listen() {
  const cofig = {
    theme: '#666',
    listFolded: true,
    listMaxHeight: '100px',
    lrcType: 3,
    audio: LISTENLIST,
  };
  return (
    <div className="listen h-card-shadow">
      <div id="listenBox">
        <Aplayer {...cofig} />
      </div>
    </div>
  );
}
