export default function index() {
  return (
    <>
      <title>Node.js WiFi</title>
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          <div>
            Redirigete a <span style={{ color: "yellow" }}>/api/wifi</span> para
            continuar
          </div>
          <div style={{ marginTop: "2rem" }}>
            Método <span style={{ color: "lightgreen" }}>GET</span> para obtener
            todas las redes wifi obtenidas por tu dispositivo
          </div>
          <div style={{ marginTop: "2rem" }}>
            Método <span style={{ color: "lightgreen" }}>POST</span> con un{" "}
            <span style={{ color: "lightcoral" }}>body</span> de la siguiente
            composicion: <br />
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ textAlign: "left" }}>
                {"{"} <br />
                <span style={{ color: "lightsalmon", paddingLeft: "1.5rem" }}>
                  {'"ssid":'}{" "}
                </span>{" "}
                <span style={{ fontStyle: "italic", color: "yellow" }}>
                  Tu SSID del WiFi
                </span>
                <br />
                <span style={{ color: "lightsalmon", paddingLeft: "1.5rem" }}>
                  {'"password":'}{" "}
                </span>{" "}
                <span style={{ fontStyle: "italic", color: "yellow" }}>
                  Tu Contraseña del WiFi
                </span>
                <br />
                {"}"}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
