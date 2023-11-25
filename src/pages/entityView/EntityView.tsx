import { useEffect, useState } from 'react';
import { EntityViewer } from '../../app/features/entityViewer/EntityViewer';
import { SfConnection } from '../../foundations/sfConnections';
const ENTITY_VIEW_SYMBOLE = Symbol('EntityView');
const EntityView = () => {
  const [sfConn, setSfConn] = useState<SfConnection>();
  useEffect(() => {
    const sfConn = new SfConnection();
    const args = new URLSearchParams(location.search.slice(1));
    const sfHost = args.get('host');
    if (!sfHost) {
      return;
    }

    sfConn.getSession(sfHost).then(() => {
      setSfConn(sfConn);
    });
  }, [ENTITY_VIEW_SYMBOLE]);

  if (!sfConn) {
    return <div>domainが有効ではありません．</div>;
  }

  return (
    <div className="h-screen w-screen">
      <EntityViewer />
    </div>
  );
};

export default EntityView;
