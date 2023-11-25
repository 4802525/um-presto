import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const POPUP_SYMBOL = Symbol('Popup');
const Popup = () => {
  document.body.className = 'w-[10rem] h-[20rem]';

  const entityViewUrl = '../pages/entityView/entityView.html';

  const [urlParams, setUrlParams] = useState<URLSearchParams>(new URLSearchParams());

  // 初期化
  useEffect(() => {
    chrome.runtime.sendMessage({ message: 'getCurrentUrl' }, (currentUrl) => {
      chrome.runtime.sendMessage({ message: 'getSfHost', url: currentUrl }, (sfHost) => {
        const params = new URLSearchParams();
        params.set('host', sfHost);
        setUrlParams(params);
      });
    });
  }, [POPUP_SYMBOL]);

  return (
    <>
      <Button
        onClick={() => {
          window.open(`${entityViewUrl}?${urlParams}`, '_blank');
        }}
      >
        Viewer Page
      </Button>
    </>
  );
};

export default Popup;
