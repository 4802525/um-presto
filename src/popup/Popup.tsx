import { EntityViewer } from '../app/features/entityViewer';

const Popup = () => {
  document.body.className = 'w-[40rem] h-[30rem]';

  return (
    <>
      <EntityViewer />
    </>
  );
};

export default Popup;
