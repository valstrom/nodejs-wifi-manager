import wifi from "node-wifi";

export default async function handler(req, res) {
  wifi.init({
    iface: null, // network interface, choose a random wifi interface if set to null
  });

  const { method, body } = req;
  switch (method) {
    case "GET":
      // get wifi connections
      const networks = await wifi.scan();
      if (!networks) return res.status(400).json({ msg: "error" });
      return res.status(200).json(networks);
    case "POST":
      // send signal to connect a wifi connection
      await wifi
        .connect(body)
        .then(() => {
          return res.status(200).json({ msg: "Señal enviada" });
        })
        .catch((error) => {
          return res.status(400).json({ error: error });
        });
      return res.status(400).json({ msg: "Not connected" });
    default:
      return res.status(400).json({ msg: "error" });
  }
}
