import { Button } from '@mui/material';

const Popup = () => {
  document.body.className = 'w-[10rem] h-[20rem]';

  const entityViewUrl = '../pages/entityView/entityView.html';

  return (
    <>
      <Button
        onClick={() => {
          window.open(entityViewUrl, '_blank');
        }}
      >
        Viewer Page
      </Button>
    </>
  );
};

export default Popup;
