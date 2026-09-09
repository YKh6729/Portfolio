import app from "./root/app";
import { PORT } from "./config/environtment";

(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch {}
})();
