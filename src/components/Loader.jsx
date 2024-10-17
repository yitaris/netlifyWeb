
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as='div'
      style={{
        position: "fixed",   // Tüm ekranı kaplamak için sabit konum
        top: 0,
        left: 0,
        width: "100vw",      // Tam ekran genişliği
        height: "100vh",     // Tam ekran yüksekliği
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#000", // Opak arka plan
        zIndex: 1000,        // Diğer her şeyin üstünde olacak
        pointerEvents: "none", // Site ile tüm etkileşimleri devre dışı bırak
      }}
    >
      <div className="loader">
        {progress.toFixed(2)}%
      </div>
    </Html>
  );
};

export default CanvasLoader;
