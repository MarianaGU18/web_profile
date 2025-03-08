import { useEffect } from "react";
import "./CredlyBadge.css";

const CredlyBadge = () => {
  useEffect(() => {
    // Cargar el script de Credly dinámicamente después del renderizado
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div>
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="7cb65b77-3bcf-436a-b1c5-df656166ef52"
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="8cf74a51-f015-4707-ab43-2238c840d728"
        data-share-badge-host="https://www.credly.com"
      ></div>
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="86c7b3ed-72c9-400a-8d24-3519744a0c7a"
        data-share-badge-host="https://www.credly.com"
      ></div>

      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="52ef31a3-32b8-459c-99cd-3e45ada5b13e"
        data-share-badge-host="https://www.credly.com"
      ></div>

      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="9a7c3df9-64c8-4a75-b086-b06698c3e311"
        data-share-badge-host="https://www.credly.com"
      ></div>

      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="cd1597d5-8e02-4cd7-9a30-73dbc0bb2183"
        data-share-badge-host="https://www.credly.com"
      ></div>

      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="6a78b3a4-1a36-4697-8953-7e8e74feaddc"
        data-share-badge-host="https://www.credly.com"
      ></div>
    </div>
  );
};

export default CredlyBadge;
